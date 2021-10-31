import { firebaseConfig } from '../config/firebase.config';
import { initializeApp } from 'firebase/app';

export const firebaseApp = initializeApp(firebaseConfig);
