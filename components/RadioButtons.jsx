import { View, Text,TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function RadioButtons() {

  const [radio,setRadio] = useState('')

  const subjects = [
    {id:"1",name:"c++"},
    {id:"2",name:"java"},
    {id:"3",name:"rubby"},
    {id:"4",name:"python"},
    {id:"",name:"N/A"}
  ]

  useEffect(()=>{
    console.log("radio : ",radio)
  },[radio])

  return (
    <View style={styles.main}>

    <View>
      <ActivityIndicator size={"large"} animating={radio != "" ? true:false}/>
    </View>

      <TouchableOpacity onPress={()=> setRadio('radio1')}>
        <View style={styles.radioMain}>
        <View  style={styles.radio}>
        {
           radio == 'radio1' ? <View style={ styles.selectedRadio}></View> : null
          }
        </View>
        <Text>radio 1</Text>
        </View>
      </TouchableOpacity>

      <View>


          {
            subjects.map((items,i)=>
              <TouchableOpacity onPress={()=> setRadio(items.id)} key={i}>
              <View style={styles.radioMain}>
              <View  style={styles.radio}>
                {
                  radio == items.id ? <View style={ styles.selectedRadio}></View> : null
                }
             
              </View>
              <Text>{items.name}</Text>
              </View>
            </TouchableOpacity>
            )
          }

          </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    gap:5,
    justifyContent:"center",
    alignItems:"center"
  },
  radioMain:{
    gap:5,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  radio:{
    height:15,
    width:15,
    borderWidth:1,
    borderColor:"black",
    borderRadius:50,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },

  selectedRadio:{
    height:11,
    width:11,
    borderWidth:1,
    borderColor:"black",
    backgroundColor:"black",
    borderRadius:50
  }


})