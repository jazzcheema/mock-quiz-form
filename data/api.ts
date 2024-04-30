import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Received webhook:', data);

    // Process the data here (e.g., save to database, send notifications)

    res.status(200).json({ message: 'Webhook received successfully' });
  } else {
    // Only allow POST method, respond with 405 Method Not Allowed if not POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}