import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticatedRoutes from "./authenticated-routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthenticatedRoutes />
    </NavigationContainer>
  );
}
