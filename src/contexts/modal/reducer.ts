import { ModalActionType, ModalStateType } from "./types";

const modalReducer = (
  state: ModalStateType,
  action: ModalActionType
): ModalStateType => {
  switch (action.type) {
    case "UPDATE_AUTH_MODAL":
      return {
        ...state,
        isVisibleAuthModal: action.payload,
      };
    case "UPDATE_CHANNEL_CREATE_MODAL":
      return {
        ...state,
        channel: {
          ...state.channel,
          createChannelModal: action.payload,
        },
      };
    case "ADD_CHANNEL_DATA":
      return {
        ...state,
        channel: {
          ...state.channel,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default modalReducer;
