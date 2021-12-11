import { Reducer } from "redux";
import { User } from "../../shared/types";
import { REDUCER_TYPES } from "./types";

export const AuthReducerTypes = {
  UPDATE_USER: `${REDUCER_TYPES}/auth/update-user`,
  AUTHENTICATED: `${REDUCER_TYPES}/auth/authenticated`,
  TOKEN: `${REDUCER_TYPES}/auth/token`,
  LOGOUT: `${REDUCER_TYPES}/auth/logout`,
};

export type AuthState = {
  authenticated: boolean;
  token?: string;
  user?: User;
};
const INITIAL_STATE: AuthState = {
  authenticated: false,
  token: "",
  user: null,
};

export const AuthActions = {
  updateUser: (user: User) => ({
    type: AuthReducerTypes.UPDATE_USER,
    user,
  }),

  addAuthenticated: (authenticated) => ({
    type: AuthReducerTypes.AUTHENTICATED,
    authenticated,
  }),

  updateToken: (token) => ({
    type: AuthReducerTypes.TOKEN,
    token,
  }),
  logout: () => ({
    type: AuthReducerTypes.LOGOUT,
  }),
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthReducerTypes.UPDATE_USER:
      return { ...state, user: action.user, authenticated: !!action.user };
    case AuthReducerTypes.AUTHENTICATED:
      return { ...state, authenticated: action.authenticated };
    case AuthReducerTypes.TOKEN:
      return { ...state, token: action.token };
    case AuthReducerTypes.LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default auth;
