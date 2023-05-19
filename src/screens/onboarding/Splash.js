import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default Splash = () => {
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={require("../../../assets/images/splash.png")}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    image: {
        width: "100%",
        height: "100%",
    }
});