import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";

const SchrollScreen = () => {
    return (
       <SafeAreaView>
         <ScrollView>
            <Text style={{fontSize:30, color:"red", margin:7, textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente velit eaque, et placeat amet dignissimos quae reiciendis laboriosam cum totam maxime unde ad? Dolore magni, ipsum dignissimos eum voluptatibus quia. Cupiditate beatae asperiores expedita! Vero distinctio aliquid, ad commodi nesciunt nobis sed! Eveniet, debitis tenetur
                </Text>
                <View style={{margin:10}}>
                    <TouchableHighlight>
                    <Text  style={{textAlign:"center", padding:10, backgroundColor:"green",color:"white", fontSize:35, borderRadius:15}}>
                        Click Here
                    </Text>
                    </TouchableHighlight>
                </View>
        </ScrollView>
       </SafeAreaView>
    );
};

export default SchrollScreen;