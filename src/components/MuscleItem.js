import React, {useState} from 'react'
import { TextInput, View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'

const MuscleItem = (props) => {
    const {
        item,
        biceps,
        pectoraux,
        taille,
        fesses,
        cuisses,
        mollet,
        poids,
        setBiceps,
        setPectoraux,
        setTaille,
        setFesses,
        setCuisses,
        setMollets,
        setPoids,
        currentIndex,
    } = props
    
    const selectValue = () => {
        switch(currentIndex){
            case 0 : biceps;break;
            case 1 : pectoraux;break;
            case 2 : taille;break;
            case 3 : fesses;break;
            case 4 : cuisses;break;
            case 5 : mollet;break;
            case 6 : poids;break;
        }
    }
    const selectFunction = (text) => {
        switch(currentIndex){
            case 0 : setBiceps(text);break;
            case 1 : setPectoraux(text);break;
            case 2 : setTaille(text);break;
            case 3 : setFesses(text);break;
            case 4 : setCuisses(text);break;
            case 5 : setMollets(text);break;
            case 6 : setPoids(text);break;
        }
    }

    const { width } = useWindowDimensions()

    return (
        <View style={[styles.container, {width}]}>
            <Image 
                style={[styles.image]}
                source={item.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <TextInput 
                style={styles.input}
                value={selectValue()}
                onChangeText={text => selectFunction(text)}
                keyboardType="numeric"
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:40
    },
    image:{
        height:150,
        width:150,
        justifyContent:'center'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
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