import React, { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Form from "./components/Form";

const App: React.FC  = () =>{
  const [value, setValue] = useState(0)
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.title}>
          Poetry is the greatest avenue which a poet can express his thoughts and feeling 
        </Text>
        <Text style={style.counterText}>{value}</Text>
        {/* <Contact/> */}
        {/* <Counter value={value} setValue={setValue}/> */}
        <Form/>
        
      </View>
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
  container:{
    margin:7
  },
  title: {
    fontSize: 35,
    fontWeight:"bold",
    color:'red'
  },
  counterText: {
    fontSize:30,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    color:"red",
    fontWeight:"bold"
  }
  
})

export default App;