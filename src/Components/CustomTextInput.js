import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import fontStyle from "../Themes";
import { AntDesign } from "@expo/vector-icons";
const CustomTextInput = (props) => {
  const {
    value,
    placeholder,
    icon,
    onChange,
    customStyles,
    name,
    showPassword,
  } = props;
  return (
    <View
      style={{
        height: 60,
        marginTop: customStyles.marginTop ? customStyles.marginTop : 0,
        borderRadius: 50,
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 20,
      }}
    >
      <TextInput
        style={styles.textinputStyle}
        placeholder={placeholder}
        secureTextEntry={name === "password" ? !showPassword : false}
        autoCapitalize={"none"}
        value={value}
        onChangeText={(text) => onChange(text, name)}
      />
      {name === "email" &&
        value.split("").find((element) => element === "@") &&
        value.split("").find((element) => element === ".") && (
          <AntDesign
            name="checkcircle"
            size={24}
            color="green"
            style={{ alignSelf: "center" }}
          />
        )}
      {icon && icon}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textinputStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: fontStyle.customFontWieght.semiBold,
  },
});
