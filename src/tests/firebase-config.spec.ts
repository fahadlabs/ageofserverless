import { firebaseConfig } from '../config/firebase.config';
import { exec } from 'child_process';
import { exit } from 'process';

describe('Check firebase config', () => {
  it('is using right config of firebase', () => {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      if (err || stderr) {
        exit(1);
      }
      switch (stdout) {
        case 'main':
          expect(firebaseConfig.projectId).toBe('axt-run');
          break;
        default:
          expect(firebaseConfig.projectId).toBe('axt-stage');
      }
    });
  });
});
