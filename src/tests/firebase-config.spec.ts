import { firebaseConfig } from '../config/firebase';

const firebaseProjectIds = ['axt-stage', 'axt-run'];

describe('Use Firebase project', () => {
  test(`should use ${firebaseProjectIds.join(' or ')}`, () => {
    expect(firebaseProjectIds.includes(firebaseConfig.projectId)).toBe(true);
  });
});
