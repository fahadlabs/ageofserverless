import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from '..';

export const firestore = getFirestore(firebaseApp);
