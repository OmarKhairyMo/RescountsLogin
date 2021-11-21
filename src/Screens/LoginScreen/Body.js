import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomTextInput from "../../Components/CustomTextInput";
import CustomButton from "../../Components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import fontStyle from "../../Themes";
import { FontAwesome5 } from "@expo/vector-icons";
const Body = ({
  handleChange,
  loginCredential,
  setShowPassword,
  showPassword,
  handelLogin,
}) => {
  const buttonValidation = () => {
    if (
      !loginCredential.email ||
      !loginCredential.password ||
      !loginCredential.email.split("").find((element) => element === "@") ||
      !loginCredential.email.split("").find((element) => element === ".")
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text style={styles.pageTitle}>Login</Text>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 30,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        Add your details to login
      </Text>
      <CustomTextInput
        customStyles={{
          height: "6%",
        }}
        placeholder={"Your Email"}
        name="email"
        onChange={handleChange}
        value={loginCredential.email}
      />
      <CustomTextInput
        customStyles={{
          height: "6%",
          marginTop: 20,
        }}
        value={loginCredential.password}
        name="password"
        onChange={handleChange}
        placeholder={"Password"}
        showPassword={showPassword}
        icon={
          !showPassword ? (
            <FontAwesome5
              name="eye-slash"
              size={20}
              onPress={() => setShowPassword(true)}
              style={styles.eyeIconStyle}
              color="gray"
            />
          ) : (
            <AntDesign
              name="eyeo"
              size={25}
              color="gray"
              style={styles.eyeIconStyle}
              onPress={() => setShowPassword(false)}
            />
          )
        }
      />
      <CustomButton
        borderColor={null}
        buttonName={"Login"}
        buttonNameStyle={{
          ...styles.buttonNameStyle,
          color: !buttonValidation() ? "gray" : "white",

          fontSize: 25,
        }}
        borderColor={!buttonValidation() ? "#F2F2F2" : "#707070"}
        backGroundColorr={!buttonValidation() ? "#F2F2F2" : "#707070"}
        buttonValidation={!buttonValidation()}
        marginVertical={25}
        handelLogin={handelLogin}
        loginCredential={loginCredential}
      />
      <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "500" }}>
        Forgot your password?
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 15,
          fontWeight: "500",
          color: "gray",
          marginTop: 20,
        }}
      >
        or Login With
      </Text>
      <CustomButton
        borderColor={null}
        buttonName={"Login with Facebook"}
        backGroundColorr="transparent"
        buttonNameStyle={{ ...styles.buttonNameStyle, color: "#679ECF" }}
        borderColor="#679ECF"
        socialLoginIcon={
          <Image
            style={{ ...styles.socialMediaLogo }}
            source={require("../../../assets/SocialMedia/facebook.png")}
          />
        }
      />
      <CustomButton
        borderColor={null}
        buttonName={"Login with Google"}
        borderColor="#E57769"
        backGroundColorr="transparent"
        buttonNameStyle={{ ...styles.buttonNameStyle, color: "#E57769" }}
        socialLoginIcon={
          <Image
            style={styles.socialMediaLogo}
            source={require("../../../assets/SocialMedia/Google.png")}
          />
        }
      />
      <CustomButton
        borderColor={null}
        buttonName={"Login with Apple"}
        backGroundColorr="transparent"
        borderColor="black"
        socialLoginIcon={
          <Image
            style={styles.socialMediaLogo}
            source={require("../../../assets/SocialMedia/apple-logo.png")}
          />
        }
        buttonNameStyle={{
          ...styles.buttonNameStyle,
          color: "black",
        }}
      />
      <Text
        style={{
          fontSize: 15,
          alignSelf: "center",
          marginBottom: 15,
          fontWeight: "300",
        }}
      >
        Don't have an Account ?{" "}
        <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 30,
    color: "#E9D023",
    fontWeight: "500",
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
  eyeIconStyle: { opacity: 0.4, alignSelf: "center" },
});
