import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.


function myBoxScreen({ navigation }) {

    return (

        <View style={styles.containerHome}>
            <ImageBackground source={require('../images/Fondo2.jpg')} style={styles.imageInBack}>
                <Text>Pantalla myBoxScreen</Text>
            </ImageBackground>
        </View >
    );
}
export { myBoxScreen }