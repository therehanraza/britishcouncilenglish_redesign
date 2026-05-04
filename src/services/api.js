const API_URL = (import.meta.env.VITE_API_URL || 'https://britishcouncil-api.onrender.com/api').replace(/\/$/, '');

async function parseJson(response) {
  try {
    return await response.json();
  } catch {
    return {
      ok: false,
      message: 'Unexpected server response.',
    };
  }
}

async function postJson(path, payload) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Request failed.');
  }

  return data;
}

export function submitNewsletter(payload) {
  return postJson('/newsletter', payload);
}

export function submitContact(payload) {
  return postJson('/contact', payload);
}

export async function getPage(slug) {
  const response = await fetch(`${API_URL}/pages/${slug}`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Page not found');
  }

  return data;
}

export async function getAllPages() {
  const response = await fetch(`${API_URL}/pages`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch pages');
  }

  return data;
}
