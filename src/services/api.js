const API_URL = 'https://britishcouncil-api.onrender.com/api';

async function postJson(path, payload) {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({
    ok: false,
    message: 'Unexpected server response.',
  }));

  if (!response.ok) {
    throw new Error(data.message || 'Request failed.');
  }

  return data;
}

export function submitNewsletter(payload) {
  return postJson('/api/newsletter', payload);
}

export function submitContact(payload) {
  return postJson('/api/contact', payload);
}

export async function getPage(slug) {
  const response = await fetch(`${API_URL}/pages/${slug}`);
  if (!response.ok) throw new Error('Page not found');
  return response.json();
}

export async function getAllPages() {
  const response = await fetch(`${API_URL}/pages`);
  if (!response.ok) throw new Error('Failed to fetch pages');
  return response.json();
}