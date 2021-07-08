import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from "victory-native"

const Graph = (props) => {

    const {
        setDataGraph,
        userInfos,
        title,
        dataGraph
    } = props

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title? title : "Biceps"}</Text>
            <VictoryChart height={250}>
                <VictoryLine 
                    style={{ bar: {
                        color: "red",
                      },
                      data: { stroke: "#c43a31" }, parent: { border: "1px solid #ccc"} }}
                    data={dataGraph}
                />
                <VictoryAxis
                    style={{
                        axis: {stroke: "white"},
                        tickLabels: {stroke: "white",angle:-50, fontSize:10, padding:25},
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