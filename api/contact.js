import {
  allowCors,
  getClientMeta,
  handleOptions,
  insertSupabaseRow,
  isValidEmail,
  requireMethod,
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
  const topic = sanitizeText(request.body?.topic, 120);
  const message = sanitizeText(request.body?.message, 2000);

  if (!name || !isValidEmail(email) || !topic || message.length < 10) {
    sendJson(response, 400, {
      ok: false,
      message: 'Please provide a valid name, email, topic, and message.',
    });
    return;
  }

  const insert = await insertSupabaseRow('contact_messages', {
    name,
    email,
    topic,
    message,
    source: 'contact_page',
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
    message: 'Contact message saved.',
    data: insert.data?.[0] || null,
  });
}
