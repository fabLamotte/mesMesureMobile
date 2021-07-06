import Realm from 'realm'
import {MesureSchema, UserSchema} from './../schemas/index'
import { getApp } from './getRealmApp'

export default async function openRealm() {
  let realm

  const app = getApp()

  try {
   
    const config = {
      schema: [MesureSchema, UserSchema],
      sync: {
        user: app.currentUser,
        partitionValue: '60da0d21e8a7863e8714ce91',
      },
    }
    
    realm = await Realm.open(config)
    console.log('dedans 2 ', realm)
    return realm
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`
  }
}
