import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";
import Toast from 'react-native-toast-message';

import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/routs/authRouts";
import Button from "../../component/Button";
import PasswordInput from "../../component/PasswordInput";
import { AuthContext } from "../../../context/AuthContext";
import endpoints from "../../../assets/endpoints/endpoints";
import ArrowBackIcon from '../../../assets/icons/ArrowBack.svg'


export default Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const canProceed = phone.length > 11
        && password.length > 0;
    const [processing, setProcessing] = useState(false);
    const [focus, setFocus] = useState(null)

    const loginUser = async () => {
        setProcessing(true)
        const response = await fetch(endpoints.baseUrl + endpoints.login, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "phoneNumber": phone.replace('+', ''),
                    "password": password
                }
            ) // body data type must match "Content-Type" header
        });
        response.json()
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                setProcessing(false)
                if (response.ok) {
                    Toast.show({
                        type: 'success',
                        text1: 'Login successful',
                        text2: data.message
                    })
                    login(data.access_token, data.user)
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Login failed',
                        text2: data.message
                    });
                    console.log('response: ', response)
                    console.log('Login error:', data.message)
                }

            })
            .catch((error) => {
                setProcessing(false)
                Toast.show({
                    type: 'error',
                    text1: 'Login failed',
                    text2: error.message
                });
                console.log('Login error:', error);
            })
    }
    return (
        <>
            <View style={{
                backgroundColor: colors.background,
                paddingTop: 30,
                paddingBottom: 10,
                paddingHorizontal: 16,
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowBackIcon />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'Inter-SemiBold',
                    color: colors.black,
                    marginLeft: 18
                }}>Login</Text>
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
                    <Text style={styles.title}>
                        Welcome back to Swipe Monie
                    </Text>
                    <Text style={styles.desc}>
                        Login to your swipe monie account
                    </Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.inputWrapper} >
                        <TextInput
                            style={[styles.emailInput, {
                                borderWidth: 1,
                                borderColor: focus === 'phone' ? colors.primary : colors.grayInactive,
                                color: colors.black
                            }]}
                            placeholder={'+234 xxx xxx xxxx'}
                            value={phone} onChangeText={text => setPhone(text)}
                            selectionColor={colors.primary}
                            onFocus={() => setFocus('phone')}
                            onBlur={() => setFocus(null)}
                            placeholderTextColor={colors.textGray} />
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.inputWrapper} >

                        <PasswordInput
                            value={password}
                            placeholder={'Enter Password'}
                            onChangeText={text => setPassword(text)}
                            style={styles.passwordInput}
                        />
                    </KeyboardAvoidingView>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(authRouts.forgotPassword)}
                            style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        {false &&
                            <TouchableOpacity
                                onPress={() => {}}
                                style={styles.forgotPassword}>
                                <Text style={[styles.forgotPasswordText,{
                                    fontFamily:'Inter-Regular'
                                }]}>Login with Face ID</Text>
                            </TouchableOpacity>}
                    </View>


                    <Button title={'Login'}
                        onPress={() => { false && loginUser() }}
                        buttonStyle={styles.createAccountButton}
                        loading={processing}
                        buttonColor={colors.black}
                        enabled={canProceed & !processing} />

                    <Text style={styles.footerText}>Don’t have an account? <Text style={styles.footerLink}
                        onPress={() => { navigation.navigate(authRouts.signUp) }}>Sign Up</Text></Text>
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
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        width: '90%',
        fontFamily: "Inter-ExtraBold",
        color: colors.black,
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: colors.black
    },
    inputWrapper: {
        marginTop: 16,
    },
    emailInput: {
        paddingHorizontal: 16,
        borderRadius: 8,
        width: '100%',
        fontSize: 14,
        color: colors.activeText,
        fontFamily: "Inter-Regular",
        height: 50,
        backgroundColor: colors.aliceBlue,
    },
    passwordInput: {
        borderRadius: 8,
        color: colors.textDark,
        backgroundColor: colors.aliceBlue,
        fontFamily: "Inter-Regular",
    },
    forgotPassword: {
        justifyContent: "flex-end",
        alignItems: "center"
    },

    forgotPasswordText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 13,
        color: colors.black,
    },
    createAccountButton: {
        borderRadius: 8,
        height: 55,
        marginTop: 34,
    },
    orWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: colors.inactive,
        position: 'absolute',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "NunitoSans-ExtraBoldd",
        color: colors.primary,
        marginEnd: 8,
    },
    footerText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: colors.black,
        textAlign: 'center',
        marginTop: 16,
    },
    footerLink: {
        fontFamily: 'Inter-Bold',
        color: colors.black,
    },
    topWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
});