import React, { useReducer, useMemo } from 'react'
import { StyleSheet } from 'react-native'

import { getApp } from './src/database/GetRealmApp'
import {reducer} from './src/reducers/reducer'
import {getActions} from './src/actions/authActions'
import { AuthContext } from './src/contexts/AuthContext'
import RootNavigation from './src/navigation/RootNavigation'
import { useEffect } from 'react/cjs/react.production.min'
import openRealm from './src/database/OpenRealm'

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
      isLoading: true,
      isSignout: false,
      userId: null,
    });
  
    const authContext = useMemo(() => {
      const app = getApp();
      return getActions(app, dispatch);
    }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <RootNavigation userId={state.userId} />
    </AuthContext.Provider>
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
