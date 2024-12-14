import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const ButtonStyle = () => {
    return (
        <View>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.button2]}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.btnSuccess ]}>Button</Text>
            </TouchableHighlight>
            <Button title='press here'/>
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    button:{
        backgroundColor:"#bbb",
        fontSize:20,
        textAlign:"center",
        margin:10,
        padding:7,
        borderRadius:10,
        color:"white",
        shadowColor:"red",
        shadowOpacity:1,
        elevation:15
    },
    button2:{
        backgroundColor:"red",
    },
    btnSuccess:{
        backgroundColor:"#4CAF50",
    }

})

export default ButtonStyle;