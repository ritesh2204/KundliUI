import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const CustomHeader = () => {
    return (
        <BlurView intensity={1} style={styles.headerContainer}>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Entypo name="chevron-thin-left" size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Kundali</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                <Text style={[styles.tab, styles.selectedTab]}>Basic</Text>
                <View style={styles.verticalDivider}/>
                <Text style={styles.tab}>Chart</Text>
                <View style={styles.verticalDivider}/>
                <Text style={styles.tab}>KP</Text>
                <View style={styles.verticalDivider}/>
                <Text style={styles.tab}>Ashtakvarga</Text>
                <View style={styles.verticalDivider}/>
                <Text style={styles.tab}>Dasha</Text>
                <View style={styles.verticalDivider}/>
                <Text style={styles.tab}>Report</Text>
            </ScrollView>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        paddingHorizontal: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'light'
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 15,
    },
    tab: {
        fontWeight: 'light',
        color: 'rgba(255, 255, 255, 0.6)',
        marginRight: 15,
        fontSize: 14,
    },
    selectedTab: {
        color: 'white',
        fontWeight: 'bold',
    },
    verticalDivider: {
        width: 2,
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        marginRight: 10
    },
});

export default CustomHeader;