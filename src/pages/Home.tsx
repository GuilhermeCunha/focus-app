import { Auth } from "aws-amplify";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "../store/useSelector";

export default function Home() {
  const authSelector = useSelector((state) => state.auth);
  const logout = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Olá {authSelector.user?.email}</Text>

      <Button title="logout" onPress={logout} />
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
