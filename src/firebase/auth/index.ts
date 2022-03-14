import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '..';

export const auth = getAuth(firebaseApp);

export function useSignin() {
  const [signing, setSigning] = useState(true);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      if (!u) signInAnonymously(auth);
      else {
        setUser(u);
        setSigning(false);
      }
    });
  }, []);
  return { user, signing };
}
