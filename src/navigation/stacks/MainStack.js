import * as React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import mainRouts from '../routs/mainRouts';
import colors from '../../../assets/colors/colors';
import profileRouts from '../routs/profileRouts';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';


// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



// const BottomNavStack = () => {
//     return (
//         <Tab.Navigator
//         initialRouteName={mainRouts.home}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;
//                     switch (route.name) {
//                         case mainRouts.home:
//                             iconName = <HomeIcon fill={color} />;
//                             break;
//                         case profileRouts.profile:
//                             iconName = <AccountIcon fill={color} />;
//                             break;
//                         case mainRouts.call:
//                             iconName = <CallIcon fill={color} />;
//                             break;
//                     }
//                     return iconName;
//                 },
//                 tabBarActiveTintColor: colors.primary,
//                 tabBarInactiveTintColor: colors.textLight,
//                 tabBarStyle: {
//                     backgroundColor: colors.white,
//                 },
//                 tabBarLabelStyle: {
//                     fontSize: 12,
//                     fontFamily: 'Poppins-Regular',
//                     marginBottom: 5,
//                 },
//             })}>
//             <Tab.Screen
//                 name={mainRouts.call}
//                 component={Call}
//                 options={{ headerShown: false }}
//             />
//             <Tab.Screen
//                 name={mainRouts.home}
//                 component={Home}
//                 options={{ headerShown: false }}
//             />
//             <Tab.Screen
//                 name={profileRouts.profile}
//                 component={Profile}
//                 options={{ headerShown: false }}
//             />
//         </Tab.Navigator>
//     );
// };


export default AuthPassed = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name='bottomNav' component={BottomNavStack} options={{ headerShown: false }} /> */}
            
        </Stack.Navigator>
    );
};