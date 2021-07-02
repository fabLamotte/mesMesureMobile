import React, {useRef, useState} from 'react'
import { StyleSheet, View, Text, FlatList, Animated } from 'react-native'

import Muscles from './../data/Muscles.js'
import MuscleItem from './../components/MuscleItem'
import Paginator from '../components/Paginator.js'
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag'

const Form = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    const scrollTo = () => {
        if(currentIndex < Muscles.length- 1){
            slidesRef.current.scrollToIndex({index:currentIndex + 1})
        } else {
            console.log('dernier item')
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
                <FlatList 
                    data={Muscles}
                    renderItem={ ({item}) => <MuscleItem item={item} /> }
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    onScroll={ Animated.event([{nativeEvent: {contentOffset: {x : scrollX}}}], {
                        useNativeDriver:false
                    }) }
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
                <View style={styles.paginator}>
                    <Paginator data={Muscles} scrollX={scrollX} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272727'
    },
    content:{
        zIndex:2,
        justifyContent:'space-around'
    },
    paginator:{
        marginTop:250
    }
})

const visual = StyleSheet.create({
    barBlock:{
        zIndex:0
    },
    bar1:{
        position:'absolute',
        backgroundColor:'#880C0C',
        height:1000,
        width:100,
        transform: [{rotate:'25deg'}],
        marginTop:-350,
        marginLeft:20
    },
    bar2:{
        position:'absolute',
        backgroundColor:'#880C0C',
        height:1000,
        width:50,
        transform: [{rotate:'45deg'}],
        marginTop:-50
    },
    bar3:{
        position:'absolute',
        backgroundColor:'#880C0C',
        height:1000,
        width:25,
        transform: [{rotate:'65deg'}],
        marginTop:30
    },
    bar4:{
        position:'absolute',
        backgroundColor:'#880C0C',
        height:1000,
        width:10,
        transform: [{rotate:'80deg'}],
        marginTop:70
    },
    darkFilter:{
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'black',
        opacity:0.3
    }
})

export default Form