import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { buttonSession } from '../appfunc/startSession.js';

function frontPage({ navigation }) {

    const [textUser, onChangeTextUser] = React.useState("");
    const [textPass, onChangeTextPass] = React.useState("");

    StatusBar.setHidden(true);//Hide status bar


    return (

        <View style={styles.container}>


            <ImageBackground source={require('../images/Fondo2.jpg')} style={styles.imageInBack}>
                <View style={styles.containerFront_A}>
                    <Image style={styles.tinyLogo} source={require('../images/Logo.jpg')} />
                </View>
                <View style={styles.containerFront_B}>
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
                    
                </View>
                <View style={styles.containerFront_C}>
                    <View style={styles.containerFront_CA}>
                    </View>
                    <View style={styles.containerFront_CB}>
                        <Button
                            title="Iniciar sesión"
                            color="#D16002"
                            style={styles.inputButtom}
                            //onPress={() => Alert.alert('Dispara JSON api-inicio-sesion')}
                            onPress={() => {

                                buttonSession(textUser, textPass)
                                    .then(resp => {

                                        console.log(resp);

                                        if (resp.statusCode == undefined) {
                                            Alert.alert('Bienvenido ' + resp.name);
                                            navigation.navigate('Home');
                                        }
                                        if (resp.statusCode == 204) {
                                            Alert.alert('Usuario invalido');

                                        }
                                        if (resp.statusCode == 203) {
                                            Alert.alert('Password incorrecta');

                                        }

                                    })
                                    .catch(err => {
                                        console.log(err);
                                        Alert.alert('Ups!, algo salió mal.');
                                    });

                            }}

                        />
                        
                    </View>
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>
                <View style={styles.containerFront_E}>
                    <View style={styles.containerFront_CA}>
                    </View>
                    <View style={styles.containerFront_CB}>

                        <Button
                            title="Suscríbete"
                            color="#D16002"
                            onPress={() => navigation.navigate('Register')}
                            style={styles.inputButtom}
                        />
                    </View>
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>
                <View style={styles.containerFront_D}>
                    <View style={styles.containerFront_CA}>
                    </View>
                    <View style={styles.containerFront_CB}>
                        <Text style={styles.textJoinsUs}>¿QUE ESPERAS?</Text>
                        <Text style={styles.textJoinsUs}>Únete a la plataforma de prendas por suscripción.</Text>
                        <Text style={styles.textJoinsUs}>Vitrinea y arma tu BOX mensual. </Text>
                        <Text style={styles.textJoinsUs}>Debes estar atento, el inventario cambia continuamente!</Text>
                    </View>
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>

                <View style={styles.containerFront_G}>
                </View>
            </ImageBackground>
        </View>
    );
}
export { frontPage };