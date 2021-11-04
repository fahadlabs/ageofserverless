import { firebaseConfig } from '../config/firebase.config';
import { execSync } from 'child_process';

describe('Check firebase config', () => {
  const stdout = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' });
  const branch = stdout.replace('\n', '');
  const { projectId } = firebaseConfig;
  it(`branch: ${branch}, project_id: ${projectId}`, () => {
    expect(projectId).toBe(branch === 'main' ? 'axt-run' : 'axt-stage');
  });
});
