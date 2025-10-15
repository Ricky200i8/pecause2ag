import { View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomText from '@/components/CustomText';

const CuentaScreen = () => {
  return (
    <ScrollView className="flex-1 bg-[#121212] p-4">

      {/* Plan */}
      <View className="bg-[#1E1E1E] rounded-lg p-4 mb-4">
      <View className="bg-neutral-700  rounded-full px-3 py-1 self-start">
        <CustomText className="text-purple-500 text-sm font-bold">
          Tu Plan
        </CustomText>
      </View>
        <CustomText className="text-[#E0E0E0] text-lg font-bold mt-2 mb-1">
          Familiar (plan anterior)
        </CustomText>
        <CustomText className="text-[#B0B0B0] text-sm">
          Eres miembro de un plan Familiar.
        </CustomText>
    </View>

      {/* Cuenta */}
      <View className="mb-6">
        <CustomText className="text-purple-500 text-base font-bold mb-2">
          Cuenta
        </CustomText>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <MaterialIcons name="edit" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Editar información personal
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="reload" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Restaurar playlists
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Suscripción */}
      <View className="mb-6">
        <CustomText className="text-purple-500 text-base font-bold mb-2">
          Suscripción
        </CustomText>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <FontAwesome name="spotify" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Administrar tu suscripción
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="person-add" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Administrar miembros
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="close" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Cancelar suscripción
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Pago */}
      <View className="mb-6">
        <CustomText className="text-purple-500 text-base font-bold mb-2">
          Pago
        </CustomText>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="receipt" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Historial de pedidos
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="card" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Tarjetas de pago guardadas
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center bg-[#1E1E1E] py-3 px-3 rounded-lg mb-2">
          <Ionicons name="pricetag" size={22} color="#ccc" />
          <CustomText className="flex-1 text-[#ccc] ml-3 text-sm">
            Utilizar
          </CustomText>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default CuentaScreen;
