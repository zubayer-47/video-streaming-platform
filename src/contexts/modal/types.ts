export interface ModalStateType {
  isVisibleAuthModal: boolean;
  channel: {
    createChannelModal: boolean;
    name: string | null;
  };
}

// #-------------REDUCER TYPES--------------
type UPDATE_AUTH_MODAL = {
  type: "UPDATE_AUTH_MODAL";
  payload: boolean;
};
type UPDATE_CHANNEL_CREATE_MODAL = {
  type: "UPDATE_CHANNEL_CREATE_MODAL";
  payload: boolean;
};
type ADD_CHANNEL_DATA = {
  type: "ADD_CHANNEL_DATA";
  payload: string | null;
};

export type ModalActionType =
  | UPDATE_AUTH_MODAL
  | UPDATE_CHANNEL_CREATE_MODAL
  | ADD_CHANNEL_DATA;
