import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import colors from "../../assets/colors/colors";

type Props = {
    nuberOfFields: number,
    style?: object,
    fieldStyle?: object,
    onChangeText?: (text: string) => void,
    value: string,
    pointerEvents?: 'auto' | 'none',
    isSecured?: boolean,
    width?: number,
    height?: number,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
};

const OtpFields: React.FC<Props> = ({
    nuberOfFields,
    style,
    fieldStyle,
    onChangeText = (text) => { },
    value,
    pointerEvents = 'auto',
    isSecured = false,
    width = 51,
    height = 50,
    keyboardType = 'number-pad',
}) => {
    const otpFields = [];
    const refsFocus = useRef<TextInput>(null);

    for (var t = 0; t < nuberOfFields; t++) {
        otpFields.push(
            <TouchableOpacity
                onPress={() => { refsFocus.current && refsFocus.current.focus() }}
                key={t} >
                <View
                    style={[styles.otpField, {
                        width: width,
                        height: height,
                        borderRadius:8,
                        borderColor: value.length > t ? colors.black : colors.grayInactive,
                    }]}>
                    <Text style={[styles.otpText, fieldStyle]}>{isSecured ? value[t] && '*' : value[t]}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <>
            <View
                pointerEvents={pointerEvents}
                style={[styles.otpWraper, style, { opacity: pointerEvents == 'auto' ? 1 : 0.5, }]} >
                {otpFields}
            </View>
            <TextInput ref={refsFocus}
                keyboardType={keyboardType}
                value={value}
                secureTextEntry={isSecured}
                selectionColor={'transparent'}
                style={{ color: 'transparent', fontSize: 0, height: 0, width: 0 }}
                onChangeText={text => {
                    console.log(text);
                    onChangeText(text.length <= nuberOfFields ? text.replace(/[^0-9]/g, "") : value);
                }} />
        </>
    );
}


const styles = StyleSheet.create({
    otpWraper: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    otpField: {
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: '3%',
        backgroundColor: colors.background,
    },
    otpText: {
        fontSize: 25,
        color: colors.black,
        fontFamily: "Inter-Regular",
    },
})

export default OtpFields;