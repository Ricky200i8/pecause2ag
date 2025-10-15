
import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import CustomTextInput from '@/components/CustomTextInput'
import CustomButton from '@/components/CustomButton';

interface SignUpDetailsProps {
    fullName: string;
    setFullName: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    correoElectronico: string;
    setCorreoElectronico: (text: string) => void;
    onLoginPress: () => void;
    onAccessPress: () => void;
}

const SignUpDetails = ({ 
    fullName, 
    setFullName, 
    password, 
    setPassword, 
    correoElectronico,
    setCorreoElectronico,
    onLoginPress, 
    onAccessPress
}: SignUpDetailsProps) => {
  return (
    <View className="bg-[#b8b3b3] absolute bottom-0 h-[70%] w-full rounded-tl-[60px] p-8 items-center">
        <CustomText variant='large' className='text-black font-bold'>Únete a nosotros hoy</CustomText>
        <View className="w-full mt-6">
            <CustomTextInput placeholder='Pepe Pérez' iconName='user' value={fullName} onChangeText={setFullName}/>
            <CustomTextInput placeholder='Pepe1234' iconName='lock' isPassword={true} value={password} onChangeText={setPassword}/>
            <CustomTextInput placeholder='pepeperez@gmail.com' iconName='lock'  value={correoElectronico} onChangeText={setCorreoElectronico}/>
        </View>
        <CustomButton label='Registrarse' onPress={onAccessPress}/>
        <View className="flex-row items-center mt-4">
            <CustomText variant='small' className="text-[#666666]">¿Ya tienes una cuenta? </CustomText>
            <TouchableOpacity onPress={onLoginPress}>
                <CustomText variant='small' className="text-[#b11f32] font-bold">Inicia sesión</CustomText>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUpDetails