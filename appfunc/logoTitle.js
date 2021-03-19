import React from "react";
import { Image } from "react-native";

function LogoTitle() {
    return (
        <Image
            style={{ width: 20, height: 20, alignSelf: "center" }}
            source={require('../images/LogoTitle.jpg')}
            
        />
    );
}
export {LogoTitle};