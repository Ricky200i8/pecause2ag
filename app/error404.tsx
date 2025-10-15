import { View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'

const NotFoundScreen = () => {
  return (
    <View className="flex-1 bg-zinc-900 items-center justify-center p-8">
      {/* Ícono principal */}
      <View className="bg-zinc-800 p-6 rounded-full mb-6">
        <Feather name="alert-triangle" size={80} color="#a855f7" />
      </View>

      {/* Título */}
      <CustomText variant="large" className="text-white font-bold text-3xl mb-2">
        ¡Error 404!
      </CustomText>

      {/* Descripción */}
      <CustomText variant="small" className="text-gray-400 text-center mb-8">
        La página que buscas no existe o fue movida.  
        Verifica la dirección o vuelve al inicio.
      </CustomText>

      {/* Botón que usa el router */}
      <CustomButton
        label="Volver al inicio"
        onPress={() => router.push('/')}
      />
    </View>
  )
}

export default NotFoundScreen
