import { firebaseConfig } from '../config/firebase';

const firebaseProjectIds = ['axt-stage', 'aoslcom'];

describe('Use Firebase project', () => {
  test(`should use appropriate firebase project id.`, () => {
    expect(firebaseProjectIds.includes(firebaseConfig.projectId)).toBe(true);
  });
});
