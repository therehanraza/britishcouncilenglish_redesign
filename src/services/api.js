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
