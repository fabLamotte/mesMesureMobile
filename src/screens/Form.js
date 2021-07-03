import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, FlatList, Animated, ScrollView } from 'react-native'

import Muscles from './../data/Muscles.js'
import MuscleItem from './../components/MuscleItem'
import Paginator from '../components/Paginator.js'
import NextButton from '../components/NextButton.js'

const Form = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)

    // Variable à remplir dans le formulaire
    const [biceps, setBiceps] = useState("")
    const [pectoraux, setPectoraux] = useState("")
    const [taille, setTaille] = useState("")
    const [fesses, setFesses] = useState("")
    const [cuisses, setCuisses] = useState("")
    const [mollet, setMollets] = useState("")
    const [poids, setPoids] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    // Fonction de retour en arrière
    const scrollToNext = () => {
        if (currentIndex < Muscles.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
        }
    }

    // Fonction de scroll vers la slide suivante
    const scrollToPrevious = () => {
        if (currentIndex > 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 })
        }
    }

    return (
        <View style={styles.container}>
            <View style={visual.barBlock}>
                <View style={visual.bar1}></View>
                <View style={visual.bar2}></View>
                <View style={visual.bar3}></View>
                <View style={visual.bar4}></View>
            </View>
            <View style={visual.darkFilter}></View>
            <View style={styles.content}>
                <ScrollView>
                    <FlatList
                        data={Muscles}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        scrollEnabled={false}
                        bounces={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                        renderItem={({ item }) =>
                            <MuscleItem
                                item={item}
                                currentIndex={currentIndex}
                                biceps={biceps}
                                pectoraux={pectoraux}
                                taille={taille}
                                fesses={fesses}
                                cuisses={cuisses}
                                mollet={mollet}
                                poids={poids}
                                setBiceps={setBiceps}
                                setPectoraux={setPectoraux}
                                setTaille={setTaille}
                                setFesses={setFesses}
                                setCuisses={setCuisses}
                                setMollets={setMollets}
                                setPoids={setPoids}
                                setErrorMessage={setErrorMessage}
                            />
                        }
                    />
                    <Text style={styles.error}>{errorMessage? errorMessage : null}</Text>
                    <NextButton 
                        scrollToNext={scrollToNext} 
                        scrollToPrevious={scrollToPrevious} 
                        currentIndex={currentIndex}
                        biceps={biceps}
                        pectoraux={pectoraux}
                        taille={taille}
                        fesses={fesses}
                        cuisses={cuisses}
                        mollet={mollet}
                        poids={poids}
                        errorMessage={errorMessage}
                        setBiceps={setBiceps}
                        setPectoraux={setPectoraux}
                        setTaille={setTaille}
                        setFesses={setFesses}
                        setCuisses={setCuisses}
                        setMollets={setMollets}
                        setPoids={setPoids}
                        Muscles={Muscles}
                        setErrorMessage={setErrorMessage}
                    />
                    <Paginator 
                        data={Muscles} 
                        scrollX={scrollX} 
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
    },
    content: {
        zIndex: 2,
        flex:1,
        justifyContent: 'space-around',
    },
    paginator: {
        marginTop: 250,
    },
    error:{
        color:'red',
        textAlign:'center'
    }
})

const visual = StyleSheet.create({
    barBlock: {
        zIndex: 0
    },
    bar1: {
        position: 'absolute',
        backgroundColor: '#880C0C',
        height: 1000,
        width: 100,
        transform: [{ rotate: '25deg' }],
        marginTop: -350,
        marginLeft: 20
    },
    bar2: {
        position: 'absolute',
        backgroundColor: '#880C0C',
        height: 1000,
        width: 50,
        transform: [{ rotate: '45deg' }],
        marginTop: -50
    },
    bar3: {
        position: 'absolute',
        backgroundColor: '#880C0C',
        height: 1000,
        width: 25,
        transform: [{ rotate: '65deg' }],
        marginTop: 30
    },
    bar4: {
        position: 'absolute',
        backgroundColor: '#880C0C',
        height: 1000,
        width: 10,
        transform: [{ rotate: '80deg' }],
        marginTop: 70
    },
    darkFilter: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.3
    }
})

export default Form