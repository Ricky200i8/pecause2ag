import { Text, View, Alert,} from "react-native";
import "../global.css"
import CustomText from "@/components/CustomText";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

export default function Index() {
  const [isLogin, setisLogin] = useState(true);
        
              useEffect(() => {
                      if(isLogin){
                                Alert.alert("Bienvenido");
                                        }  
                                                return () => {
                                                        }
                                                              }, [isLogin==false])
                                                                    
                                                                      return (
                                                                          <View className="flex-1 justify-end items-center bg-neutral-900"> 
                                                                              <View className="text-black bg-white w-screen h-[70%] rounded-tl-[70] pt-[100] pb-[100] items-center">
                                                                                  <Text className="text-black text-2xl font-bold ">¡Hola Mundo!</Text>
                                                                                      <Link href={"/HomeScreen"}> home</Link>
                                                                                          </View>
                                                                                              </View>
                                                                                                );
                                                                                                }
                                                                                                