import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import Swiper from "react-native-swiper";

import colors from "../../../assets/colors/colors";
import Button from "../../component/Button";
import { AuthContext } from "../../../context/AuthContext";
import authRouts from "../../navigation/routs/authRouts";


export default OnboardingScene = ({ navigation }) => {
    const [swiperIndex, setSwiperIndex] = useState(0);
    const { onboard } = useContext(AuthContext);
    // console.log(useWindowDimensions().width, useWindowDimensions().height)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.skipWrapper}
                onPress={() => setSwiperIndex(2)}>
                <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
            <Swiper
                loop={false}
                // autoplay={true}
                // autoplayTimeout={5}
                // dotStyle={{
                //     backgroundColor: colors.grayInactive,
                //     width: 8,
                //     height: 8,
                //     borderRadius: 4,
                //     marginLeft: 4,
                //     marginRight: 4,
                // }}
                // activeDotStyle={{
                //     backgroundColor: colors.black,
                //     width: 8,
                //     height: 8,
                //     borderRadius: 4,
                //     marginLeft: 4,
                //     marginRight: 4,
                // }}
                showsPagination={false}
                index={swiperIndex}
                onIndexChanged={(index) => setSwiperIndex(index)}
            >
                <View style={styles.swiperContainer}>
                    <Image
                        source={require("../../../assets/images/secure.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        Your Fast and Secure Payment Solution
                    </Text>
                </View>

                <View style={styles.swiperContainer}>
                    <Image
                        source={require("../../../assets/images/cards.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        Simplify Your Transactions with swipemonie
                    </Text>
                </View>

                <View style={styles.swiperContainer}>
                    <Image
                        source={require("../../../assets/images/terminals.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        Effortless Payments with swipemonie
                    </Text>
                </View>
            </Swiper>
            <View style={styles.bottomWrapper}>
                {
                    swiperIndex > 0 &&
                    <TouchableOpacity
                        onPress={() => setSwiperIndex(swiperIndex - 1)}
                        style={[styles.button, {
                            backgroundColor: colors.background,
                        }]}>
                        <Text style={[styles.buttonText, {
                            color: colors.black
                        }]}>Back</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    onPress={() => {
                        swiperIndex < 2 ? setSwiperIndex(swiperIndex + 1)
                            : navigation.navigate(authRouts.signUp)
                    }}
                    style={[styles.button, {
                        backgroundColor: colors.black
                    }]}>
                    <Text style={styles.buttonText}>{
                        swiperIndex == 2 ? 'Get Started'
                            : "Next"
                    }</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
    },
    bottomWrapper: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 40
    },
    skipWrapper: {
        position: 'absolute',
        right: 10,
        top: 10,
        margin: 20,
        zIndex: 20,
    },
    skip: {
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'Inter-Medium',
        color: colors.black
    },
    button: {
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: colors.white
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        width: 288,
        color: colors.black,
        fontFamily: 'Inter-Regular',
        marginTop: '30%'
    },
    swiperContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        width: '100%'
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 346
    }
});