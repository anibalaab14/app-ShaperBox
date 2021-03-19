import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    containerHome: {
        flex: 1,
                
    },
    containerHome_1: {
        flex: 1,
        flexDirection: "row"      
    },
    containerHome_2: {
        flex: 11,
        
    },
    boxHeaderHome:{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "space-around",
        
    },
    boxHeaderHome_2:{
        flex: 2,
        backgroundColor: "#000000",
        justifyContent: "space-around",
        
    },
    tittle: {
        fontSize: 30,
        color: "#fff"
    },
    textJoinsUs: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        alignContent: "center",
    },
    tinyLogo: {
        width: 300,
        height: 300,
        alignSelf: "center"

    },
    imageInBack: {
        flex: 1,
        resizeMode: "cover",


    },
    input: {
        height: 40,
        width: 300,        
        backgroundColor: "#FFF",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        textAlign: "center",
        
    },
    initForm: {
        alignContent: "center",
        alignSelf: "center"
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

});