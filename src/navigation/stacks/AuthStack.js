import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authRouts from "../routs/authRouts";
import Login from "../../screens/auth/Login";
import SignUp from "../../screens/auth/SignUp";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import OtpVerification from "../../screens/auth/OtpVerification";
// import ResetPassword from "../../screens/auth/ResetPassword";
// import VerifyAccount from "../../screens/auth/VerifyAccount";
import Intro from "../../screens/auth/Intro";
import OnboardingScene from "../../screens/onboarding/OnboardingScene";
import profileRouts from "../routs/profileRouts";



const Stack = createNativeStackNavigator();

export default AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={authRouts.intro} component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name={authRouts.login} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={authRouts.signUp} component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name={authRouts.forgotPassword} component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name={authRouts.otpVerification} component={OtpVerification} options={{ headerShown: false }} />
            <Stack.Screen name={authRouts.onboarding} component={OnboardingScene} options={{ headerShown: false }} />
            <Stack.Screen name={profileRouts.transactionPin} component={TransactionPin} options={{ headerShown: false }} />
            <Stack.Screen name={profileRouts.verifyBvn} component={VerifyBVN} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}