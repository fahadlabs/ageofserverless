import { logEvent, Analytics, isSupported, getAnalytics, initializeAnalytics } from 'firebase/analytics';
import { useEffect } from 'react';
import { firebaseApp } from '..';

let analytics: Analytics;

(async () => {
  analytics = (await isSupported()) && getAnalytics(firebaseApp);
})();

export const useAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') return;
    initializeAnalytics(firebaseApp);
  }, []);
};

export const usePageView = (location: string, path: string) => {
  useEffect(() => {
    let title = 'ftoolkit';
    if (typeof document === 'object') {
      title = document.title;
    }
    if (typeof window !== 'undefined') return;
    logEvent(analytics, 'page_view', { page_location: location, page_path: path, page_title: title });
  }, []);
};

export const logNewContact = () => {
  logEvent(analytics, 'new_contact');
};

export const logLogin = (method: string = 'Anonymously') => {
  logEvent(analytics, 'login', { method });
};
export const logSignup = (method: string = 'Anonymously') => {
  logEvent(analytics, 'sign_up', { method });
};
