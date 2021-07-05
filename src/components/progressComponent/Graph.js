import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from "victory-native"

const Graph = (props) => {

    const {
        title
    } = props

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title? title : "Biceps"}</Text>
            <VictoryChart height={250} >
                <VictoryLine 
                    style={{ bar: {
                        color: "red",
                      },
                      data: { stroke: "#c43a31" }, parent: { border: "1px solid #ccc"} }}
                    data={[ { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 4 }, { x: 5, y: 7 } ]}
                    interpolation='natural'
                    animate={{ duration: 2000, onLoad: { duration: 1000 } }}
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
        fontWeight:'bold'
    }
})

export default Graph