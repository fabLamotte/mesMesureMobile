import Realm from 'realm'
import {MesureSchema, UserSchema} from './../schemas/index'
import { getApp } from './GetRealmApp'

export default async function openRealm() {
  let realm

  const app = getApp()

  try {
    const config = {
      schema: [MesureSchema, UserSchema],
      sync: {
        user: app.currentUser,
        partitionValue: '60e4b54151d68d396c60bb94',
      },
    }
    
    realm = await Realm.open(config)
    return realm
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`
  }
}
