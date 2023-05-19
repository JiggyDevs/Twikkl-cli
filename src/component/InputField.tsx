import React from "react";
import { View, TextInput, Text } from "react-native";

import colors from "../../assets/colors/colors";

type Props = {
    leftComponet?: React.ReactNode,
    containerStyle?: object,
    label: string,
};

export default function InputField({ leftComponet, containerStyle, label, ...rest }: Props) {
    return (
        <View style={[{
            borderColor: colors.black,
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 10,
            marginEnd: 10,
            height: 50,
        }, containerStyle]}>
            {/* <Text style={{
                color: colors.black,
                fontSize: 10,
                fontFamily: 'Lato-Regular',
                backgroundColor: colors.white,
                transform: [{ translateY: -8 }],
                paddingHorizontal: 9,
                textAlign: 'center',
                position: 'absolute',
                marginStart: 10,
            }}>{label}</Text> */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput
                    {...rest}
                />
                {leftComponet && leftComponet}
            </View>

        </View>

    );
}