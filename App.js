import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import LoginScreen from "./src/Screens/LoginScreen";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("./assets/Logo/Mask2.png")}
        style={{
          resizeMode: "cover",
          width: "100%",
          position: "absolute",
        }}
      /> */}
      <LoginScreen />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: Dimensions.get("window").height,
  },
});
export default App;
