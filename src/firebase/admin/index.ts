import { firebaseConfig } from '../../config/firebase.config';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: firebaseConfig.projectId,
    }),
    databaseURL: firebaseConfig.databaseURL,
  });
}

export default admin;
