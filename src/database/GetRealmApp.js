import Realm from 'realm'

const appId = 'mesmesures-vikkv'
export function getApp() {
  const appConfig = {
    id: appId,
    timeout: 10000,
  }
  return new Realm.App(appConfig)
}
