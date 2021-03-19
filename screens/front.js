import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { buttonSession } from '../appfunc/startSession.js';


const Separator = () => (
    <View style={styles.separator} />
);

function frontPage({ navigation }) {

    const [textUser, onChangeTextUser] = React.useState("");
    const [textPass, onChangeTextPass] = React.useState("");
    
    StatusBar.setHidden(true);//Hide status bar
    
   
    return (

        <View style={styles.container}>
            
            <ImageBackground source={require('../images/Fondo2.jpg')} style={styles.imageInBack}>

                <Image style={styles.tinyLogo} source={require('../images/Logo.jpg')} />
                <SafeAreaView style={styles.initForm}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTextUser}
                        placeholder="User"
                        defaultValue={textUser}
                        selectTextOnFocus={true}

                    />
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeTextPass}
                        placeholder="Pass"
                        defaultValue={textPass}
                        selectTextOnFocus={true}
                        secureTextEntry={true}
                    />
                </SafeAreaView>
                <Separator />
                <Button
                    title="Iniciar sesión"
                    color="#D16002"
                    //onPress={() => Alert.alert('Dispara JSON api-inicio-sesion')}
                    onPress={() => {

                        if (buttonSession(textUser, textPass) == 0) {
                            Alert.alert('Dispara JSON api-inicio-sesion');
                            navigation.navigate('Home');
                        } else {
                            Alert.alert('Credenciales incorrectas');
                        }

                    }}

                />
                <Separator />
                <Text style={styles.textJoinsUs}>Únete a la plataforma de prendas por suscripción</Text>
                <Separator />
                <Button
                    title="Suscríbete"
                    color="#D16002"
                    onPress={() => Alert.alert('Dispara JSON api-registro-usuario')}
                />
                <Separator />
            </ImageBackground>
        </View>
    );
}
export {frontPage};