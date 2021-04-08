import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import { getBox } from '../appfunc/getBox.js';
import { LinearGradient } from 'expo-linear-gradient';

function myBoxScreen({ navigation }) {
    
    
    if (getBox() == 0) {//Esto debe ser con async - await. 
        Alert.alert('Mostrando tu Box');
        navigation.navigate('Home');
    } else {
        Alert.alert('Aún no tienes prendas para el periodo');
    }
    return (

        <View style={styles.containerHome}>
            <LinearGradient colors={['#2C5364','#0cebeb']} style={styles.linearGradient}>

            </LinearGradient>

        </View >
    );
}
export { myBoxScreen }