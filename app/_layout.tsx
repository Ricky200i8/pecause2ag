import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#424EF5',
    },
    headerShown:false,
    statusBarStyle:'dark',
  }}
  />;
}
