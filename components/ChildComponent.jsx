import { View, Text } from 'react-native'
import React from 'react'

export default function ChildComponent(props) {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}