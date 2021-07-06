import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Connexion from '../screens/Connexion'
import Inscription from '../screens/Inscription'
const Tab = createBottomTabNavigator()

const SignNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Connexion" 
            tabBarOptions={{
                activeTintColor:'#880C0C',
                activeBackgroundColor:'#272727',
                inactiveBackgroundColor:'#272727',
                tabStyle:{
                    justifyContent:'center',
                },
                labelStyle:{
                    fontSize:18
                }
            }}
        >
            <Tab.Screen name="Connexion" component={Connexion} />
            <Tab.Screen name="Inscription" component={Inscription} />
        </Tab.Navigator>
    )
}

export default SignNavigation