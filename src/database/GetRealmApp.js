import Realm from 'realm'

const appId = 'bodybuild-piwsq'
export function getApp() {
  const appConfig = {
    id: appId,
    timeout: 10000,
  }
  return new Realm.App(appConfig)
}
