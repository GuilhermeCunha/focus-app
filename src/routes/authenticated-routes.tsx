/**
 * Routes authenticated
 */

import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { withAuthenticator } from "aws-amplify-react-native";
import Home from "../pages/Home";
import { ROUTES } from "./constants";
import ConfigRoutes from "./config-routes";

const App = createMaterialBottomTabNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator labeled={false}>
      <App.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name={Platform.OS === "ios" ? "ios-home" : "home"}
                color={color}
                size={24}
              />
            );
          },
        }}
      />
      <App.Screen
        name={ROUTES.CONFIG.HOME}
        component={ConfigRoutes}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name={Platform.OS === "ios" ? "ios-settings" : "settings"}
                color={color}
                size={24}
              />
            );
          },
        }}
      />
    </App.Navigator>
  );
};

export default withAuthenticator(AppRoutes);
