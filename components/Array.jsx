import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Array = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13, 14];
    const user = [
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
    ]
    return (
      <SafeAreaView>
        <ScrollView>
<FlatList data={user} renderItem={({item})=> <Text style={styles.title}>{item.name}</Text>}/>

<FlatList data={numbers} renderItem={({item})=> <Text style={styles.title}>{item}</Text>}/>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        padding:10,
        backgroundColor:"green",
        margin:10,
        borderRadius:30,
        borderColor:"red",
        borderStyle:"solid"
        

    }
})

export default Array;