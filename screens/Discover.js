import React , {useLayoutEffect, useState} from 'react';
import { View,Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { attractionsImage, Avatar, hotelImage, notFoundImage, restoImage } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { useEffect } from 'react';
import { getPlacesData } from '../api';


function Discover(){
    const navigation = useNavigation();

    const[type, setType]= useState("restaurants");
    const[isLoading, setIsLoading] = useState(false);
    const[mainData,setMainData] = useState([]);



    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,

      });
    }, []);

    useEffect(() => {
setIsLoading(true);
getPlacesData().then(data =>{
  setMainData(data);
  setInterval(() =>{
    setIsLoading(false);
  }, 2000);
})

    }, [])

    return (
<SafeAreaView className="flex-1 relative">
<View className="flex-row items-center justify-between px-8">
<View>
    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
    <Text className="text-[#527283] text-[36px]">Blahb Bluh Blasha</Text>
</View>
<View className="w-12 h-12 bg-gray-400 rounded-full items-center justify-center shadow-lg">
    <Image source ={Avatar}
className="w-full h-full rounded-full object-cover"
    />
</View>
</View>

<View  className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
<GooglePlacesAutocomplete
GooglePlacesDetailsQuery= {{fields: 'geometry'}}
      placeholder='Search'
      fetchDetails= {true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
      }}
      query={{
        key: ["add your api key here"],
        language: 'en',
      }}
    />

</View>
{/* Menu Container */}

{isLoading ? <View className="flex-1 items-center justify-center">
  <ActivityIndicator size="large" color="#0B646B"/>

</View>:


<ScrollView>
<View className="flex-row items-center justify-between px-8 mt-8">
<MenuContainer
key= {"hotel"}
title= "Hotels"
imageSrc= {hotelImage}
type={type}
setType={setType}
/>

<MenuContainer
key= {"attractions"}
title= "Attractions"
imageSrc= {attractionsImage}
type={type}
setType={setType}
/>

<MenuContainer
key= {"restaurants"}
title= "Restaurants"
imageSrc= {restoImage}
type={type}
setType={setType}
/>
</View>

<View>
  <View className="flex-row items-center justify-between px-4 mt-8" >
<Text className="text-[#2C7379] text-[28px] font-bold" >Top Tips </Text>
<TouchableOpacity className="flex-row items-center justify-center space-x-2">
  <Text className="text-[#A0C4C7] text-[20px] font-bold" > Explore</Text>
  <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7"/>
</TouchableOpacity>
  </View>
</View>
<View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
{mainData?.length > 0 ? (<>


{mainData?.map((data, i) =>(
<ItemCardContainer key = {i}
imageSrc={data?.photo?.images?.medium?.url ?
  data?.photo?.images?.medium?.url :
  "https://cdn.pixabay.com/photo/2022/12/16/14/49/woman-7659866_960_720.jpg"
}title={data?.name}
location={data?.location_string}
data={data}
/>



) )


}





  {/* <ItemCardContainer key = {"102"}imageSrc={"https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg"}title="Sample" location="Melbourne"/> */}

</>) : (<>

<View className="w-full h-[400px] items-center space-y-8 justify-center">

<Image source={notFoundImage} className="w-32 h-32 object-cover" />
<Text className="text-2xl text-[#428288] font-semibold">
  Oops..no data found
</Text>
</View>
</>) }
</View>

</ScrollView>


}



</SafeAreaView>

       )



};

export default Discover;