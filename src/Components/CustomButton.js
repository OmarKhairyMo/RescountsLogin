import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const {
    borderColor,
    backGroundColorr,
    buttonName,
    socialLoginIcon,
    buttonNameStyle,
    marginVertical,
    loginCredential,
    handelLogin,
    buttonValidation,
  } = props;
  // console.log(loginCredential, "TEST");
  return (
    <TouchableOpacity
      disabled={buttonValidation}
      onPress={() =>
        buttonName === "Login" ? handelLogin(loginCredential) : null
      }
      style={styles(borderColor, backGroundColorr, marginVertical).container}
    >
      {socialLoginIcon && socialLoginIcon}
      <Text style={buttonNameStyle}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = (borderColor, backGroundColorr, marginVertical) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: backGroundColorr,
      height: 60,
      width: "100%",
      borderRadius: 50,
      borderWidth: 1,
      borderColor: borderColor,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      marginVertical: marginVertical ? marginVertical : 10,
    },
  });
