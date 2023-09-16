import { ThemeActionType, ThemeStateType } from './types';

const themeReducer = (
	state: ThemeStateType,
	action: ThemeActionType
): ThemeStateType => {
	switch (action.type) {
		case 'UPDATE_THEME':
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};

export default themeReducer;
