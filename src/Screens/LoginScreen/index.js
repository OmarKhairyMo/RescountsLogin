import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import fontStyle from "../../Themes";
import Body from "./Body";
import Fotter from "./Fotter";
import Header from "./Header";
import loginApi from "../../Api/loginApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const [loginCredential, setLoginCredential] = useState({
    email: "foodie@rescounts.com",
    password: "devenv",
  });
  const [showPassword, setShowPassword] = useState(false);
  //   const [token, setToken] = useState(false);
  const handleChange = (value, key) => {
    setLoginCredential({ ...loginCredential, [key]: value });
  };
  const [buttonValidation, setButtonValidation] = useState(true);
  //   const [validaitonError, setValidationError] = useState({
  //     email: true,
  //     password: true,
  //   });
  const handelLogin = async (userData) => {
    try {
      const data = await loginApi
        .post("/login", userData)
        .then((res) => res.data);
      await AsyncStorage.setItem("@app_token", data.token);

      console.log(data);
      // .then((res) => res.data);
      //   setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.continer}>
      <Header />
      <Body
        loginCredential={loginCredential}
        handleChange={handleChange}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
        handelLogin={handelLogin}
        buttonValidation={buttonValidation}
      />
      <Fotter />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  pageTitle: {
    fontSize: 30,
    color: "#E9D023",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonNameStyle: {
    fontWeight: fontStyle.customFontWieght.bold,
    color: "gray",
    fontSize: 19,
  },
  socialMediaLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 15,
  },
  eyeIconStyle: { opacity: 0.4, alignSelf: "center", paddingRight: 15 },
});
