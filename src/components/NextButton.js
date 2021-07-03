import React, {useState, useEffect, useRef} from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const NextButton = (props) => {
    const {
        scrollToNext,
        scrollToPrevious,
        biceps,
        pectoraux,
        taille,
        fesses,
        cuisses,
        mollet,
        poids,
        errorMessage,
        setBiceps,
        setPectoraux,
        setTaille,
        setFesses,
        setCuisses,
        setMollets,
        setPoids,
        setErrorMessage,
        currentIndex,
        Muscles
    } = props
    
    const checkValue = () => {
        var value = "";
        switch(currentIndex){
            case 0 : value = biceps; break;
            case 1 : value = pectoraux; break;
            case 2 : value = taille; break;
            case 3 : value = fesses; break;
            case 4 : value = cuisses; break;
            case 5 : value = mollet; break;
            case 6 : value = poids; break;
        }

        if(value.match('/[0-9]+(\.[0-9][0-9]?)?/gm')){
            scrollToNext()
        } else {
            setErrorMessage("Votre saisie n'est pas du bon format")
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={scrollToPrevious}>
                <Text style={styles.text}>Précédent</Text>        
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={checkValue}>
                <Text style={styles.text}>{currentIndex == Muscles.length-1 ? "Valider" :"Suivant"}</Text>        
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingVertical:50,
        flexDirection:'row'
    },
    button:{
        height:50,
        width:150,
        backgroundColor:'#641111',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'white',
        marginHorizontal:10
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})

export default NextButton