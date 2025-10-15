import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' // 🔹 Importamos íconos

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#a855f7', // Color cuando está activa
        tabBarInactiveTintColor: '#a1a1aa', // Color cuando está inactiva
        tabBarStyle: { backgroundColor: '#18181b' },
        headerStyle: { backgroundColor: '#18181b' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "Menú Principal",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: "Configuraciones",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Reproduccion"
        options={{
          title: "Reproducción",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'play-circle' : 'play-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default HomeLayout
