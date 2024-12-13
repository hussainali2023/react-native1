import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Contact = () => {

    const handlePress = () =>{
        console.log("Btn Press")
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>
                    Contact Page || Send Messages
                </Text>
                <Button onPress={handlePress} color={"green"} style={`${styles.btn}`} title='Send Message'></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title:{
fontSize:20,
fontWeight:"bold",
marginTop:15
    },
    btn:{
        borderRadius:20
    }
})

export default Contact;