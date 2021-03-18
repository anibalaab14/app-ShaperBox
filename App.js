import React from "react";
import { Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { homeScreen } from './screens/home.js';
import { frontPage } from './screens/front.js';
import { LogoTitle } from './appfunc/logoTitle.js';


const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Front">
                <Stack.Screen name="Front" component={frontPage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={homeScreen} options={{
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#00cc00"
                        />
                    ),
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    );

};

export default App;
console.log("Todo Ok");