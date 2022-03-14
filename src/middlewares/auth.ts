import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import admin from '../firebase/admin';

export function withServerAuth(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { token } = parseCookies({ req });
      await admin.auth().verifyIdToken(token);
      return handler(req, res);
    } catch (err) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
      res.status(401).json({ message: 'Authentication failed.' });
    }
  };
}

export default withServerAuth;
