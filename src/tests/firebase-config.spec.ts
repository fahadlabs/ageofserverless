import { firebaseConfig } from '../config/firebase';

const firebaseProjectIds = ['axt-stage', 'aoslcom'];

describe('Use Firebase project', () => {
  test(`should use ${firebaseProjectIds.join(' or ')}, current: ${firebaseConfig.projectId}`, () => {
    expect(firebaseProjectIds.includes(firebaseConfig.projectId)).toBe(true);
  });
});
