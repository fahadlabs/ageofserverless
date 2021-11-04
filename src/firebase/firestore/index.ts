import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { saveDisplayName } from '../auth';
import { firebaseApp } from '..';

export const firestore = getFirestore(firebaseApp);

export const createContact = async (subject: string, name: string, email: string, message: string, newsletter: boolean = true) => {
  await addDoc(collection(firestore, 'contacts'), {
    subject,
    name,
    email,
    message,
    newsletter,
    date: Timestamp.now(),
  });
  saveDisplayName(name);
};

export const createSubscription = async (email: string) => {
  await addDoc(collection(firestore, 'newsletters'), {
    email,
    date: Timestamp.now(),
  });
};
