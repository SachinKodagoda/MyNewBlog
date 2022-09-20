import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  publishableKey: string | null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TData>) {
  if (req.method === 'GET') {
    res.status(200).json({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || null,
    });
  } else {
    res.status(405).end('Method not allowed');
  }
}
