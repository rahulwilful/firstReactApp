import React from 'react'
import { Text,View } from 'react-native'
import { Button } from 'react-native'

const CompanyData = (props) =>{

    return(
  
      <View>
      <Text>Company Name: {props.Company} </Text>
      <Text>Established : 26 years ago </Text>
      <Text> Email: techled@gmail.com</Text>
      <Button title='call sampleFunction' onPress={()=>props.sampleFunction("CompanyData") } color={"purple"} />
      </View>
  )
  }

  export default CompanyData