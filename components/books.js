import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import react from 'react';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons"
import React from 'react';
import bike from "../assets/images/biker.jpg"

export default function Books({ navigation }) {

    const PRODUCT = (props) => {
        return (
            <View
                style={{
                    height: 250,
                    width: 150,
                    padding: 20,
                    marginTop: 30,
                    borderRadius: 20,
                    marginLeft: 20,
                    position: "relative",
                    flexDirection: "column",
                }}
            >

                <Image
                    style={{ alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10, height: 130, maxWidth: 100, borderRadius: 20 }}
                    source={props.image}

                />


                <Text>{props.title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#a6a6a6", fontSize: 12, fontWeight: "bold" }}>
                        {props.author}
                    </Text>
                </View>
            </View>
        );
    };

    return (

        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 50, }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                <Text style={{ fontSize: 40, fontWeight: "bold", marginLeft: 10 }}>21</Text>
                <Text style={{ color: "#757474", paddingRight: 40, marginLeft: -10, fontWeight: "bold" }}>Tues</Text>
                <Text style={{ color: "#757474", paddingTop: 25, marginLeft: -90, fontWeight: "bold" }}>July 2022</Text>




                <TouchableOpacity style={{ paddingLeft: 150, paddingTop: 5 }}>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} />

                </TouchableOpacity>



                <TouchableOpacity>
                    <Image style={{ width: 60, height: 50, resizeMode: 'contain', paddingTop: 5, resizeMode: 'contain' }} source={require('../assets/user.png')} />

                </TouchableOpacity>



            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 30, paddingHorizontal: 10 }}>

                <Text style={{ fontWeight: "bold", fontSize: 20 }} > New Arrivals</Text>


                <TouchableOpacity onPress={() => { navigation.navigate("blist") }}>
                    <Text style={{ fontSize: 18, color: "#f7af6a" }}>View All</Text>
                </TouchableOpacity>

            </View>





            <SafeAreaView style={{ height: 250, justifyContent: "space-between", }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: "row" }}>



                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <TouchableOpacity>

                            <PRODUCT id={2} author="Sankara Saranam" title="God Without Religion" image={require('../assets/God.png')}

                            />

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PRODUCT id={3} author="Mark Manson" title="The Subtle Art of ... " image={require('../assets/subtle.png')} />

                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <TouchableOpacity>

                            <PRODUCT id={4} author="B.A. Paris" title="Behind Closed Doors" image={require('../assets/behind.jpg')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PRODUCT id={5} author="Kate Murray-Browne" title="The Upstairs Room" image={require('../assets/upstairs.jpg')} />

                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <TouchableOpacity>
                            <PRODUCT id={6} author="Josh Malerman" title="Bird Box" image={require('../assets/bird.jpg')} />

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PRODUCT id={7} author="Elizabeth Carpenter" title="11 Missed Calls" image={require('../assets/eleven.jpg')} />

                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <TouchableOpacity>
                            <PRODUCT id={8} author="Fred Burns" title="How to Change" image={require('../assets/change.png')} />

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PRODUCT id={9} author="Mitch Princetein" title="Popular" image={require('../assets/popular.jpg')} />

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>





            <View style={{ backgroundColor: "#f5f5f5", width: 390, height: 90, flex: 1, paddingLeft: 10, marginTop: 50, borderRadius: 40 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30, paddingRight: 100, paddingLeft: 20, paddingTop: 20 }}>My books</Text>

                <View style={{ flexDirection: "row", }}>

                    <Image style={{ width: 150, height: 150, borderRadius: 5, marginTop: 10, borderRadius: 30, }} source={require('../assets/upstairs.jpg')} />
                    <Text style={{ fontWeight: "bold", paddingTop: 30, fontSize: 20, marginLeft: 5 }}>The Upstairs Room </Text>
                    <Text style={{ paddingTop: 60, fontSize: 20, marginLeft: -135, color: '#a6a6a6' }}> Kate Murray</Text>

                    <TouchableOpacity>
                        <Text style={{ paddingTop: 105, fontSize: 15, marginLeft: -140, color: '#ed9f39', fontWeight: 'bold' }}> Return Until 25.08.2022 </Text>

                    </TouchableOpacity>

                </View>





            </View>



            <View style={{ backgroundColor: "black", paddingTop: 40, width: 390, height: 110, paddingHorizontal: 30, borderRadius: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <View  >

                        <TouchableOpacity onPress={() => { navigation.navigate("home") }}>
                            <AntDesign name="home" size={30} color='white' />
                        </TouchableOpacity>

                    </View>

                    <View  >

                        <TouchableOpacity style={{ marginLeft: -20 }}>
                            <Feather name="search" size={30} color='white' />
                        </TouchableOpacity>

                    </View>

                    <View  >

                        <TouchableOpacity onPress={() => { navigation.navigate("select") }} style={{ marginLeft: -20 }} >
                            <AntDesign name="book" size={30} color='white' />
                        </TouchableOpacity>

                    </View>


                    <View  >

                        <TouchableOpacity style={{ marginLeft: -20 }} >
                            <Feather name="shopping-bag" size={30} color='white' />
                        </TouchableOpacity>

                    </View>









                </View>
            </View>





















        </View >





    )
}