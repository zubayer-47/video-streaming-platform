import { ModalActionType, ModalStateType } from "./types";

const modalReducer = (
  state: ModalStateType,
  action: ModalActionType
): ModalStateType => {
  switch (action.type) {
    case "UPDATE_LOGIN_MODAL":
      return {
        ...state,
        loginModalShow: action.payload,
      };
    case "UPDATE_LOGOUT_MODAL":
      return {
        ...state,
        logoutModalShow: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
