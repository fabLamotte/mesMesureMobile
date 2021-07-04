import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import ButtonMuscles from '../components/progressComponent/ButtonMuscles'

const Progress = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleZone}>
                <Text style={styles.title}>Votre progression</Text>
            </View>
            <ButtonMuscles />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272727',
    },
    titleZone:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor:'red'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default Progress