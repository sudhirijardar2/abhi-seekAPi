/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList

} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'react-native-axios'
// import { useEffect } from 'react/cjs/react.production.min';




const Home = ({ navigation }) => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch(
            // "http://15.206.166.219:5500/admin/catagoryList"
            "http://15.206.166.219:5500/user/getCategories"
            ).then(response => response.json()).then((categories) => setcategories(categories));
        // console.log(categories.result)



        //         const requestOptions =  {
        //                 method: 'GET',
        //                 redirect: 'follow'
        //               };

        //               fetch("http://3.109.48.115:5500/admin/catagoryList", requestOptions)
        //             .then(response => response.json())
        //             .then(categories=> console.log(categories))
        //             .catch(error => console.log('error', error));
        //             fetch('http://example.com/movies.json')
        //   .then(response => response.json())
        //   .then(data => console.log(data));
    }, []);

    //     axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // const requestOptions =  {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };

    //   fetch("http://3.109.48.115:5500/admin/catagoryList", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // const categories = [
    //     {
    //         id: 1,
    //         title: 'Salon for \nWomen',
    //         image: require('../assets/swoman.png')
    //     },
    //     {
    //         id: 2,
    //         title: 'Talior',
    //         image: require('../assets/tailor.png')
    //     },
    //     {
    //         id: 3,
    //         title: 'Massage \nfor Men',
    //         image: require('../assets/mman.png')
    //     },
    //     {
    //         id: 4,
    //         title: 'Salon for\nMen',
    //         // title1:'ajdlfjdjfj',
    //         image: require('../assets/hsalon.png')
    //     },
    //     {
    //         id: 5,
    //         title: 'Home\nRepairs',
    //         // title1:'ajdlfjdjfj',
    //         image: require('../assets/hrepair.png')
    //     },
    //     {
    //         id: 6,
    //         title: 'AC Service\n&Repair',
    //         // title1:'ajdlfjdjfj',
    //         image: require('../assets/acrepair.png')
    //     }
    // ]

    const des = "An OTP will be sent on given number for varification \n Standard message and data rates apply"
    return (<>
        {/* <ScrollView> */}
        <View style={{ marginHorizontal: 20 }}>

            <View style={{ borderRadius: 15, width: '15%', alignItems: 'center', backgroundColor: '#F5C443', top: 50 }}>

                <Image

                    source={require('../assets/user.png')}
                />


            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: '800', fontStyle: 'normal', lineHeight: 19, left: 60, top: 8, color: 'black' }}>Hi,Harry</Text>
                <Location name='ios-location' size={20} color={'black'} style={{ left: 60, top: 8 }} />
                <Text style={{ fontSize: 12, fontStyle: 'normal', fontWeight: '400', lineHeight: 22, left: 80, bottom: 12, color: '#161616' }}>Ayodhya Nagar,Bhopal</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("HomeOneScroll")}>
                <View style={{ borderRadius: 15, left: 280, width: '15%', alignItems: 'center', backgroundColor: '#F3F3F3', bottom: 52 }}>
                    <Noti name='notifications' color={'#5E17EB'} size={30} style={{ marginTop: 5 }} />
                    <Image
                        style={{ height: 8, width: 8, top: -35, left: 5 }}
                        source={require('../assets/bindi.png')}
                    />
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', borderRadius: 12, borderColor: '#E3E3E3', borderWidth: 1, top: -30 }}>
                <Icon name='search' color={'#757575'} size={30} style={{ marginTop: 10 }} />

                <TextInput placeholder='Search for services' style={{ fontSize: 14 }} ></TextInput>
            </View>
            <LinearGradient colors={['#5E17EB', '#8C52FF']} style={{ borderRadius: 20 }}>

                <View style={{ borderRadius: 20, alignContent: 'flex-end', alignItems: 'flex-end', padding: 10 }}>

                    <Image
                        style={{ top: 5 }}
                        source={require('../assets/banner.png')}
                    />

                </View>
                <View style={{ position: 'absolute', top: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Sumary")} >
                        <View style={{ borderRadius: 30, alignItems: 'center', padding: 5, marginHorizontal: 20, paddingHorizontal: 20, backgroundColor: 'white' }}>
                            <Text style={{ color: '#5E17EB', fontSize: 10, fontWeight: '700' }}>NEW USER</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'white', left: 20, top: 10 }}>Get Discount</Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'white', left: 20, top: 10 }}>Upto</Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: '#F5C443', left: 75, top: -20 }}>25%</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFFFFF', top: -20, left: 20 }}>For every cleaning services</Text>




                </View>
            </LinearGradient>

            <View style={{ marginTop: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SelectedServices")}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#161616' }}>Categories</Text>
                </TouchableOpacity>
                <FlatList
                    style={{ height: 600 }}
                    data={categories.result}
                    //  horizontal={true}
                    // numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ margin: 15 }}>
                                <View style={{ borderRadius: 12, padding: 10, margin: -10, backgroundColor: '#FFFFFF',width:100 }}>
                                    <Image
                                        style={{ borderRadius: 12,height:190,width:380 }}
                                        source={{uri:item.image}} />

{/* <Text style={{ fontSize: 14, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item._id}</Text> */}

                                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.catagoryName}</Text>
                                </View>




                            </View>
                        )

                    }}



                />
            </View>
        </View>
        {/* </ScrollView> */}
    </>
    )
}
export default Home;