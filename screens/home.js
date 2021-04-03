import React, { Component } from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { URL_GETCLOTHES } from "@env"
import Swiper from '../appfunc/Swiper.js';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



function homeScreen({ navigation }) {

    StatusBar.setHidden(true);
    let quantity = 30;
    let screen = "home";

    const [data, setData] = React.useState([]);


    React.useEffect(() => {

        getStart(quantity, screen);

    }, [])

    var getStart = async (quant, scr) => {
        /*var state = {
            images: [
                {
                    url: String,
                    name: String
                }
            ]
        }*/
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


        } catch (err) {
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
                    <Button
                        onPress={() => navigation.navigate('Options')}
                        title="Options"
                        color="#D16002"
                    />

                </View>

                <View style={styles.boxHeaderHome_2}>
                    <Image
                        style={{ width: 120, height: 69, alignSelf: "center", resizeMode: "contain" }}
                        source={require('../images/LogoTitle2.jpg')}

                    />
                </View>
                <View style={styles.boxHeaderHome}>
                    <Button
                        onPress={() => navigation.navigate('MyBox')}
                        title="MYBOX"
                        color="#D16002"
                    />
                </View>

            </View>
            <View style={styles.containerHome_2} >
                <View style={styles.boxBodyHome_A}>

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

                    <View style={styles.boxBodyHome_CA}>
                        <Entypo name="info" size={24} color="black" />
                    </View>
                    <View style={styles.boxBodyHome_CA}>
                        <MaterialIcons name="add-box" size={24} color="black" />
                    </View>

                </View>
                <View style={styles.boxBodyHome_D}>

                </View>


            </View>

        </View >
    );

}
export { homeScreen };

/*               state = {
                    images: [
                        { url: json.resources[0].secure_url, name: "one" },
                        { url: json.resources[1].secure_url, name: "two" },
                        { url: json.resources[2].secure_url, name: "three" },
                        { url: json.resources[3].secure_url, name: "four" },
                        { url: json.resources[4].secure_url, name: "five" },
                        { url: json.resources[5].secure_url, name: "six" },
                        { url: json.resources[6].secure_url, name: "seven" },
                        { url: json.resources[7].secure_url, name: "eith" },
                        { url: json.resources[8].secure_url, name: "nine" },
                        { url: json.resources[9].secure_url, name: "ten" }
                    ]
                }*/