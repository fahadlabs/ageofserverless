import { onAuthStateChanged, signInAnonymously, User, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '..';

export const auth = getAuth(firebaseApp);

let initialUser: User;
export function useUser() {
  const [user, setUser] = useState(initialUser);
  const [working, setWorking] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setWorking(false);
    });
  }, []);
  return { user, working };
}

export function useSignin() {
  const [signing, setSigning] = useState(true);
  const a = useUser();
  useEffect(() => {
    if (!a.user && !a.working) {
      (async () => {
        await signInAnonymously(auth);
        setSigning(false);
      })();
    }
  }, [a]);
  return signing;
}

export async function saveDisplayName(name: string) {
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
}
