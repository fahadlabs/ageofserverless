import { getValue, getRemoteConfig, RemoteConfig, isSupported } from 'firebase/remote-config';
import { firebaseApp } from '..';

let remoteConfig: RemoteConfig;

(async () => {
  if (!(await isSupported())) return;
  remoteConfig = getRemoteConfig(firebaseApp);
  remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
  remoteConfig.defaultConfig = {
    welcome_message: 'Hello and welcome',
  };
})();

export async function getWelcomeMessage() {
  if (await isSupported()) {
    return getValue(remoteConfig, 'welcome_message');
  }
}
