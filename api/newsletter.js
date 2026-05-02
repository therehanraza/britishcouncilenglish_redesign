import {
  allowCors,
  getClientMeta,
  handleOptions,
  insertSupabaseRow,
  isValidEmail,
  requireMethod,
  sanitizeStringArray,
  sanitizeText,
  sendJson,
} from '../server/supabaseRest.js';

export default async function handler(request, response) {
  allowCors(response);

  if (handleOptions(request, response)) {
    return;
  }

  if (!requireMethod(request, response, 'POST')) {
    return;
  }

  const name = sanitizeText(request.body?.name, 120);
  const email = sanitizeText(request.body?.email, 180).toLowerCase();
  const topics = sanitizeStringArray(request.body?.topics);
  const consent = Boolean(request.body?.consent);

  if (!name || !isValidEmail(email) || !consent) {
    sendJson(response, 400, {
      ok: false,
      message: 'Please provide a valid name, email, and consent.',
    });
    return;
  }

  const insert = await insertSupabaseRow('newsletter_signups', {
    name,
    email,
    topics,
    consent,
    source: 'newsletter_page',
    ...getClientMeta(request),
  });

  if (!insert.ok) {
    sendJson(response, insert.status, {
      ok: false,
      message: insert.error,
    });
    return;
  }

  sendJson(response, 201, {
    ok: true,
    message: 'Newsletter signup saved.',
    data: insert.data?.[0] || null,
  });
}
