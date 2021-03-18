import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';

function homeScreen({ navigation }){
    StatusBar.setHidden(true);
    return (
        
        <View style={styles.container}>

            <ImageBackground source={require('../images/Fondo2.jpg')} style={styles.imageInBack}>
            </ImageBackground>
        </View >
    );
}
export {homeScreen};