import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Weight = (props) => {

    const {
        userInfos
    } = props

    return(
        <View style={styles.container}>
            <View style={styles.weightZone}>
                <Text style={styles.weight}>{userInfos.mesures[userInfos.mesures.length-1].poids}</Text>
                <Text style={styles.kilo}>KG</Text>
            </View>
            <Text style={styles.perte}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'row',
        paddingTop:20,
    },
    weightZone:{
        height:'100%',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    weight:{
        fontSize:50,
        color:'white',
        fontWeight:'bold'
    },
    kilo:{
        fontSize:10,
        color:'white',
        fontWeight:'bold',
        paddingBottom:8,
        paddingLeft:5
    },
    perte:{
        fontSize:15,
        color:'red',
        fontWeight:'bold',
    }
})

export default Weight