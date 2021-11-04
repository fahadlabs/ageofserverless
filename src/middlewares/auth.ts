import { NextApiRequest, NextApiResponse } from 'next';
import { IAPIFunction } from '../interfaces/backend';
import admin from '../firebase/admin';

function withAuth(apiFunction: IAPIFunction) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const idToken = req.headers.authorization.split(' ')[1];
      await admin.auth().verifyIdToken(idToken);
      return apiFunction(req, res);
    } catch (err) {
      const msg = 'Invalid request / Authentication failed.';
      res.status(400).json({ error: msg, message: msg });
    }
  };
}

export default withAuth;
