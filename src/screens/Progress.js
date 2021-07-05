import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import ButtonMuscles from '../components/progressComponent/ButtonMuscles'
import DateChecking from '../components/progressComponent/DateChecking'
import Graph from '../components/progressComponent/Graph'
import Weight from '../components/progressComponent/Weight'

const Progress = () => {

    const [title, setTitle] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.titleZone}>
                <Text style={styles.title}>Votre progression</Text>
            </View>
            <ButtonMuscles setTitle={setTitle} />
            <Graph title={title} />
            <Weight />
            <DateChecking />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#272727',
    },
    titleZone:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
    },
    title:{
        color:'white',
        textAlign:'center'
    }
})

export default Progress