import { firebaseConfig } from '../../config/firebase.config';
import admin, { credential } from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      projectId: firebaseConfig.projectId,
    }),
    databaseURL: firebaseConfig.databaseURL,
  });
}

export default admin;
