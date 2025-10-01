import { Text, View } from "react-native";
import "../global.css"
import CustomText from "@/components/CustomText";
export default function Index() {
  return (
    <View className="bg-teal-800 w-screen h-screen">
      <CustomText variant="large" dark={true}>Hello World"</CustomText>
      <CustomText variant="medium" dark={false}>Hello World"</CustomText>
      <CustomText variant="small" dark={true}>Hello World"</CustomText>
    </View>
  );
}
