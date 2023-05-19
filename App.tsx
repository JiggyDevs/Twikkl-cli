import React, { useEffect, useContext, useState } from "react";
import { View, Text, StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


import Splash from "./src/screens/onboarding/Splash";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import AuthStack from "./src/navigation/stacks/AuthStack";
import MainStack from "./src/navigation/stacks/MainStack";
import OnboardingScene from "./src/screens/onboarding/OnboardingScene";


const RootNavigator: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return null
  }
  const { token } = authContext
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2000) });
  return (
    <NavigationContainer>
      {
        isLoading ? <Splash /> :
            token ? <MainStack /> :
              <AuthStack />}
    </NavigationContainer>
  )
}
export default function App() {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('light-content', true);	//<<--- add this
  }
  return (
    <>
      <AuthContextProvider>
        <StatusBar backgroundColor={"#000"} />
        <RootNavigator />
      </AuthContextProvider>
      <Toast />
    </>
  );
}