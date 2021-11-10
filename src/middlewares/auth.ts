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
      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
      res.status(401).json({ message: 'Authentication failed.' });
    }
  };
}

export default withAuth;
