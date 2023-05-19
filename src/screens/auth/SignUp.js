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
                    <View>
                        <Text style={styles.greetings}>{
                            step == 1 ? "Welcome to Swipe Monie"
                                : step == 2 ? "Verifying Phone Number"
                                    : "Create New Password"
                        }</Text>
                        <Text style={styles.instructions}>{
                            step == 1 ? "Kindly provide a valid phone number."
                                : step == 2 ? "Enter the 4-Digit OTP sent to your phone number"
                                    : "Your new password most be different from previous used password"
                        }</Text>

                        {
                            step != 3 ?
                                <KeyboardAvoidingView
                                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                                    style={styles.inputWrapper} >
                                    {step == 1 ?
                                        <TextInput
                                            style={[styles.inputField, {
                                                borderColor: focus === 'phone' ? colors.primary : colors.grayInactive,
                                            }]}
                                            placeholder={"Phone Number"}
                                            value={phone} onChangeText={text => {
                                                text.charAt(0) == '0' ? setPhone('+234') : setPhone(text)
                                            }}
                                            selectionColor={colors.grayInactive}
                                            keyboardType={"phone-pad"}
                                            onFocus={() => setFocus('phone')}
                                            onBlur={() => setFocus(null)}
                                            placeholderTextColor={colors.grayInactive} />
                                        : <>
                                            <OtpFields
                                                style={styles.otp}
                                                nuberOfFields={4}
                                                value={otp}
                                                onChangeText={text => {
                                                    setOtp(text);
                                                    if (text.length == 4) {
                                                        // verify(text);
                                                    }
                                                }}
                                            />
                                            <TouchableOpacity onPress={() => { timerCount > 0 ? {} : setTimer(120); setActivator(Math.random()) }
                                            }>
                                                <Text style={styles.footerText}>
                                                    Didn’t receive code?
                                                    <Text style={styles.footerLink}>{
                                                        timerCount == 0 ? ' Resend code' : ' ETA: 00:' + timerCount
                                                    }</Text>
                                                </Text>
                                            </TouchableOpacity>
                                        </>
                                    }
                                </KeyboardAvoidingView>
                                : <>
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
                                    <KeyboardAvoidingView
                                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                                        style={styles.inputWrapper} >

                                        <PasswordInput
                                            value={confirmPassword}
                                            placeholder={'Confirm Password'}
                                            onChangeText={text => setConfirmPassword(text)}
                                            style={styles.passwordInput}
                                        />
                                    </KeyboardAvoidingView>
                                </>
                        }
                    </View>
                    <View>
                        <Button title={
                            step == 3 ? "Reset Password"
                                : step == 2 ? "Continue"
                                    : "Verify"
                        }
                            onPress={() => {
                                step == 1 ? setStep(2)
                                    : step == 2 ? setStep(3)
                                        : navigation.navigate(profileRouts.verifyBvn)
                            }}
                            buttonStyle={styles.createAccountButton}
                            processing={false}
                            enabled={canProceed}
                        />
                        <TouchableOpacity style={{ marginBottom: '10%', }}
                            onPress={() => { }}>
                            <Text style={styles.footerText}>
                                Already have an account?
                                <Text style={styles.footerLink}> Sign in
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
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