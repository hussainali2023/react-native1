import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Responsive = () => {
    return (
        <View style={styles.main}>
            <View style={{flex:3, flexDirection:"row",  backgroundColor:"red"}}>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox1}></View>
            </View>
            <View style={{flex:2, backgroundColor:"green"}}></View>
            <View style={{flex:1, backgroundColor:"aqua"}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
main:{
    flex:1
},
innerBox1:{
    flex:1,
    backgroundColor:"yellow",
    margin:10
}
})

export default Responsive;