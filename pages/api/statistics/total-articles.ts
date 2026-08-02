import type { NextApiRequest, NextApiResponse } from 'next';

// Blog content has moved to a third-party platform, so this no longer
// queries Notion. getPublishedArticles() in lib/notion.ts is kept for
// reference but is intentionally not called.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
    );

  // const data = await getPublishedArticles(process.env.NOTION_DATABASE_ID);
  // return res.status(200).json({ totalArticles: data.length });

  return res.status(200).json({ totalArticles: 0 });
}
