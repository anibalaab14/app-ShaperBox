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
import Swiper from '../appfunc/Swiper.js';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function homeScreen({ navigation }) {

    StatusBar.setHidden(true);
    let quantity=10;
    let screen="home";
    const jsonImages = (json) =>{
        console.log(json);
    }// Para extraer las url de json
    getStart(quantity,screen)
    .then(resp =>{
        for(let i=0;i<quantity;i++){
        console.log(resp.resources[i].secure_url);
        } 
        //jsonImages (resp);                           
    })
    .catch(err => {
        Alert.alert('Ups!, No pudimos obtener las prendas');
    });


    var state = {
        images : [
          { url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name:"shakira" },
          { url: 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg', name: "cat" },
          { url: 'https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg', name: "baby" }
        ]
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
                    <View style={styles.boxBodyHome_A}>
                        
                    </View>
                    <View style={styles.boxBodyHome_B}>
                        <View style={styles.boxBodyHome_BB}>   
                        
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