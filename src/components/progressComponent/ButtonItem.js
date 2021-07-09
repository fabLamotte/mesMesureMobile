import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const ButtonItem = (props) => {

    const {
        item,
        setTitle,
        loadDataGraph
    } = props

    const fetch = (target) => {
        setTitle(target)
        loadDataGraph(target.toLowerCase())
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => fetch(item.title)}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        justifyContent:'center'
    },
    button:{
        height:40,
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
        fontSize:18,
        fontWeight:'bold'
    }
})

export default ButtonItem