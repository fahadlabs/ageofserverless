import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../../../middlewares';
import { resolve } from 'dns/promises';

async function ARecord(req: NextApiRequest, res: NextApiResponse) {
  try {
    const addresses = await resolve(req.body.hostname);
    res.status(200).json({ data: addresses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default withAuth(ARecord);
