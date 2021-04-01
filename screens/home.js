import React, {Component} from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import {   createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { getStart } from '../appfunc/getStart.js';



const Drawer = createDrawerNavigator();

function homeScreen({ navigation }) {

    StatusBar.setHidden(true);
    
    return (

        <View style={styles.containerHome}>

            <ImageBackground source={require('../images/Fondo2.jpg')} style={styles.imageInBack}>
                <View style={styles.containerHome_1} >
                    <View style={styles.boxHeaderHome}>
                        <Button
                            onPress={() => navigation.navigate('Options') }
                            title="Options"
                            color="#D16002"
                        />
                        
                    </View>

                    <View style={styles.boxHeaderHome_2}>
                        <Image
                            style={{ width: 120, height: 69, alignSelf: "center", resizeMode: "contain"}}
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
                        <Button
                            onPress={() => 

                              {
                                let quantity=10;
                                let screen="home";
                                 getStart(quantity,screen)
                                 .then(resp =>{
                                    console.log(resp);
                                    
                                 })
                                 .catch(err => {
                                    Alert.alert('Ups!, No pudimos obtener las prendas');
                                 }); 

        
                              }                           
                            
                            }
                            title="Comenzar a ver"
                            color="#D16002"
                        />
                       
                </View>
            </ImageBackground>
        </View >
    );
}
export { homeScreen };