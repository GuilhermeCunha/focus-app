import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Amplify from "@aws-amplify/core";

import "./src/i18n";

import Routes from "./src/routes";
import { store, persistor } from "./src/store";
import config from "./src/aws-exports";
import CognitoContainer from "./src/containers/hocs/CognitoContainer";
import AppLoading from "./src/pages/AppLoading";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
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

export default App;
