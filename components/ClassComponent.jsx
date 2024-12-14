import { Component } from "react";
import { Button, Text, View } from "react-native";

class App extends Component{
    render(){
        return(
            <View>
<Text>Class Components</Text>
<Button title="Click Me" onPress={() => console.log("Button Clicked")}/>
            </View>
            
        )
    }
}

export default App;