export interface ModalStateType {
  loginModalShow: boolean;
  logoutModalShow: boolean;
}

// #-------------REDUCER TYPES--------------
type UPDATE_LOGIN_MODAL = {
  type: "UPDATE_LOGIN_MODAL";
  payload: boolean;
};

type UPDATE_LOGOUT_MODAL = {
  type: "UPDATE_LOGOUT_MODAL";
  payload: boolean;
};

export type ModalActionType = UPDATE_LOGIN_MODAL | UPDATE_LOGOUT_MODAL;
