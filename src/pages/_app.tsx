import { useAnalytics, usePageView } from '../firebase/analytics';
import { ToastProvider } from 'react-toast-notifications';
import { usePerformance } from '../firebase/performance';
import { AuthProvider } from 'src/components/providers';
import { useNProgress } from 'src/utils/nprogress';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import 'nprogress/nprogress.css';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const { asPath, pathname } = useRouter();
  useNProgress();
  useAnalytics();
  usePerformance();
  usePageView(asPath, pathname);
  return (
    <AuthProvider>
      <ToastProvider placement='bottom-center' autoDismiss>
        <Component {...pageProps} />
        <div className='novisibility' id='CaptchaContainer' />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
