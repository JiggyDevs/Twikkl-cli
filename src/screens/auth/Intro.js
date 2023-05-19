import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, useWindowDimensions } from "react-native";

import colors from "../../../assets/colors/colors";
import Button from "../../component/Button";
import authRouts from "../../navigation/routs/authRouts";

export default Intro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions Made
                Easy with Swipe
            </Text>
            <Text style={styles.desc}>
                Say Goodbye to Cash -simplify your transactions with Swipe Monie
            </Text>
            <View style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                flex: 1,
                alignItems: 'center',
                height: 114,
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                marginBottom: 40,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(authRouts.onboarding)}
                    style={[styles.button, {
                        backgroundColor: colors.black
                    }]}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(authRouts.login)}
                    style={[styles.button, {
                        backgroundColor: colors.background
                    }]}>
                    <Text style={[styles.buttonText, {
                        color: colors.black
                    }]}>Login</Text>
                </TouchableOpacity>
            </View>
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