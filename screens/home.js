import React, { Component } from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { URL_GETCLOTHES } from "@env"
import Swiper from '../appfunc/Swiper.js';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Circle } from 'react-native-animated-spinkit';
import * as Animatable from 'react-native-animatable';



function homeScreen({ navigation }) {

    StatusBar.setHidden(true);
    let quantity = 30;
    let screen = "home";


    const [data, setData] = React.useState([]);
    const [colorBoxButton, setColor] = React.useState("#D16002");
    const [loadAnimation, setLoadAnimation] = React.useState(false);
    const [accesible, setAccesible] = React.useState(true);

    React.useState(() => {
        console.log("Animacion de carga iniciada");
    }, [loadAnimation])

    React.useEffect(() => {

        getStart(quantity, screen);

    }, [])
    React.useEffect(() => {
        console.log("se cambia color de boton box-open");

    }, [colorBoxButton])

    React.useState(() => {
        console.log("Cambia acceso a view principal");
    }, [accesible])

    var getStart = async (quant, scr) => {
        setLoadAnimation(true);
        setAccesible(true);
        try {
            console.log("antes de request");
            console.log(URL_GETCLOTHES);
            let response = await fetch(
                `${URL_GETCLOTHES}`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        quant,
                        scr
                    })

                });
            console.log("antes de response URL_GETCLOTHES");
            var json = await response.json();


            setData(json);
            setLoadAnimation(false);
            setAccesible(false);



        } catch (err) {
            setLoadAnimation(false);
            setAccesible(true);
            console.log(err);
            throw err;
        }

    }

    var bottom = (e) => {
        Alert.alert('Swipe Bottom');
    }

    var top = (e) => {
        Alert.alert('Swipe Top');
    }

    return (

        <View style={styles.containerHome}>


            <View style={styles.containerHome_1} >
                <View style={styles.boxHeaderHome}>
                    <Feather.Button name="menu" size={40} color="#D16002" onPress={() => navigation.navigate('Options')} backgroundColor="black" style={{ alignSelf: "center" }} />

                </View>

                <View style={styles.boxHeaderHome_2}>
                    <Image
                        style={{ width: 120, height: 69, alignSelf: "center", resizeMode: "contain" }}
                        source={require('../images/LogoTitle2.jpg')}

                    />
                </View>
                <View style={styles.boxHeaderHome}>
                    <FontAwesome5.Button name="box-open" size={30} color={colorBoxButton} onPress={() => {
                        navigation.navigate('MyBox');
                        let ColorBox = "#D16002";
                        setColor(ColorBox);
                    }} backgroundColor="black" style={{ alignSelf: "center" }} />

                </View>

            </View>
            <View style={styles.containerHome_2} >
                <View style={styles.boxBodyHome_A}>
                    <Circle size={40} color="#D16002" style={styles.containerFront_CB} animating={loadAnimation} />
                </View>
                <View style={styles.boxBodyHome_B}>
                    <View style={styles.boxBodyHome_BB}>

                        <Swiper
                            images={data.resources}
                            swipeBottom={(e) => bottom(e)}
                            swipeTop={(e) => top(e)}
                            textSize={12}
                            textBold={true}
                            textColor={"#ffffff"}
                            textUnderline={true}
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>
                <View style={styles.boxBodyHome_C}>
                    <Animatable.View animation="fadeInUp" style={styles.boxBodyHome_CA}>

                        <Entypo.Button name="info" size={40} color="#D16002" disabled={accesible} backgroundColor="#FFFFFF" onPress={() => Alert.alert('info del producto Modal')} style={{ alignSelf: "center" }} />
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.boxBodyHome_CA}>
                        <MaterialIcons.Button name="add-box" size={40} disabled={accesible} color="#D16002" backgroundColor="#FFFFFF" onPress={() => {

                            let ColorBox = "rgba(88,240,255,1)";
                            setColor(ColorBox);
                        }} style={{ alignSelf: "center" }} />
                    </Animatable.View>

                </View>
                <View style={styles.boxBodyHome_D}>

                </View>


            </View>

        </View >
    );

}
export { homeScreen };

