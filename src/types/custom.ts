import React from 'react';

export type InputType = React.ChangeEvent<HTMLInputElement>;
export type SelectType = React.ChangeEvent<HTMLSelectElement>;
export type ClickHandler = React.MouseEventHandler<HTMLInputElement>;
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

export interface VideoBodyMetaDataType {
	channelId: string;
	thumbnail: string;
	title: string;
	description: string;
	createdAt: string;
	channel: {
		name: string;
		user: { avater: string };
	};
	followers: number;
}

export interface PlaylistBodyDataType {
	title: string;
	description: string;
	playlist_video: {
		channelId: string;
		videoId: string;
		thumbnail: string;
		title: string;
		duration: number;
		createdAt: string;
		channel: {
			name: string;
		};
	}[];
}

export interface MetaDataType extends VideoBodyMetaDataType {
	playlist?: PlaylistBodyDataType;
}
