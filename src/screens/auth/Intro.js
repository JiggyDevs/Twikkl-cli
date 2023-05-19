import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, useWindowDimensions } from "react-native";

import colors from "../../../assets/colors/colors";
import Button from "../../component/Button";
import authRouts from "../../navigation/routs/authRouts";

export default Intro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Twikkl
            </Text>
          
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        width: '90%',
        fontFamily: "Inter-ExtraBold",
        color: colors.black,
    },
    desc: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: colors.black
    },
    button: {
        width: '100%',
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: colors.white
    },
});