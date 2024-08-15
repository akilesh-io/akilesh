import { NextApiRequest, NextApiResponse } from 'next';
import { formUpload } from '@/lib/notion';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const posts = await formUpload(req.body);
    res.status(200).json(posts);
}    