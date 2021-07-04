import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const ButtonItem = ({item}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => alert(item.title)}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:70,
        justifyContent:'center'
    },
    button:{
        height:50,
        width:150,
        backgroundColor:'#880C0C',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:15,
        margin:5,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10
    },
    title:{
        color:'white',
    }
})

export default ButtonItem