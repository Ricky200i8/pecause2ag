import { View, Text } from 'react-native'
import { Link } from "expo-router";
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Link href={"/SettingsScreen"}> ver configs</Link>
    </View>
  )
}

export default HomeScreen