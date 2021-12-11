import { Hub, HubCallback } from "@aws-amplify/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/ducks/auth";

// import { Container } from './styles';

const CognitoContainer: React.FC = ({ children }) => {
  const dispach = useDispatch();

  const listener: HubCallback = (data) => {
    switch (data.payload.event) {
      case "signIn":
        const {
          attributes: { email, email_verified, sub },
        } = data.payload.data;

        const {
          accessToken: { jwtToken },
        } = data.payload.data.signInUserSession;

        console.info("user signed in", data.payload.data);

        dispach(
          AuthActions.updateUser({
            email,
            emailVerified: !!email_verified,
            id: sub,
          })
        );
        dispach(AuthActions.updateToken(jwtToken));
        break;
      case "signUp":
        console.info("user signed up", data.payload.data);
        break;
      case "signOut":
        console.info("user signed out", data.payload.data);
        dispach(AuthActions.logout());
        break;
      case "signIn_failure":
        console.error("user sign in failed", data.payload.data);
        break;
      case "tokenRefresh":
        console.info("token refresh succeeded", data.payload.data);
        break;
      case "tokenRefresh_failure":
        console.error("token refresh failed", data.payload.data);
        dispach(AuthActions.logout());
        break;
      case "configured":
        console.info("the Auth module is configured");
    }
  };
  useEffect(() => {
    Hub.listen("auth", listener);
  }, []);
  return <>{children}</>;
};

export default CognitoContainer;
