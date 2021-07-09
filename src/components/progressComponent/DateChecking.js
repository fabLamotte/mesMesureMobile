import React, {useState, useRef} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import CountDownTimer from 'react-native-countdown-timer-hooks'

const DateChecking = (props) => {

    const {
        date,
        navigation
    } = props

    // On estime le temps restant jusqu'à ce qu'1 semaine soit passée depuis la dernière inscription de mesure
    let timestamp = new Date(date).addDays(7).getTime()
    let nowTimestamp = new Date().getTime()
    let goodTimesTamp = Math.round((timestamp - nowTimestamp) / 1000)

    const refTimer = useRef()
    const [timerEnd, setTimerEnd] = useState(false)

    const timerCallbackFunc = (timerFlag) => {
        setTimerEnd(timerFlag)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.content}>Vos prochaines saisies seront disponible dans</Text>
            {
                // Si le timer est fini, on affiche le boutton d'accès à l'inscription de nouvelles mesures
                timerEnd?
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulaire')}>
                        <Text style={styles.title}>Rentrer mes nouvelles saisies</Text>
                    </TouchableOpacity>
                </View>
                :
                <CountDownTimer
                    ref={refTimer}
                    timestamp={goodTimesTamp}
                    timerCallback={timerCallbackFunc}
                    textStyle={{
                        color: '#FFFFFF',
                        fontWeight: '500',
                    }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        color:'#880C0C',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    remainingTime:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    button:{
        backgroundColor:'#880C0C',
        height:50,
        width:'70%',
        justifyContent:'center',
        alignItems:'center'
    },
    viewButton:{
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontWeight:'bold',
    }
})

export default DateChecking