import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated, Platform, Dimensions } from 'react-native';
import ChartScreen from '@/components/ChartScreen';
import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/CustomHeader';
import CustomTitle from '@/components/CustomTitle';
import ImageView from '@/components/ImageView';
import { kundaliData, kundliDescription } from '../db';
import KundliInfo from '@/components/KundliInfo';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [activeKundli, setActiveKundli] = useState<string | null>(null);
    const handlePress = (buttonTitle: string) => {
        setActiveButton(buttonTitle);
    };
    const handleKundliPress = (buttonTitle: string) => {
        setActiveKundli(buttonTitle);
    };
    const translateX1 = useRef(new Animated.Value(0)).current;
    const translateY1 = useRef(new Animated.Value(0)).current;
    const translateX2 = useRef(new Animated.Value(0)).current;
    const translateY2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateFirstCircle = () => {
            Animated.loop(
                Animated.sequence([
                    // Move right
                    Animated.timing(translateX1, {
                        toValue: width - 200,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move down
                    Animated.timing(translateY1, {
                        toValue: height - 200,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move left
                    Animated.timing(translateX1, {
                        toValue: 0,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move up
                    Animated.timing(translateY1, {
                        toValue: 0,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        const animateSecondCircle = () => {
            Animated.loop(
                Animated.sequence([
                    // Move left
                    Animated.timing(translateX2, {
                        toValue: -width + 200,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move up
                    Animated.timing(translateY2, {
                        toValue: -height + 200,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move right
                    Animated.timing(translateX2, {
                        toValue: 0,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    // Move down
                    Animated.timing(translateY2, {
                        toValue: 0,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        animateFirstCircle();
        animateSecondCircle();
    }, [translateX1, translateY1, translateX2, translateY2]);

    return (
        <View style={styles.container}>
            {Platform.OS === 'android' && (
                <>
                    <Animated.View
                        style={[
                            styles.blurCircle,
                            {
                                top: 0, // Start from the top of the header
                                transform: [
                                    { translateX: translateX1 },
                                    { translateY: translateY1 },
                                ],
                            },
                        ]}
                    />
                    <Animated.View
                        style={[
                            styles.blurCircle,
                            {
                                bottom: 0, // Start from the bottom of the screen
                                transform: [
                                    { translateX: translateX2 },
                                    { translateY: translateY2 },
                                ],
                            },
                        ]}
                    />
                </>
            )}
            <CustomHeader />
            <ScrollView>
                <View style={styles.chartContainer}>
                    <ImageView />
                    <CustomTitle title="Planets" />
                    <View style={styles.toggleContainer}>
                        <CustomButton
                            title="Sign"
                            isActive={activeButton === 'Sign'}
                            onPress={() => handlePress('Sign')}
                        />
                        <CustomButton
                            title="Nakshatra"
                            isActive={activeButton === 'Nakshatra'}
                            onPress={() => handlePress('Nakshatra')}
                            style={styles.buttonSpacing}
                        />
                    </View>
                    <ChartScreen data={kundaliData} />
                    <CustomTitle title="Understanding your Kundli" />
                    <View style={styles.toggleContainer}>
                        <CustomButton
                            title="General"
                            isActive={activeKundli === 'General'}
                            onPress={() => handleKundliPress('General')}
                        />
                        <CustomButton
                            title="Planetary"
                            isActive={activeKundli === 'Planetary'}
                            onPress={() => handleKundliPress('Planetary')}
                            style={styles.buttonSpacing}
                        />
                        <CustomButton
                            title="Yoga"
                            isActive={activeKundli === 'Yoga'}
                            onPress={() => handleKundliPress('Yoga')}
                            style={styles.buttonSpacing}
                        />
                    </View>
                    <KundliInfo data={kundliDescription} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C281C',
    },
    blurCircle: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        shadowColor: 'rgba(254, 182, 64, 1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 20,
        shadowRadius: 40,
        elevation: 100,
    },
    chartContainer: {
        padding: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 22,
    },
    buttonSpacing: {
        marginLeft: 10,
    },
});

export default HomeScreen;
