import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import react from 'react';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons"



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
                    flexDirection: "row",
                }}
            >

                <Image
                    style={{ alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10, height: 130, maxWidth: 100, borderRadius: 20 }}
                    source={{ uri: props.image }}

                />


                <Text>{props.title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#a6a6a6", fontSize: 10, fontWeight: "bold" }}>
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
                    <Image style={{ width: 60, height: 50, resizeMode: 'contain', paddingTop: 5 }} source={require('../assets/user.png')} />

                </TouchableOpacity>



            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 30, paddingHorizontal: 10 }}>

                <Text style={{ fontWeight: "bold", fontSize: 20 }} > New Arrivals</Text>


                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#f7af6a" }}>View All</Text>
                </TouchableOpacity>

            </View>





            <SafeAreaView style={{ height: 250, justifyContent: "space-between", }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: "row" }}>



                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <PRODUCT id={2} author="Elizabeth Keen" title="Life Balance" image="https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                        />
                        <PRODUCT id={3} author="Mark Manson" title="Subtle Art " image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.gr-assets.com%2Fimages%2FS%2Fcompressed.photo.goodreads.com%2Fbooks%2F1465761302i%2F28257707._UY400_SS400_.jpg&imgrefurl=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F28257707-the-subtle-art-of-not-giving-a-f-ck&tbnid=e1aeTOcy9670hM&vet=12ahUKEwjbp5G70MD4AhUFKhoKHUaVA0QQMygDegUIARC3AQ..i&docid=bmcX7tO271VEaM&w=400&h=400&q=subtle%20art%20of%20not%20giving%20a%20f&client=safari&ved=2ahUKEwjbp5G70MD4AhUFKhoKHUaVA0QQMygDegUIARC3AQ" />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <PRODUCT id={4} author="Roland Figure" title="War Zone" image="https://images.unsplash.com/photo-1593091861575-38a632b4f32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                        <PRODUCT id={5} author="Alan Turing" title="Captured" image="https://images.unsplash.com/photo-1549216963-72c1712c1196?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <PRODUCT id={6} author="Jack Will" title="Petty Thief" image="https://images.unsplash.com/photo-1510135649765-8f3a1921bb1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                        <PRODUCT id={7} author="Mark Spenc" title="Kingship" image="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <PRODUCT id={8} author="Fred Burns" title="Ruthless" image="https://images.unsplash.com/photo-1525379241313-7d584a5c09a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                        <PRODUCT id={9} author="Killie Humring" title="Muscle" image="https://images.unsplash.com/photo-1586222515300-fa1992155ece?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                    </View>
                </ScrollView>
            </SafeAreaView>



            <View style={{ backgroundColor: "#f5f5f5", borderRadius: 50, width: 390, height: 280, justifyContent: 'center', flex: 1, paddingTop: 6 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30, paddingRight: 100, paddingLeft: 20, marginTop: 10 }}>My books</Text>

                <View style={{ flexDirection: "row", }}>

                    <Image style={{ width: 200, height: 160, borderRadius: 10, marginTop: 10, borderRadius: 60 }} source={require('../assets/just.png')} />
                    <Text style={{ fontWeight: "bold", paddingTop: 30, fontSize: 20, marginLeft: -20 }}>Just My Type </Text>
                    <Text style={{ paddingTop: 60, fontSize: 20, marginLeft: -135, color: '#a6a6a6' }}> Simon Garfield </Text>

                    <TouchableOpacity>
                        <Text style={{ paddingTop: 105, fontSize: 15, marginLeft: -140, color: '#ed9f39', fontWeight: 'bold' }}> Return Until 25.08.2022 </Text>

                    </TouchableOpacity>

                </View>





            </View>



            <View style={{ backgroundColor: "white", paddingTop: 48, width: 390, height: 110, paddingHorizontal: 30, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <View  >

                        <TouchableOpacity onPress={() => { navigation.navigate("home") }}>
                            <AntDesign name="home" size={30} />
                        </TouchableOpacity>

                    </View>

                    <View  >

                        <TouchableOpacity style={{ marginLeft: -20 }}>
                            <Feather name="search" size={30} />
                        </TouchableOpacity>

                    </View>

                    <View  >

                        <TouchableOpacity onPress={() => { navigation.navigate("select") }} >
                            <AntDesign name="book" size={30} />
                        </TouchableOpacity>

                    </View>


                    <View  >

                        <TouchableOpacity style={{ marginLeft: -20 }} >
                            <Feather name="shopping-bag" size={30} />
                        </TouchableOpacity>

                    </View>









                </View>
            </View>





















        </View >





    )
}