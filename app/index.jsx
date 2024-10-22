
import { Redirect } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

export default function Index() {
  return (
 

 <Redirect href="/home"/> 
 

  
  );
}
