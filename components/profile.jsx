import { View, Text,FlatList,StyleSheet,ScrollView,SectionList } from 'react-native'
import React, { useEffect } from 'react'
import ChildComponent from '../../components/ChildComponent';
import {users as Users} from '../../data/Users.js'

export default function profile() {
  useEffect(()=>{
    console.log("Users",Users)
  })
  const users = Users
  
   
  
  

  return (
    <View>
      <Text>profile</Text>
     {/*  <FlatList 
      data={users}
      renderItem={({item})=><Text style={styles.list}>{item.name}</Text>}
      keyExtractor={item =>item.id}

      /> */}

     {/*  <ScrollView style={{marginBottom:40}}>


     {
       users.map((item,i)=>
        <Text style={styles.list2} key={i} >{item.name}</Text>
      )
    }
    </ScrollView> */}
       <View style={styles.gridWrap}>
     
     {/*  {
        users.map((item,i)=>
          <Text style={styles.list2} key={i} >
            <ChildComponent name={item.name}/>
          </Text>
        )
      } */}
  
     
  
      </View>
     <ScrollView style={{marginBottom:40}}>


 
    
    </ScrollView>
    <SectionList 
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=><Text style={{fontSize:25,color:"red"}}>{name}</Text>}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  gridWrap:{
flex:1,flexDirection:"row",flexWrap:"wrap"
  },
  list:{
    fontSize:20,
    color:"white",
    padding:10,
    backgroundColor:"#32d0f0",
    margin:5,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  list2:{
    fontSize:20,
    color:"white",
    padding:10,
    backgroundColor:"#eb59de",
    margin:5,
    width:110,
    height:110,
    textAlignVertical:"center",
    textAlign:"center",
    
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  }
})