import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Config from "../pages/Config";
import { ROUTES } from "./constants";
import { useTranslation } from "react-i18next";

const App = createMaterialTopTabNavigator();

const ConfigRoutes = () => {
  const { t } = useTranslation();
  return (
    <App.Navigator>
      <App.Screen
        name={ROUTES.CONFIG.ACCOUNT}
        component={Config}
        options={{
          tabBarLabel: t("account"),
        }}
      />
    </App.Navigator>
  );
};

export default ConfigRoutes;
