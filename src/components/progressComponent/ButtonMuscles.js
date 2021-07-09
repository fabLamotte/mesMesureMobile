import React from 'react'
import { FlatList, View } from 'react-native'

import Muscles from '../../data/Muscles'
import ButtonItem from './ButtonItem'

const ButtonMuscles = (props) => {

    const {
        setTitle,
        setZoneCible,
        loadDataGraph
    } = props

    return (
        <View>
            <FlatList
                data={Muscles}
                horizontal
                renderItem={({item}) => <ButtonItem item={item} setTitle={setTitle} setZoneCible={setZoneCible} loadDataGraph={loadDataGraph} />}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ButtonMuscles