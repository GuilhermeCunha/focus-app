import React from "react";
import { StyleSheet, Image, View } from "react-native";
const logo = require("../../assets/logo.png");

export default function AppLoading() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
