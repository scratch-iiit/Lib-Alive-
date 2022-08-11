import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons"

export default function Blist({ navigation }) {


    const PRODUCT = (props) => {
        return (
            <View
                style={{
                    height: 250,
                    width: 200,
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

        <View style={{ backgroundColor: "#f5f5f5", flex: 1, paddingTop: 55, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View  >

                    <TouchableOpacity onPress={() => { navigation.navigate("books") }} style={{ paddingRight: 100 }}>
                        <Ionicons name="md-chevron-back" size={30} color="black" />
                    </TouchableOpacity>

                </View>


                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Books</Text>
                </View>



                <View style={{ paddingLeft: 100 }}>
                    <TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={20} />

                    </TouchableOpacity>
                </View>


            </View>




            <SafeAreaView style={{ justifyContent: "space-between", alignItems: 'center', }}>
                <ScrollView showsVerticalScrollIndicator={false}>


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





        </View >








    );
}
