import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Discover from './screens/Discover';
import itemScreen from './screens/ItemScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name ="Discover" component={Discover}/>
        <Stack.Screen name ="ItemScreen" component={itemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


