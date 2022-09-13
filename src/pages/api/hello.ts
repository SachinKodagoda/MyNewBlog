import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TData>) {
  // eslint-disable-next-line no-console
  console.log(req);
  res.status(200).json({ name: 'John Doe' });
}
