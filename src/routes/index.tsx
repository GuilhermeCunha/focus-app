import React from "react";
import { useSelector } from "../store/useSelector";
import AuthenticatedRoutes from "./authenticated-routes";

export default function Routes() {
  const selector = useSelector((state) => state);
  console.debug("Redux Data: ", selector);
  // const { authenticated } = selector.auth.authenticated;
  return <AuthenticatedRoutes />;
}
