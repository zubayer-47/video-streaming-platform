export enum UserRight {
  USER = 101,
  MODER = 201,
  ADMIN = 302,
}

interface User {
  id: string;
  username: string;
  fullname: string;
  email: string;
  token: string;
  avater: string | null;
}

// type UserPartial = {
//   fullname?: string;
//   rights?: UserRight;
//   active?: boolean;
//   unable?: boolean;
// };

type AuthErrorType = {
  message?: string;

  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
};

export interface UserStateType {
  authError: AuthErrorType | null;
  authLoading: boolean;
  isLoggedIn: boolean;
  user: User | null;
}

// #-------------REDUCER TYPES--------------
type AUTH_LOADING = {
  type: "AUTH_LOADING";
  payload?: boolean;
};
type AUTH_ERROR = {
  type: "AUTH_ERROR";
  payload: AuthErrorType | null;
};
type SET_AUTH = {
  type: "SET_AUTH";
  payload: User;
};
type REM_AUTH = {
  type: "REM_AUTH";
};
type UPDATE_USER = {
  type: "UPDATE_USER";
  payload: User;
  // payload: Partial<UserPartial>;
};

export type UserActionType =
  | AUTH_ERROR
  | AUTH_LOADING
  | SET_AUTH
  | REM_AUTH
  | UPDATE_USER;
