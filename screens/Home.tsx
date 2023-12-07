import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Settings from './Settings'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Settings name='satyam shukla' age={23} email='satyam@gmail.com'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})