import type { NextApiRequest, NextApiResponse } from 'next';
import { formUpload } from '@/lib/notion';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const body = req.body;
    if (!body || typeof body !== 'object' || !Array.isArray(body.services) ||
        typeof body.firstName !== 'string' || !body.firstName.trim() ||
        typeof body.email !== 'string' || !body.email.includes('@')
    ) {
        return res.status(400).json({ error: 'Invalid payload' });
    }

    try {
        await formUpload(body);
        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('notion formUpload failed', error);
        return res.status(500).json({ error: 'Failed to submit inquiry' });
    }
}
