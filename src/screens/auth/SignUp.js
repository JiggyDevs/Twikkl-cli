import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight, BackHandler } from "react-native";


import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/routs/authRouts";
import Button from "../../component/Button";
import NavIcon from "../../../assets/icons/ArrowBack.svg";
import OtpFields from "../../component/OtpFields";
import PasswordInput from "../../component/PasswordInput";
import profileRouts from "../../navigation/routs/profileRouts";


export default SignUp = ({ navigation }) => {
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [focus, setFocus] = useState(null)
    const canProceed = step == 1 ? phone.length >= 13
        : step == 2 ? otp.length == 4
            : password.length != 0 && password === confirmPassword
    const [timerCount, setTimer] = useState(0);
    const [activator, setActivator] = useState(Math.random());
    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            if (timerCount > 0) {
                setTimer(lastTimerCount => {
                    lastTimerCount <= 1 && clearInterval(interval);
                    return lastTimerCount - 1;
                });
            }
        }, 1000);
        return () => {
            clearInterval(interval);

        };
    }, [activator]);

    BackHandler.addEventListener('hardwareBackPress', () => {
        if (step === 1) {
            navigation.goBack();
        }
        else {
            setStep(step - 1)
        }
        return true;
    });
    return (
        <>
            {/* <View style={styles.topWrapper}>
                <TouchableOpacity onPress={() => {
                    step == 1 ? navigation.goBack()
                        : setStep(step - 1)
                }}>
                    <NavIcon />
                </TouchableOpacity>
            </View> */}
            <ScrollView
                vertical
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    width: '100%',
                    paddingTop: 50,
                    backgroundColor: colors.background
                }}>
                <View style={styles.container}>
                   <Text>sign up</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        paddingTop: 50,
    },
    greetings: {
        fontSize: 20,
        fontFamily: "Inter-SemiBold",
        color: colors.black,
    },
    instructions: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: colors.black,
        width: '85%',
    },
    inputWrapper: {
        marginTop: 30,
    },
    inputField: {
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        fontSize: 14,
        color: colors.activeText,
        fontFamily: "Inter-Regular",
        borderColor: colors.inactive,
        height: 50,
    },
    createAccountButton: {
        borderRadius: 8,
        height: 55,
        marginTop: '20%',
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: colors.black,
        textAlign: 'center',
    },
    footerLink: {
        fontFamily: 'Inter-SemiBold',
    },
    topWrapper: {
        paddingHorizontal: 16,
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
    passwordInput: {
        borderRadius: 8,
        color: colors.textDark,
        backgroundColor: colors.aliceBlue,
        fontFamily: "Inter-Regular",
    },
});