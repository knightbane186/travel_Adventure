import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView,Image, ImageBase, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainCharac } from '../assets';
import * as Animatable from 'react-native-animatable';

const Homescreen = () => {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    });
  }, []);

  return (
<SafeAreaView className=" bg-white flex-1 relative">

{/* First section */}
<View className="flex-row px-6 mt-8 items-center space-x-2">
<View className="w-16 h-16 bg-black rounded-full items-center justify-center">
    <Text className= "text-[#00bcc9] text-3xl font-semibold">Go</Text>
</View>
<Text className="text-[#2A2B4B] font-semibold text-3xl" >Travel</Text>
</View>

{/*Second section of the display */}
<View className= "px-6 mt-8 space-y-3">
<Text className="text-[#3C6072] text-[42px]">
  Enjoy the trip with
</Text>
<Text className="text-[#00BCC9] text-[38px] font-bold">
  Good Moments
</Text>
<Text className="text-[#3C6072] text-base">
Understanding the game pattern:
We play using Axies and we can sell/buy them in the axle store
Connect using metamask
</Text>
</View>

{/* Circle Section*/}
<View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
<View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>


{/* Image container & Go button animation */}
<View className="flex-1 relative items-center justify-center">

< Animatable.Image animation="fadeIn"
easing="ease-in-out"
source={MainCharac} className="w-full h-full object-cover"/>

<TouchableOpacity
onPress={()=> navigation.navigate("Discover")}
className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
< Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className = "w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]" >
  <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
</Animatable.View>
</TouchableOpacity>
</View>





</SafeAreaView>


  );
};

export default Homescreen;
