import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import SplashScreen from './src/components/SplashScreen'
import Navigator from './src/components/Navigator'

const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  return isLoading? (
    <SplashScreen/>
  ) : (
    <Navigator />
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  splashScreen:{
    height:500,
    width:500
  }
})

export default App
