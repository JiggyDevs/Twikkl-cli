import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../../assets/colors/colors";
import EyeOpened from "../../assets/icons/Eye.svg";
import EyeClosed from "../../assets/icons/EyeSlash.svg";

type Props = {
    style?: object,
    fieldStyle?: object,
    onChangeText?: (text: string) => void,
    value?: string,
    placeholder?: string,
};


const PasswordInput: React.FC<Props> = ({ style, fieldStyle, onChangeText = (text) => { }, value, placeholder }: Props) => {
    const [visible, setVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    return (
        <View style={[styles.passwordWrapper, style, {
            borderColor: focused ? colors.black : colors.grayInactive,
            borderWidth: 1,
        }]}>
            <TextInput
                style={[styles.passwordInput, fieldStyle]}
                placeholder={placeholder}
                secureTextEntry={!visible}
                value={value} onChangeText={text => onChangeText(text)}
                // selectionColor={colors.grayInactive}
                cursorColor={colors.black}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholderTextColor={colors.grayInactive} />
            <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                {
                    visible ?
                        <EyeClosed stroke={focused ? colors.black : colors.grayInactive}/>
                        :
                        <EyeOpened stroke={focused ? colors.black : colors.grayInactive}/>
                }
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    passwordWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
        borderRadius: 8,
        height: 50,
        // borderColor: colors.inactive,
        // borderWidth: 1,
        // elevation: 1
    },
    passwordInput: {
        fontSize: 14,
        color: colors.black,
        fontFamily: "Inter-Regular",
    },
});

export default PasswordInput;