
import "@/global.css";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ImageBackground } from "react-native";
import LoginDetails from "../components/LoginDetails";
import SignUpDetails from "../components/SignUpDetails";

export default function Index() { 
  const [loging, setloging] = useState(true);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [actionType, setActionType] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (!actionType) return; 

    switch (actionType) {
      case "Login":
        setloging(true);
        break;
      case "SignUp":
        setloging(false);
        break;
      case "Access":
        setTimeout(() => {
          router.push("/(home)/HomeScreen");
        }, 2000);
        break;
    }
  
    setActionType("");
  }, [actionType]);

  const handleSignUp = () => {
    setActionType("SignUp");
  };

  const handleLogin = () => {
    setActionType("Login");
  };
  const handleAccess = () =>{
    setActionType("Access")
  }

  return (
    <ImageBackground
      className="flex-1 w-screen h-screen justify-center items-center"
    >
      {loging ? (
        <LoginDetails
          fullName={fullName}
          setFullName={setFullName}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          onAccessPress={handleAccess}
          onSignUpPress={handleSignUp}
        />
      ) : (
        <SignUpDetails
          fullName={fullName}
          setFullName={setFullName}
          password={password}
          setPassword={setPassword}
          correoElectronico={correoElectronico}
          setCorreoElectronico={setCorreoElectronico}
          onLoginPress={handleLogin}
          onAccessPress={handleAccess}
        />
      )}
      
    </ImageBackground>
  );
}
