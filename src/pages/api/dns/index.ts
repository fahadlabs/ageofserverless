import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../../middlewares';

async function Test(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API message' });
}

export default withAuth(Test);
