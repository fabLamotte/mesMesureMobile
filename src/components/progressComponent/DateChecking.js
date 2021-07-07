import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'

const DateChecking = () => {

    const date = moment()

    return(
        <View style={styles.container}>
            <Text style={styles.content}>Vos prochaines saisies seront disponible dans</Text>
            <Text style={styles.remainingTime}>3 jours 18 heures 33 minutes et 20 sec</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        color:'#880C0C',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    remainingTime:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default DateChecking