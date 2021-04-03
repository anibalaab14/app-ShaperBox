import React, { Component } from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { getStart } from '../appfunc/getStart.js';
import Swiper from '../appfunc/Swiper.js';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { render } from "react-dom";

var state = {
    images: [
        { url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "shakira" },
        { url: 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg', name: "cat" },
        { url: 'https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg', name: "baby" }
    ]
}

const Swipator = () => {
    let quantity = 10;
    let screen = "home";
    
        getStart(quantity, screen)

            .then(resp => {
                for (let i = 0; i < quantity; i++) {
                    console.log(resp.resources[i].secure_url);
                }
                state = {
                    images: [
                        { url: resp.resources[0].secure_url, name: "shakira" },
                        { url: resp.resources[1].secure_url, name: "cat" },
                        { url: resp.resources[2].secure_url, name: "baby" }
                    ]
                }
            })
            .catch(err => {
                Alert.alert('Ups!, No pudimos obtener las prendas');
            })
    
    var bottom = (e) => {
        Alert.alert('Swipe Bottom');
    }

    var top = (e) => {
        Alert.alert('Swipe Top');
    }

    return (
        <Swiper
            images={state.images}
            swipeBottom={(e) => bottom(e)}
            swipeTop={(e) => top(e)}
            textSize={12}
            textBold={true}
            textColor={"#ffffff"}
            textUnderline={true}
            style={{ flex: 1 }}
        />
    )
    // esta funcion tiene un problema... y es que carga lasd variables despues de haber actualizado el DOM de react. entonces... jamas cargará las URL desde la cloud... 
    // se deben usar hooks donde a cada instante actualiza el DOM (frente a cambios de información, utilizo un gancho que actualiza del DOM)...
    // https://es.reactjs.org/docs/hooks-effect.html // esto ya esta implementado en front.js (en formulario inicio usuario). 
}


function homeScreen({ navigation }) {

    StatusBar.setHidden(true);

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

                        <Swipator />
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