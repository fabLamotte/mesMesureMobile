import React, {useRef} from 'react'
import { FlatList, Animated } from 'react-native'

import Muscles from '../../data/Muscles'
import ButtonItem from './ButtonItem'

const ButtonMuscles = () => {
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <FlatList
            data={Muscles}
            horizontal
            renderItem={({item}) => <ButtonItem item={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={true}
        />
    )
}

export default ButtonMuscles