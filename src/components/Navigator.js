import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Form from '../screens/Form'
import Progress from '../screens/Progress'

const Stack = createStackNavigator()

const Navigator = () => {
    return (    
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Formulaire" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Formulaire">
                    {(props) => <Form {...props} />}
                </Stack.Screen>
                <Stack.Screen name="Progression">
                    {(props) => <Progress {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator 