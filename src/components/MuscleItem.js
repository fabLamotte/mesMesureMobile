import React, {useState} from 'react'
import { TextInput, View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'

const MuscleItem = ({item}) => {
    const { width } = useWindowDimensions()
    const [poids, setPoids] = useState(0)

    return (
        <View style={[styles.container, {width}]}>
            <Image 
                style={[styles.image]}
                source={item.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <TextInput 
                style={styles.input}
                value={poids}
                onChangeText={setPoids}
                keyboardType="numeric"
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
    },
    image:{
        height:200,
        width:200,
        justifyContent:'center'
    },
    title:{
        color:'white',
        fontWeight:'bold'
    },
    input:{
        height:50,
        width:200,
        backgroundColor:'white',
        borderRadius:100,
        paddingLeft:30,
        marginTop:25
    }
})

export default MuscleItem