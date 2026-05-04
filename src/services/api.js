const API_URL = (import.meta.env.VITE_API_URL || 'https://britishcouncil-api.onrender.com/api').replace(/\/$/, '');

function emitLoadingEvent(name) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(name));
  }
}

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

async function appFetch(url, options) {
  emitLoadingEvent('app-loading-start');

  try {
    return await fetch(url, options);
  } finally {
    emitLoadingEvent('app-loading-done');
  }
}

async function postJson(path, payload) {
  const response = await appFetch(`${API_URL}${path}`, {
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
  const response = await appFetch(`${API_URL}/pages/${slug}`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Page not found');
  }

  return data;
}

export async function getAllPages() {
  const response = await appFetch(`${API_URL}/pages`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch pages');
  }

  return data;
}

export async function getEvents() {
  const response = await appFetch(`${API_URL}/events`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch events');
  }

  return data;
}

export async function getLibraryResources() {
  const response = await appFetch(`${API_URL}/library/resources`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch library resources');
  }

  return data;
}

export async function getBlogPosts() {
  const response = await appFetch(`${API_URL}/blog/posts`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch blog posts');
  }

  return data;
}

export async function getHomeContent() {
  const response = await appFetch(`${API_URL}/home`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch home content');
  }

  return data;
}

export async function getSearchResults(query = '') {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.set('q', query.trim());
  }

  const response = await appFetch(`${API_URL}/search${params.toString() ? `?${params}` : ''}`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch search results');
  }

  return data;
}

export async function getSiteChrome() {
  const response = await appFetch(`${API_URL}/site/chrome`);
  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch site navigation');
  }

  return data;
}
