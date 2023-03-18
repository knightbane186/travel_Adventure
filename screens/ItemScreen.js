import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const itemScreen = ({route}) => {
const navigation = useNavigation();
const data = route?.params?.param;
useLayoutEffect(()=>{
navigation.setOptions({
    headerShown: false,
});
},[]);

  return (
<SafeAreaView className="flex-1 bg-white relative" >
<ScrollView className="flex-1 px-4 py-6">
<View className="relative bg-white shadow-lg">
<Image
source={{uri:data?.photo?.images?.large?.url ?
    data?.photo?.images?.large?.url :
    "https://cdn.pixabay.com/photo/2022/12/16/14/49/woman-7659866_960_720.jpg"}}
className="w-full h-72 object-cover rounded-2xl"

/>
<View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
<TouchableOpacity
onPress={()=> navigation.navigate("Discover")}
className="w-10 h-10 rounded-md items-center justify-center bg-white">
<FontAwesome5  name="chevron-left" size={24} color="#06B2BE" />
</TouchableOpacity>

<TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]" >
<FontAwesome5  name="heartbeat" size={24} color="white"/>


</TouchableOpacity>
</View>

<View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
<View className="flex-row space-x-2 items-center">
<Text className="text-[12px] font-bold text-gray-100">
        {data?.price_level}
    </Text>
    <Text className="text-[32px] font-bold text-gray-100">
        {data?.price}
    </Text>

</View>
<View className="px-2 py-1 rounded-md bg-teal-100">
    <Text>{data?.open_now_text}</Text>
</View>
</View>
</View>

<View className="mt-6">
    <Text className="text-[#428288] text-[24px] font-bold">
        {data?.name}
    </Text>
    <View className="flex-row items-center space-x-2 mt-2">
        <FontAwesome name="map-marker" size={25} color="#8C9EA6"/>
<Text className="text-[#8C9EA6] text-[20px] font-bold">
    {data?.location_string}
</Text>
    </View>
</View>

<View className="mt-4 flex-row items-center justify-between">
{data?.rating && (
    <View className=" flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <FontAwesome  name="star" size={24} color="#D58574"/>
        </View>
        <View>
            <Text className="text-[#515151]">{data?.rating}</Text>
            <Text className="text-[#515151]">Ratings</Text>
        </View>
    </View>
)
}
{data?.price_level && (
    <View className=" flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
           <MaterialIcons name='attach-money' size={24} color="black"/>
        </View>
        <View>
            <Text className="text-[#515151]">{data?.price_level}</Text>
            <Text className="text-[#515151]">Price Level</Text>
        </View>
    </View>
)
}

{data?.bearing && (
    <View className=" flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <FontAwesome  name="star" size={24} color="#D58574"/>
        </View>
        <View>
            <Text className="text-[#515151]">{data?.bearing}</Text>
            <Text className="text-[#515151]">Bearing</Text>
        </View>
    </View>
)
}
</View>
</ScrollView>
</SafeAreaView>

  );
};

export default itemScreen 