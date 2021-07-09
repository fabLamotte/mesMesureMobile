import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {VictoryChart, VictoryLine, VictoryAxis} from 'victory-native'

const Graph = (props) => {

    const {
        title,
        dataGraph,
    } = props

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title? title : "Biceps"}</Text>
            <VictoryChart
                height={270}
            >
                <VictoryLine
                    data={dataGraph}
                    style={{
                        data: { stroke: "#c43a31", stroke: "#c43a31", strokeWidth: 5, strokeLinecap: "round" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    interpolation="basis"
                />
                <VictoryAxis  
                    style={{
                        axis: {stroke: "white"},
                        tickLabels: {stroke: "white"},
                    }}
                />
                <VictoryAxis dependentAxis
                    style={{
                        axis: {stroke: "white"},
                        tickLabels: {stroke: "white"},
                    }}
                />
            </VictoryChart>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})

export default Graph