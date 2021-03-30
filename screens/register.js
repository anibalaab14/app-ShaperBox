
import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView, TextInput, Button, Alert, StatusBar } from "react-native";
import { styles } from '../styles/styles.js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { buttonSession } from '../appfunc/startSession.js';
import { LogoTitle } from '../appfunc/logoTitle.js';//En un futuro debo implementar esto para el Logo.
import { getBoxesHistory } from '../appfunc/getBoxesHistory.js';
import { newUser } from '../appfunc/newUser.js';


function myRegisterScreen({ navigation }) {
    const [newName, onChangeName] = React.useState("");
    const [newLastname, onChangeLastname] = React.useState("");
    const [newUsername, onChangeUsername] = React.useState("");
    const [newPass, onChangePass] = React.useState("");
    const [newEmail, onChangeEmail] = React.useState("");
    const [newDirection, onChangeDirection] = React.useState("");
    const [newId, onChangeId] = React.useState("");
    const [newAge, onChangeAge] = React.useState("");

 
    return (

        <View style={styles.containerOptions}>
            <View style={styles.boxOptions_1}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeName}
                        placeholder="Nombre"
                        defaultValue={newName}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_2}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeLastname}
                        placeholder="Apellido"
                        defaultValue={newLastname}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_3}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeUsername}
                        placeholder="Usuario"
                        defaultValue={newUsername}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_4}>
                <View style={styles.boxSubOptions_1}>
     
                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangePass}
                        placeholder="Password"
                        defaultValue={newPass}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_5}>
                <View style={styles.boxSubOptions_1}>
                
                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeEmail}
                        placeholder="Email"
                        defaultValue={newEmail}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_6}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeDirection}
                        placeholder="Direccion"
                        defaultValue={newDirection}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_6}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeId}
                        placeholder="Rut"
                        defaultValue={newId}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_6}>
                <View style={styles.boxSubOptions_1}>

                </View>
                <View style={styles.boxSubOptions_2}>
                    <TextInput
                        style={styles.registerInput}
                        onChangeText={onChangeAge}
                        placeholder="Edad"
                        defaultValue={newAge}
                        selectTextOnFocus={true}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_7}>

            </View>
            <View style={styles.boxOptions_8}>
                <View style={styles.boxSubOptions_1}>
                <Ionicons name="enter" size={24} color="black" />
                </View>
                <View style={styles.boxSubOptions_2}>
                    <Button
                        onPress={ () => {newUser(    
                            newName,
                            newLastname,
                            newUsername,
                            newPass,
                            newEmail,
                            newDirection,
                            newId,
                            newAge).then(resp => { 
                                console.log(resp);
                                Alert.alert('Usuario registrado correctamente');
                                navigation.navigate('Front');
                            }).catch( err => {
                                console.log(err);
                                Alert.alert('Usuario no pudo ser registrado, intente mas tarde');
                                navigation.navigate('Front');
                            })}}
                        title="Registrarse"
                        color="#D16002"
                        style={styles.closeSesionButton}

                    />
                </View>
                <View style={styles.boxSubOptions_1}>

                </View>
            </View>
            <View style={styles.boxOptions_9}>

            </View>
        </View>


    );
}
export { myRegisterScreen }