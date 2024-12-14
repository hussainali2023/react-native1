import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = () => {

    const [selected, setSelected] = useState(1)

    return (
       <View style={styles.main}>
        <TouchableOpacity onPress={()=> setSelected(1)}>
            <View style={styles.radioRapper}>
                <View style={styles.radio}>
                    {
                        selected == 1 ? <View style={styles.radioBg}/> : null
                    }
                </View>
                <Text style={styles.radioText}>Option 1</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelected(2)}>
            <View style={styles.radioRapper}>
                <View style={styles.radio}>
                    {
                        selected == 2 ? <View style={styles.radioBg}/> : null
                    }
                </View>
                <Text style={styles.radioText}>Option 2</Text>
            </View>
        </TouchableOpacity>
       </View>
    );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    radioRapper:{
        flexDirection:"row",
        alignItems:"center"
    },
    radio:{
        height:40,
        width:40,
        borderRadius:20,
        borderColor:"red",
        borderWidth:2,
        margin:10
    },
    radioBg:{
        backgroundColor:"red",
        height:30,
        width:30,
        borderRadius:15,
        margin:3
    },
    radioText:{
        fontSize:20
    }
})

export default RadioButton;