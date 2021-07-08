import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import ButtonMuscles from '../components/progressComponent/ButtonMuscles'
import DateChecking from '../components/progressComponent/DateChecking'
import Graph from '../components/progressComponent/Graph'
import Weight from '../components/progressComponent/Weight'
import SplashScreen from './../components/SplashScreen'

import { AuthContext } from '../contexts/AuthContext'
import openRealm from './../database/OpenRealm'
import { getApp } from './../database/GetRealmApp'
import { ObjectId } from 'bson'
import moment from 'moment'

const Progress = () => {

    const [title, setTitle] = useState("")
    const {signOut} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    const [userInfos, setUserInfos] = useState({})
    const [dataGraph, setDataGraph] = useState("")
    const [zoneCible, setZoneCible] = useState("")

    async function onLogOut() {
        await signOut()
    }

    const loadDataGraph = (target) =>{
        userInfos.mesures.map((element) =>{
            let cible = ""

            switch(zoneCible){
                case "biceps": cible = element.biceps;break;
                case "pectoraux": cible = element.pectoraux;break;
                case "taille": cible = element.taille;break;
                case "fesses": cible = element.fesses;break;
                case "cuisses": cible = element.cuisses;break;
                case "mollets": cible = element.mollets;break;
                default : cible = element.biceps;break;
            }

            console.log(cible)
        })
    }

    const loadUserInformations = async() =>{
        const app = getApp()
        const realm = await openRealm()
        const user = realm.objectForPrimaryKey("User", ObjectId(app.currentUser.id))
        if(user){
            setUserInfos(user)
            let datas = []
            user.mesures.map((element) => {
                moment().locale()
                datas.push({x: moment(element.date).format("DD / MM / YY"), y: element.biceps})
            })
            setDataGraph(datas)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadUserInformations()
    },[isLoading])

    return isLoading?(
        <SplashScreen />
    ) : (
        <View style={styles.container}>
            <View style={styles.titleZone}>
                <Text style={styles.title}>Votre progression</Text>
            </View>
            <ButtonMuscles setTitle={setTitle} setDataGraph={setDataGraph} userInfos={userInfos} />
            <Graph title={title} dataGraph={dataGraph} />
            <Weight userInfos={userInfos} />
            <DateChecking />
            <View style={styles.buttonZone}>
                <TouchableOpacity style={styles.disconnect} onPress={onLogOut}>
                    <Text style={styles.whiteColor}>Me déconnecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#272727',
    },
    titleZone:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
    },
    title:{
        color:'white',
        textAlign:'center',
    },
    buttonZone:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:50
    },
    disconnect:{
        height:50,
        backgroundColor:"#880C0C",
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    whiteColor:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',

    }
})

export default Progress