import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import {Colors} from "../../constants/Colors.ts"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function _layout() {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor:Colors.ACTIVE
   }}>

<Tabs.Screen name="products" options={{
      tabBarLabel:"",
      tabBarIcon:({color})=><FontAwesome5 name="boxes" size={24} color={color} />
    }} 
    
    />

     <Tabs.Screen name="explore" options={{
      tabBarLabel:"",
      tabBarIcon:({color})=><Ionicons name="search" size={24} color={color} />
    }}  />
     
  {/*    <Tabs.Screen name="Products" options={{
      tabBarLabel:"Profile",
      tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />
    }}  /> */}
    
    
   
   
   
   </Tabs>
  )
}