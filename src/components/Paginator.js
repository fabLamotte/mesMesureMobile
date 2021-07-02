import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native'

const Paginator = ({data, scrollX}) => {

    const {width} = useWindowDimensions()
    console.log(width)

    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i-1)*width, i*width, (i+1)*width]

                const changeColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['white', '#880C0C', 'white'],
                    extrapolate:'clamp'
                })


                return <Animated.View style={[styles.dot, {backgroundColor:changeColor}]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        height:50,
        justifyContent:'center'
    },
    dot:{
        height:20,
        width:20,
        borderRadius:10,
        marginHorizontal:8
    }
})

export default Paginator