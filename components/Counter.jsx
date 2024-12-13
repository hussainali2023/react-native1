import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Counter = ({value, setValue}) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setValue(value - 1)} style={styles.button}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setValue(value + 1)} style={styles.button}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',  // Centers the buttons horizontally
        alignItems: 'center',  // Centers the buttons vertically
        marginTop: 100,
    },
    button: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,  // Adds space between the buttons
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Counter;
