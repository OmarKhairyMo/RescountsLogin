import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Platform,
} from "react-native";

const Fotter = () => {
  return (
    <View style={styles.fotter}>
      <Text style={{ textAlign: "center", fontSize: 13 }}>
        By proceeding, you agree to our{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          Terms of Use and confirm{` `}
        </Text>
        you have read our
        <Text style={{ textDecorationLine: "underline" }}>
          {" "}
          Privacy and Cookie Statement
        </Text>
        .
      </Text>
      <Image
        source={require("../../../assets/Logo/Mask1.png")}
        style={{
          resizeMode: "cover",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
};

export default Fotter;

const styles = StyleSheet.create({
  fotter: {
    height:
      Platform.OS === "android"
        ? Dimensions.get("window").height / 5.5
        : Dimensions.get("window").height / 7,
    alignItems: "center",
  },
});
