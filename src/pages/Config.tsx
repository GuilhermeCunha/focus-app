import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { availableLanguages } from "../i18n/constants";

export default function Config() {
  const { i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const logout = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const LanguageItem = ({ label, value }: { label: string; value: string }) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        i18n.changeLanguage(value);
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Button title="logout" onPress={logout} />
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              {availableLanguages.map(({ name, value }) => (
                <LanguageItem
                  label={name as string}
                  value={value}
                  key={name as string}
                />
              ))}
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>{i18n.language}</Text>
        </Pressable>
      </View>
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
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#f36293fd",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
