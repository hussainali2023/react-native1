import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Grid = () => {
    const user = [
        {id:1, name:"Rohit"},
        {id:2, name:"Mohit"},
        {id:3, name:"Nohit"},
        {id:4, name:"Ashit"},
        {id:5, name:"Rohit"},
        {id:6, name:"Mohit"},
        {id:7, name:"Nohit"},
        {id:8, name:"Ashit"},
        {id:9, name:"Rohit"},
        {id:10, name:"Mohit"},
        {id:11, name:"Nohit"},
        {id:12, name:"Ashit"},
        {id:13, name:"Rohit"},
        {id:14, name:"Mohit"},
        {id:15, name:"Nohit"},
        {id:16, name:"Ashit"},
        {id:17, name:"Rohit"},
        {id:18, name:"Mohit"},
        {id:19, name:"Nohit"},
        {id:20, name:"Ashit"},
        {id:21, name:"Rohit"},
        {id:22, name:"Mohit"},
        {id:23, name:"Nohit"},
        {id:24, name:"Ashit"},
        {id:25, name:"Rohit"},
        {id:26, name:"Mohit"},
        {id:27, name:"Nohit"},
        {id:28, name:"Ashit"},
        {id:29, name:"Rohit"},
        {id:30, name:"Mohit"},
        {id:31, name:"Nohit"},
    ]
  return (
    
     
           <ScrollView style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        user.map((item) =>
            <Text key={item.id} style={styles.item}>{item.name}</Text>
       )
      }
    </ScrollView>
     
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'green',
    color: 'white',
    margin: 7,
    padding: 7,
    width:120,
    height:120,
    textAlign:"center",
    textAlignVertical:"center"
    
  },
});

export default Grid;
