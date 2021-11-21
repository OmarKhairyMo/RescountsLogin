import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/Logo/Mask2.png")}
        style={{
          resizeMode: "cover",
          width: "100%",
          position: "absolute",
          top: -6,
        }}
      />
      <Image
        source={require("../../../assets/Logo/Logo.png")}
        style={{ width: 153, height: 62 }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height:
      Platform.OS === "ios"
        ? Dimensions.get("window").height / 6
        : Dimensions.get("window").height / 5,
    paddingBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
