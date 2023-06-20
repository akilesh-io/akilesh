import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  res.status(200).json({ name: 'Subscribe' })


  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const existingSubscriber = await prisma.newsletter.findUnique({
        where: {
          email: email
        }
      });
      if (existingSubscriber) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      const newSubscriber = await prisma.newsletter.create({
        data: {
          email: email
        }
      });
      res.status(201).json({ message: 'Email added to the newsletter successfully.' });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while adding the email to the newsletter.' });
    }
  } else {
    res.status(405).json({ error: `The HTTP ${req.method} method is not supported at this route.` });
  }
}
