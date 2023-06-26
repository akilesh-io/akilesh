import type { NextApiRequest, NextApiResponse } from 'next';

import { getPublishedArticles } from '@/lib/notion';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
    );
  
  const data = await getPublishedArticles(process.env.NOTION_DATABASE_ID);

  return res.status(200).json({ totalArticles: data.length });
}
