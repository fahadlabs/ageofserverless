import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../../middlewares';

async function DNSRecords(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API message' });
}

export default withAuth(DNSRecords);
