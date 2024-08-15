import { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { r2 } from '@/lib/r2';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const key = randomUUID()

    const bucket = process.env.R2_BUCKET_NAME

    // Generate a pre-signed URL for uploading the file
    const url = await getSignedUrl(r2, new PutObjectCommand({ Bucket: bucket, Key: key }))

    // Return the URL and key  to the client
    res.status(200).json({ key, url })
}    