import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Amplify, { HubCallback } from "@aws-amplify/core";
import { Hub } from "aws-amplify";

import Routes from "./src/routes";
import { store, persistor } from "./src/store";

import { withAuthenticator } from "aws-amplify-react-native";

import config from "./src/aws-exports";
import CognitoContainer from "./src/containers/hocs/CognitoContainer";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CognitoContainer>
          <Routes />
        </CognitoContainer>
      </PersistGate>
    </Provider>
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

export default withAuthenticator(App);
