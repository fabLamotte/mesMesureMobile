import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/images/Splashscreen.jpg')}
            />
            <View style={styles.darkFilter}></View>
            <View style={styles.branding}>
                <Text style={styles.textBranding}>Mes Mesures</Text>
                <Text style={styles.chargement}>Chargement</Text>
            </View>
            <View style={styles.spinnerBlock}>
                <ActivityIndicator size={50} color='white' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        height:'100%',
        width:'100%',
        zIndex:0,
    },
    darkFilter:{
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'black',
        zIndex:1,
        opacity:0.4
    },
    branding:{
        height:'100%',
        width:'100%',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    },
    textBranding:{
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'white'
    },
    chargement:{
        color:'white',
        fontSize:20,
        fontStyle:'italic'
    },
    spinnerBlock:{
        position:'absolute',
        height:'100%',
        width:'100%',
        zIndex:2,
        justifyContent:'flex-end',
        paddingBottom:120
    }
})

export default SplashScreen