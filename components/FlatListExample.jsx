import React from 'react';
import { Text, View, FlatList } from 'react-native';

const FlatListExample = () => {
    const users = [
        {id:1, name:"Rohit"},
        {id:2, name:"Sohit"},
        {id:3, name:"Mohit"},
        {id:4, name:"Bohit"},
    ]
    return (
        <View>
<Text style={{fontSize:27}}>
Component in Loop with FlatList
</Text>
<FlatList data={users}
renderItem={({item})=><Text>{item.name}</Text>}/>
        </View>
    );
};

export default FlatListExample;