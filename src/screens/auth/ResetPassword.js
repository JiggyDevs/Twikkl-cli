import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";


import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/routs/authRouts";
import Button from "../../component/Button";
import NavIcon from "../../../assets/icons/Navigation.svg";


export default ResetPassword = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const canProceed = password.length > 0
        && password == confirmPassword
    return (
        <>
            <View style={styles.topWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <NavIcon />
                </TouchableOpacity>
            </View>
            <ScrollView
                vertical
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    width: '100%',
                }}>
                <View style={styles.container}>
                    <Image
                        source={require("../../../assets/images/Logo_text_icon.png")}
                        style={styles.logo} />
                    <Text style={styles.greetings}>Reset Password</Text>
                    <Text style={styles.instructions}>
                        Your new password must be different from the previously used password
                    </Text>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.inputWrapper} >
                        <Text style={styles.label}>New Password</Text>
                        <PasswordInput
                            value={password}
                            placeholder={'At least 6 characters'}
                            onChangeText={text => setPassword(text)}
                            style={styles.passwordInput}
                        />
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.inputWrapper} >
                        <Text style={styles.label}>Confirm New Password</Text>

                        <PasswordInput
                            value={confirmPassword}
                            placeholder={'At least 6 characters'}
                            onChangeText={text => setConfirmPassword(text)}
                            style={styles.passwordInput}
                        />
                    </KeyboardAvoidingView>


                    <Button title={'Reset Password'}
                        onPress={() => { navigation.navigate(authRouts.login) }}
                        buttonStyle={styles.createAccountButton}
                        processing={false}
                        enabled={canProceed} />

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
    },
    logo: {
        width: 82,
        height: 60,
        alignSelf: 'center',
        marginBottom: 36,
        resizeMode: 'contain',
    },
    greetings: {
        fontSize: 24,
        fontFamily: "NunitoSans-Bold",
        color: colors.activeText,
    },
    instructions: {
        fontSize: 14,
        fontFamily: "NunitoSans-Regular",
        color: colors.activeText,
        width: '85%',
    },
    inputWrapper: {
        marginTop: 16,
    },
    emailInput: {
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        fontSize: 14,
        color: colors.activeText,
        fontFamily: "NunitoSans-Regular",
        borderColor: colors.inactive,
        height: 44,
    },
    label: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Bold',
        color: colors.activeText,
        marginBottom: 8,
    },
    createAccountButton: {
        borderRadius: 8,
        height: 44,
        marginTop: 16,
    },
    footerText: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        color: colors.activeText,
        textAlign: 'center',
        marginTop: 16,
    },
    footerLink: {
        fontFamily: 'NunitoSans-SemiBold',
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    topWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
    passwordInput: {
        borderRadius: 8,
        borderWidth: 1,
        color: colors.activeText,
        borderColor: colors.inactive,
    },
});