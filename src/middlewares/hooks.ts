import { AuthContext } from 'src/components/providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';

export function useUser(userProp?: User) {
  const context = useContext(AuthContext);
  const [user, setUser] = useState(context.user || userProp);
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init) setUser(context.user as User);
    else {
      setUser(context.user || userProp);
      setInit(true);
    }
    // eslint-disable-next-line
  }, [context]);
  return { user };
}
