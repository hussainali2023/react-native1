import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Map = () => {
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
    ]
    return (
        <SafeAreaView>
            
<ScrollView>
{
    user.map((item)=>
        <Text style={styles.title}>{item.name}</Text>
    )
}
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

export default Map;