import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import {   createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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

                </View>
            </ImageBackground>
        </View >
    );
}
function Draw() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    );
}

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
}

function Feed({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
}



export { homeScreen };