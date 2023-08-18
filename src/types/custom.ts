import React from "react";

export type InputType = React.ChangeEvent<HTMLInputElement>;
export type ClickType = React.MouseEventHandler<HTMLInputElement>;
export type FormHandler = React.FormEventHandler<HTMLFormElement>;
export type BooleanSetStateType = React.Dispatch<React.SetStateAction<boolean>>;
