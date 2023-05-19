import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, TouchableHighlight } from "react-native";
import Toast from 'react-native-toast-message';


import colors from "../../../assets/colors/colors";
import authRouts from "../../navigation/routs/authRouts";
import Button from "../../component/Button";
import OtpFields from "../../component/OtpFields";
import endpoints from "../../../assets/endpoints/endpoints";
import { AuthContext } from "../../../context/AuthContext";


export default OtpVerification = ({ route, navigation }) => {
    const { phone } = route.params;
    const { login } = useContext(AuthContext)
    const [processing, setProcessing] = useState(false);
    const [otp, setOtp] = useState("")
    const canProceed = otp.length == 4
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

    const confirmSignUp = async () => {
        setProcessing(true);
        const response = await fetch(endpoints.baseUrl + endpoints.verify, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "otp": otp,
                    "phoneNumber": phone
                }
            ) // body data type must match "Content-Type" header
        });
        response.json()
            .then((data) => {
                setProcessing(false);
                if (response.ok) {
                    console.log(data);
                    Toast.show({
                        type: 'success',
                        text1: 'Confirm sign up successful',
                        text2: 'Sign up confirmed successfully'
                    })
                    login(data.token, data.user)
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Verification failed',
                        text2: data.message
                    });
                    console.log('error signing up:', data.message)
                }
            })

            .catch((error) => {
                setProcessing(false);
                Toast.show({
                    type: 'error',
                    text1: 'Verification failed',
                    text2: error.message
                });
                console.log('error confirming sign up', error);
            })
    }

    return (
        <>
            {/* <View style={styles.topWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
                }}>
                <View style={styles.container}>
                    <Image
                        source={require("../../../assets/images/security.png")}
                        style={styles.logo} />
                    <Text style={styles.greetings}>OTP Verification</Text>
                    <Text style={styles.instructions}>
                        Please enter the verification code sent to this phone number +{phone.substring(0, 3)} xxx xxx xx{phone.slice(-2)}
                    </Text>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.inputWrapper} >

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
                    </KeyboardAvoidingView>


                    <Button title={'Verify'}
                        onPress={() => { confirmSignUp() }}
                        buttonStyle={styles.createAccountButton}
                        loading={processing}
                        enabled={canProceed} />
                    <TouchableOpacity onPress={() => { timerCount > 0 ? {} : setTimer(60); setActivator(Math.random()) }
                    }>
                        <Text style={styles.footerText}>
                            {timerCount == 0 ? 'Resend code' : 'ETA: 00:' + timerCount}
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    logo: {
        width: 280,
        height: 280,
        alignSelf: 'center',
        marginBottom: 36,
        resizeMode: 'contain',
    },
    greetings: {
        fontSize: 36,
        fontFamily: "Poppins-Medium",
        color: colors.textDark,
        textAlign: 'center',
    },
    instructions: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: colors.textDark,
        width: '85%',
        textAlign: 'center',
        alignSelf: 'center',
    },
    inputWrapper: {
        marginTop: 40,
    },
    createAccountButton: {
        borderRadius: 8,
        height: 44,
        marginTop: 30,
    },
    footerText: {
        fontSize: 14,
        color: colors.primary,
        textAlign: 'center',
        marginTop: 16,
        fontFamily: 'Poppins-Medium',
        textDecorationLine: 'underline',
    },

    topWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: colors.white,
    },
});