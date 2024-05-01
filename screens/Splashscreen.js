import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Animated, Easing } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Splashscreen = (props) => {
    const [logoScale] = useState(new Animated.Value(0));
    const [logoOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        startAnimation();
        setTimeout(() => {
            props.navigation.navigate("Welcomescreen");
        }, 3000);
        // Start animation when the component mounts
    }, []);

    const startAnimation = () => {
        // Logo scale and opacity animation
        Animated.parallel([
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 800,
                easing: Easing.elastic(1),
                useNativeDriver: true
            }),
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            })
        ]).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }], opacity: logoOpacity }]}>
                <Image
                    source={require('../assets/image/LOGOr.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    );
};

export default Splashscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1188E4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 400,
        height: 400,
        marginLeft:10,
    },
});
