import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'

import SplashScreen from './src/components/SplashScreen'
import Navigator from './src/components/Navigator'

import firestore from '@react-native-firebase/firestore'


const App = () => {
  const [userName, setUserName] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async() => {
  }

  useEffect(() => {
    const mesureDocument = firestore().collection("mesures").onSnapshot(doc => {
      doc.forEach((element) => {
        console.log(element.data())
      })
    })
    setIsLoading(false)
  }, [isLoading])

  return isLoading? (
    <SplashScreen/>
  ) : (
    <Navigator />
  )
}

const styles = StyleSheet.create({
  container:{
  },
  splashScreen:{
    height:500,
    width:500
  }
})

export default App
