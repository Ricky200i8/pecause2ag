import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextProps{
    variant:"small"|"medium"|"large";
    dark?:boolean;
    children:React.ReactNode;
}

const CustomText = ({variant, dark=false, children}:CustomTextProps) => {
  return (
      <Text className={StyleSelector(variant, dark)}>
        {children}
      </Text>
  )
}

function StyleSelector(variant:any, dark:boolean){
    let style=""
    if(dark==true){
        style+= "text-white "
    }else{
        style+= "text-[#0F626F] "
    }

    switch(variant){
        case "small":
            return style + " font-semibold text-sm"
        case "medium":
            return style + " font-semibold text-base"
        case "large":
            return style + " font-semibold text-xl"
    }
}


export default CustomText