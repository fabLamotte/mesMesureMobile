import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import SignNavigation from './SignNavigation'
import HomeNavigation from './HomeNavigation'

const RootNavigation = (props) => {

    const {
        userId
    } = props

    return (
        <NavigationContainer>
            {userId ? <HomeNavigation /> : <SignNavigation />}
        </NavigationContainer>
    )
}

export default RootNavigation