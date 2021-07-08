import React, {useEffect, useState} from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Form from './../screens/Form'
import Progress from './../screens/Progress'
import SplashScreen from '../components/SplashScreen'

import { AuthContext } from '../contexts/AuthContext'
import openRealm from './../database/OpenRealm'
import { getApp } from './../database/GetRealmApp'
import { ObjectId } from 'bson'

const Stack = createStackNavigator()

const HomeNavigation = () => {

    const [canWriteNow, setCanWriteNow] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const loadData = async() => {
        // Accès aux données de l'utilisateur connecté
        const app = getApp()
        const realm = await openRealm()
        const user = realm.objectForPrimaryKey("User", ObjectId(app.currentUser.id))

        // Accès à la dernière date de la prise de mesure
        let lastDate = new Date(user.mesures[user.mesures.length-1].date);
        let date = new Date()
        date > lastDate.addDays(7)? setCanWriteNow(true) : setCanWriteNow(false)
        setIsLoading(false)
    }

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    useEffect(() =>{
        loadData()
    }, [isLoading])

    return isLoading?(
        <SplashScreen />
    ):(
        <Stack.Navigator initialRouteName={canWriteNow? "Formulaire": "Progression" } screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Formulaire">
                {(props) => <Form {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Progression">
                {(props) => <Progress {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeNavigation