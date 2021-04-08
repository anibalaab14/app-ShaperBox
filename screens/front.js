import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { buttonSession } from '../appfunc/startSession.js';
import { Flow, Circle, Fold } from 'react-native-animated-spinkit'
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';


function frontPage({ navigation }) {

    const [textUser, onChangeTextUser] = React.useState("");
    const [textPass, onChangeTextPass] = React.useState("");
    const [loadAnimation, setLoadAnimation] = React.useState(false);
    const [accesible, setAccesible] = React.useState(false);



    StatusBar.setHidden(true);//Hide status bar
    React.useState(() => {
        console.log("Animacion de carga iniciada");
    }, [loadAnimation])
    React.useState(() => {
        console.log("Cambia acceso a view principal");
    }, [accesible])

    return (

        <View style={styles.container}>


            <LinearGradient colors={['#000000','#000000', '#0cebeb']} style={styles.linearGradient}>

                <View style={styles.containerFront_A}>
                    <Animatable.Image animation="zoomInDown" style={styles.tinyLogo} source={require('../images/Logo.jpg')} />
                </View>
                <Animatable.View animation="zoomInUp" style={styles.containerFront_B}>
                    <SafeAreaView style={styles.initForm} accessible={accesible}>
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

                </Animatable.View>
                <View style={styles.containerFront_C}>
                    <View style={styles.containerFront_CA}>
                    </View>
                    
                    <Animatable.View  animation="zoomInUp" style={styles.containerFront_CB}>
                    
                        <Button
                            title="Iniciar sesión"
                            color="#D16002"
                            style={styles.inputButtom}
                            disabled={accesible}

                            //onPress={() => Alert.alert('Dispara JSON api-inicio-sesion')}
                            onPress={() => {
                                setAccesible(true);
                                setLoadAnimation(true);
                                buttonSession(textUser, textPass)
                                    .then(resp => {

                                        console.log(resp);

                                        if (resp.statusCode == undefined) {
                                            //Alert.alert('Bienvenido ' + resp.name);
                                            navigation.navigate('Home');
                                            setAccesible(false);
                                            setLoadAnimation(false);
                                        }
                                        if (resp.statusCode == 204) {
                                            Alert.alert('Usuario invalido');
                                            setAccesible(false);
                                            setLoadAnimation(false);


                                        }
                                        if (resp.statusCode == 203) {
                                            Alert.alert('Password incorrecta');
                                            setAccesible(false);
                                            setLoadAnimation(false);

                                        }

                                    })
                                    .catch(err => {
                                        setAccesible(false);
                                        setLoadAnimation(false);
                                        console.log(err);
                                        Alert.alert('Ups!, algo salió mal.');
                                    });


                            }}

                        />

                    </Animatable.View>
                    
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>
                <View style={styles.containerFront_E}>
                    <View style={styles.containerFront_CA}>
                    </View>
                   
                    <Animatable.View animation="zoomInUp" style={styles.containerFront_CB}>

                        <Button
                            title="Suscríbete"
                            color="#D16002"
                            onPress={() => navigation.navigate('Register')}
                            disabled={accesible}
                            style={styles.inputButtom}
                        />
                    </Animatable.View>
                    
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>
                <View style={styles.containerFront_D}>
                    <View style={styles.containerFront_CA}>
                    </View>
                    <View style={styles.containerFront_CB}>
                        <Animatable.Text animation="fadeInUp" duration={5000} delay={2000} style={styles.textJoinsUs}>¿QUE ESPERAS?</Animatable.Text>
                        <Animatable.Text animation="fadeInUp" duration={5000} delay={2000} style={styles.textJoinsUs}>Únete a la plataforma de prendas por suscripción.</Animatable.Text>
                        <Animatable.Text animation="fadeInUp" duration={5000} delay={2000} style={styles.textJoinsUs}>Vitrinea y arma tu BOX mensual. </Animatable.Text>
                        <Animatable.Text animation="fadeInUp" duration={5000} delay={2000} style={styles.textJoinsUs}>Debes estar atento, el inventario cambia continuamente!</Animatable.Text>

                    </View>
                    <View style={styles.containerFront_CC}>
                    </View>
                </View>

                <View style={styles.containerFront_G}>
                    <Flow size={110} color="rgba(88,240,255,1)" style={styles.containerFront_CB} animating={loadAnimation} />
                </View>
            </LinearGradient>
        </View>
    );
}
export { frontPage };