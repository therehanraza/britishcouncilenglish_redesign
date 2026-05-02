const jsonHeaders = {
  'Content-Type': 'application/json',
};

export function sendJson(response, statusCode, body) {
  response.status(statusCode).setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(body));
}

export function allowCors(response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export function handleOptions(request, response) {
  if (request.method !== 'OPTIONS') {
    return false;
  }

  sendJson(response, 200, { ok: true });
  return true;
}

export function requireMethod(request, response, method) {
  if (request.method === method) {
    return true;
  }

  response.setHeader('Allow', method);
  sendJson(response, 405, {
    ok: false,
    message: `Only ${method} requests are allowed.`,
  });
  return false;
}

export function sanitizeText(value, maxLength = 500) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
}

export function sanitizeStringArray(values, maxItems = 12) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .filter((value) => typeof value === 'string')
    .map((value) => sanitizeText(value, 120))
    .filter(Boolean)
    .slice(0, maxItems);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getClientMeta(request) {
  const forwardedFor = request.headers['x-forwarded-for'];
  const ipAddress = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0]?.trim() || request.socket?.remoteAddress || null;

  return {
    ip_address: ipAddress,
    user_agent: request.headers['user-agent'] || null,
  };
}

export function getSupabaseConfig() {
  return {
    url: process.env.SUPABASE_URL,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  };
}

export function hasSupabaseConfig() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.serviceRoleKey);
}

export async function insertSupabaseRow(tableName, row) {
  const { url, serviceRoleKey } = getSupabaseConfig();

  if (!url || !serviceRoleKey) {
    return {
      ok: false,
      status: 500,
      data: null,
      error: 'Supabase environment variables are not configured.',
    };
  }

  const endpoint = `${url.replace(/\/$/, '')}/rest/v1/${tableName}`;

  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...jsonHeaders,
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(row),
  });

  const text = await result.text();
  const data = text ? JSON.parse(text) : null;

  if (!result.ok) {
    return {
      ok: false,
      status: result.status,
      data: null,
      error: data?.message || 'Supabase insert failed.',
    };
  }

  return {
    ok: true,
    status: result.status,
    data,
    error: null,
  };
}
