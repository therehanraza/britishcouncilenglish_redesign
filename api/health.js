import { allowCors, handleOptions, hasSupabaseConfig, sendJson } from '../server/supabaseRest.js';

export default function handler(request, response) {
  allowCors(response);

  if (handleOptions(request, response)) {
    return;
  }

  sendJson(response, 200, {
    ok: true,
    app: 'britishcounsilenglish_redesign',
    databaseConfigured: hasSupabaseConfig(),
  });
}
