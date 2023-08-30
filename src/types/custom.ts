import React from 'react';

export type InputType = React.ChangeEvent<HTMLInputElement>;
export type SelectType = React.ChangeEvent<HTMLSelectElement>;
export type ClickType = React.MouseEventHandler<HTMLInputElement>;
export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>;
export type FormHandler = React.FormEventHandler<HTMLFormElement>;
export type BooleanSetStateType = React.Dispatch<React.SetStateAction<boolean>>;
export type TextAreaHandler = React.ChangeEventHandler<HTMLTextAreaElement>;

// API

export interface VideoMetaData {
	videoId: string;
	thumbnail: string;
	title: string;
	duration: number;
	createdAt: Date;
	channel: Channel;
}

export interface Channel {
	channelId: string;
	name: string;
}
