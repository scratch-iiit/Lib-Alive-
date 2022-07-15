import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import react from 'react';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons"


export default function Select() {
    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View  >

                    <TouchableOpacity onPress={() => { navigation.navigate("books") }} style={{ paddingRight: 100 }}>
                        <Ionicons name="md-chevron-back" size={30} color="black" />
                    </TouchableOpacity>

                </View>


                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detail Book</Text>
                </View>



                <View style={{ paddingLeft: 100 }}>
                    <TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={20} />

                    </TouchableOpacity>
                </View>


            </View>

            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: 100, paddingTop: 50, paddingLeft: 20, alignItems: 'center' }}>
                <Image style={{ width: 350, height: 380, resizeMode: 'contain', }} source={require('../assets/subtle.png')} />

            </View>

            <View style={{ flexDirection: 'row', paddingTop: 290, paddingLeft: 70, alignItems: 'center' }}>

                <Text style={{ fontSize: 35, fontWeight: "bold" }}>The subtle art </Text>


            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 35, alignItems: 'center' }}>

                <Text style={{ fontSize: 35, fontWeight: "bold" }}>of not giving <Text style={{ fontWeight: "bold", fontSize: 35 }}>a f*ck</Text>
                </Text>


            </View>





            <View style={{ flexDirection: 'row', paddingLeft: 130, alignItems: 'center', paddingTop: 20 }}>

                <Text style={{ fontSize: 17, color: '#a6a6a6', fontWeight: "bold" }}>Mark Manson
                </Text>


            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 130, alignItems: 'center', paddingTop: 15 }}>

                <Text style={{ fontSize: 17, color: '#33f266', fontWeight: "bold" }}>8 Left in Stock
                </Text>


            </View>




            <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center', paddingTop: 30 }}>

                <Text style={{ fontSize: 17, color: '#a6a6a6' }}>The Subtle Art of Not Giving a F*ck is a book that challenges the conventions of self-help by inviting the reader to NOT try, say no often and embrace negative thinking. Not giving a f*ck is about being comfortable with being different and caring about something more important than adversity.
                </Text>


            </View>






            <View >

                <TouchableOpacity style={{
                    backgroundColor: "black", borderRadius: 20, marginTop: 30, flexDirection: "row", width: 350, height: 60, marginLeft: 10, justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 24, color: 'white', paddingLeft: 25, paddingTop: 15, paddingRight: 25 }}>Get the Book</Text>
                </TouchableOpacity>

            </View>



        </View >





    )
}