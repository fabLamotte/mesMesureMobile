import React, {useContext, useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import ButtonMuscles from '../components/progressComponent/ButtonMuscles'
import DateChecking from '../components/progressComponent/DateChecking'
import Graph from '../components/progressComponent/Graph'
import Weight from '../components/progressComponent/Weight'

import { AuthContext } from '../contexts/AuthContext'

const Progress = () => {

    const [title, setTitle] = useState("")
    const {signOut} = useContext(AuthContext)

    async function onLogOut() {
        await signOut()
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleZone}>
                <Text style={styles.title}>Votre progression</Text>
            </View>
            <ButtonMuscles setTitle={setTitle} />
            <Graph title={title} />
            <Weight />
            <DateChecking />
            <View style={styles.buttonZone}>
                <TouchableOpacity style={styles.disconnect} onPress={onLogOut}>
                    <Text style={styles.whiteColor}>Me déconnecter</Text>
                </TouchableOpacity>
            </View>
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
    },
    title:{
        color:'white',
        textAlign:'center',
    },
    buttonZone:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:50
    },
    disconnect:{
        height:50,
        backgroundColor:"#880C0C",
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    whiteColor:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',

    }
})

export default Progress