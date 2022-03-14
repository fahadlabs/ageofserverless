import { createContext, ReactNode, useEffect } from 'react';
import { auth, useSignin } from 'src/firebase/auth';
import { User } from 'firebase/auth';
import { setCookie } from 'nookies';

export const AuthContext = createContext<{ user: User | null; signing: boolean }>({
  user: null,
  signing: true,
});

function AuthProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    return auth.onIdTokenChanged(async (u) => {
      if (!u) {
        setCookie(undefined, 'token', '', { path: '/' });
      } else {
        const token = await u.getIdToken();
        setCookie(undefined, 'token', token, { path: '/' });
      }
    });
  }, []);
  const { signing, user } = useSignin();
  return <AuthContext.Provider value={{ user, signing }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
