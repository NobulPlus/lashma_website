const DEFAULT_LIMIT = 4;
const GRAPH_BASE_URL = 'https://graph.instagram.com';

function trimCaption(caption = '', maxLength = 140) {
  if (caption.length <= maxLength) {
    return caption;
  }

  return `${caption.slice(0, maxLength).trim()}...`;
}

export default async function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const instagramUserId = process.env.INSTAGRAM_USER_ID;
  const limit = Number.parseInt(req.query?.limit ?? DEFAULT_LIMIT, 10) || DEFAULT_LIMIT;

  if (!accessToken || !instagramUserId) {
    res.status(500).json({
      error: 'Instagram credentials are missing',
      posts: [],
    });
    return;
  }

  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'permalink',
    'thumbnail_url',
    'timestamp',
    'username',
  ].join(',');

  const url = `${GRAPH_BASE_URL}/${instagramUserId}/media?fields=${encodeURIComponent(fields)}&access_token=${encodeURIComponent(accessToken)}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      res.status(response.status).json({
        error: payload?.error?.message || 'Failed to fetch Instagram media',
        posts: [],
      });
      return;
    }

    const posts = (payload.data || []).map((post) => ({
      id: post.id,
      title: trimCaption(post.caption || 'Latest update from LASHMA'),
      category: post.media_type === 'VIDEO' ? 'Video' : 'Instagram',
      description: trimCaption(post.caption || 'See the latest update from LASHMA on Instagram.', 160),
      image: post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url,
      href: post.permalink,
      publishedAt: post.timestamp,
      username: post.username,
    }));

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown Instagram error',
      posts: [],
    });
  }
}
