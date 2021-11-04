import { initializePerformance } from 'firebase/performance';
import { useEffect } from 'react';
import { firebaseApp } from '..';

export const usePerformance = () => {
  useEffect(() => {
    initializePerformance(firebaseApp);
  }, []);
};
