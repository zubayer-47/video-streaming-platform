import { Dispatch, createContext, useReducer } from 'react';
import themeReducer from './reducer';
import { initThemeState } from './state';
import { ThemeActionType, ThemeStateType } from './types';

export const ThemeContext = createContext({
	state: {} as ThemeStateType,
	dispatch: {} as Dispatch<ThemeActionType>,
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(themeReducer, initThemeState);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
