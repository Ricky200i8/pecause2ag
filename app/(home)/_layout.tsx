import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const HomeLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="HomeScreen" options={{
            title:"Menú Principal"
        }}/>
        <Tabs.Screen name="SettingsScreen"options={{
            title:"Configuraciones"
        }}/>
    </Tabs>
  )
}

export default HomeLayout