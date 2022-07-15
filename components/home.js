import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import react from 'react';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons"


export default function Home({ navigation }) {
    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>




                <View>
                    <TouchableOpacity style={{ paddingLeft: 310 }}>
                        <Text style={{ fontSize: 20, color: "#a6a6a6" }}>Skip</Text>

                    </TouchableOpacity>
                </View>


            </View>




            <View style={{ position: 'absolute', top: 10, zIndex: 100, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingTop: 100, paddingLeft: 30, alignItems: 'center' }}>
                <Image style={{ width: 350, height: 400, resizeMode: 'contain', }} source={require('../assets/start.png')} />

            </View>

            <View style={{ flexDirection: 'row', paddingTop: 430, paddingLeft: 100, alignItems: 'center' }}>

                <Text style={{ fontSize: 40 }}>Keep your</Text>


            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 50, alignItems: 'center' }}>

                <Text style={{ fontSize: 40, }}>books <Text style={{ fontSize: 40 }}>organized</Text>
                </Text>


            </View>




            <View style={{ flexDirection: 'row', paddingLeft: 30, alignItems: 'center' }}>

                <Text style={{ fontSize: 17, color: '#a6a6a6' }}>In the application you can book a book
                </Text>


            </View>


            <View style={{ flexDirection: 'row', paddingLeft: 100, alignItems: 'center' }}>

                <Text style={{ fontSize: 18, color: '#a6a6a6' }}>and get it in our library
                </Text>


            </View>



            <View >

                <TouchableOpacity onPress={() => { navigation.navigate("books") }} style={{
                    backgroundColor: "black", borderRadius: 20, marginTop: 90, flexDirection: "row", width: 100, height: 60, marginLeft: 250, justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 24, color: 'white', paddingLeft: 25, paddingTop: 15, paddingRight: 25 }}>Next</Text>
                </TouchableOpacity>

            </View>



        </View >





    )
}