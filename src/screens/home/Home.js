import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator } from "react-native";
import Toast from 'react-native-toast-message';

import colors from "../../../assets/colors/colors";
import Button from "../../component/Button";
import { AuthContext } from "../../../context/AuthContext";
import endpoints from "../../../assets/endpoints/endpoints";
import mainRouts from "../../navigation/routs/mainRouts";



export default Home = ({ navigation }) => {
    const { saveUser, token, logout } = useContext(AuthContext)

    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: colors.black
            }}>
                <Text style={{
                    color: colors.white,
                    fontSize: 25,
                    fontFamily: 'Poppins-Regular'
                }}>Home</Text>
            </View>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
});