import { useAnalytics, usePageView } from '../firebase/analytics';
import { ToastProvider } from 'react-toast-notifications';
import { usePerformance } from '../firebase/performance';
import { useSignin } from '../firebase/auth';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const { events, ...router } = useRouter();
  useSignin();
  useAnalytics();
  usePerformance();
  usePageView(router.asPath, router.pathname);
  useEffect(() => {
    const startProgress = () => {
      nProgress.start();
    };
    const stopProgress = () => {
      nProgress.done();
    };
    events.on('routeChangeStart', startProgress);
    events.on('routeChangeError', stopProgress);
    events.on('routeChangeComplete', stopProgress);
  }, []);
  return (
    <ToastProvider placement='bottom-center' autoDismiss>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default App;
