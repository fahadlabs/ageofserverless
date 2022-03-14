import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';

export function startNProgress() {
  nProgress.start();
}

export function stopNProgress() {
  nProgress.done();
}

export function useNProgress() {
  const { events } = useRouter();
  useEffect(() => {
    events.on('routeChangeError', stopNProgress);
    events.on('routeChangeComplete', stopNProgress);
  }, []);
}
