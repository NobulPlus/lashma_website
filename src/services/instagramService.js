const DEFAULT_LIMIT = 4;
const DEFAULT_ENDPOINT = '/api/instagram-feed';

export async function getInstagramFeed(limit = DEFAULT_LIMIT) {
  const configuredEndpoint = import.meta.env.VITE_INSTAGRAM_FEED_URL?.trim();
  const baseUrl = configuredEndpoint || DEFAULT_ENDPOINT;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const requestUrl = `${baseUrl}${separator}limit=${limit}`;

  const response = await fetch(requestUrl, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Instagram feed request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return Array.isArray(payload?.posts) ? payload.posts : [];
}
