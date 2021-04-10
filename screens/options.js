import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { buttonSession } from '../appfunc/startSession.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import { getBoxesHistory } from '../appfunc/getBoxesHistory.js';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

function optionScreen({ navigation }) {

    return (

        <View style={styles.containerOptions}>
            <LinearGradient colors={['#2C5364','#0cebeb']} style={styles.linearGradient}>
            <View style={styles.boxOptions_1}>
                <View style={styles.boxSubOptions_1}>
                    <MaterialIcons name="local-shipping" size={24} color="black" />
                </View>
                
                <Animatable.View  animation="zoomInUp" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => {

                            if (getBoxesHistory() == 0) {
                                Alert.alert('Obtiene JSON con pedidos');
                                navigation.navigate('MyBoxesHistory');//Se debe crear esta pantalla aun.
                            } else {
                                Alert.alert('No tienes historial en ShaperBox');
                            }

                        }}
                        title="Pedidos"
                        color="#000000"
                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_2}>
                <View style={styles.boxSubOptions_1}>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                </View>
                <Animatable.View  animation="zoomInUp" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => Alert.alert('Pantalla notifications')}
                        title="Notificaciones"
                        color="#000000"
                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_3}>
                <View style={styles.boxSubOptions_1}>
                    <AntDesign name="user" size={24} color="black" />
                </View>
                <Animatable.View  animation="zoomInUp" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => Alert.alert('Pantalla User')}
                        title="Usuario"
                        color="#000000"
                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_4}>
                <View style={styles.boxSubOptions_1}>
                    <Ionicons name="help-buoy-outline" size={24} color="black" />
                </View>
                <Animatable.View  animation="zoomInUp" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => Alert.alert('Pantalla help')}
                        title="Ayuda"
                        color="#000000"
                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_5}>
                <View style={styles.boxSubOptions_1}>
                    <AntDesign name="infocirlceo" size={24} color="black" />
                </View>
                <Animatable.View  animation="zoomInUp" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => Alert.alert('Pantalla informations')}
                        title="Informaciones"
                        color="#000000"
                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_6}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>

                </View>
            </View>
            <View style={styles.boxOptions_7}>

            </View>
            <View style={styles.boxOptions_8}>
                <View style={styles.boxSubOptions_1}>
                    <Ionicons name="exit" size={24} color="black" />
                </View>
                <Animatable.View  animation="bounceInRight" style={styles.boxSubOptions_2}>
                    <Button
                        onPress={() => navigation.navigate('Front')}
                        title="Cerrar sesion"
                        color="#D16002"
                        style={styles.closeSesionButton}

                    />
                </Animatable.View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_9}>

            </View>
            </LinearGradient>
        </View>


    );
}
export { optionScreen }