import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity, FlatList, TextInput, ScrollView, Modal,
    useWindowDimensions
} from "react-native";


import colors from "../../../assets/colors/colors";
import { AuthContext } from "../../../context/AuthContext";
import endpoints from "../../../assets/endpoints/endpoints";
import profileRouts from "../../navigation/routs/profileRouts";
import ArrowRight from "../../../assets/icons/arrow_right.svg";
import EditprofileIcon from "../../../assets/icons/account-edit.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";



const Item = ({ title, icon = <EditprofileIcon />, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16,
                paddingHorizontal: 16,
                justifyContent: 'space-between',
                backgroundColor: colors.aliceBlue,
                borderRadius: 8,
                marginBottom: 40,
                height: 40,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {icon}
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        color: colors.textDark,
                        marginLeft: 10,
                    }}>{title}</Text>
                </View>
                <ArrowRight />
            </View>
        </TouchableOpacity>
    )
}

export default Profile = ({ navigation }) => {
    const { user, token, saveUser, logout } = useContext(AuthContext);

    // useEffect(() => {
    //     const response = fetch(endpoints.baseUrl + endpoints.user + (user ? user.id : '0'), {
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     });
    //     response.then(res => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (response._j.ok) {
    //                 // console.log(data);
    //                 saveUser(data);
    //             }
    //         })

    // }, []);
    return (
        <View style={{
            backgroundColor: colors.white,
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                backgroundColor: colors.primary
            }}>
                <Text style={{
                    color: colors.white,
                    fontSize: 25,
                    fontFamily: 'Poppins-Regular'
                }}>Profile</Text>
            </View>
            <ScrollView
                vertical
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    width: '100%',

                }}>
                <Item
                    title={'Logout'}
                    icon={<LogoutIcon />}
                    onPress={() => { logout() }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});