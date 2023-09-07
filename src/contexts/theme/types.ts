export type ThemeType = 'dark' | 'light';

export interface ThemeStateType {
	theme: ThemeType | null;
}

// #-------------REDUCER TYPES--------------
type UPDATE_THEME = {
	type: 'UPDATE_THEME';
	payload: ThemeType;
};

export type ThemeActionType = UPDATE_THEME;
