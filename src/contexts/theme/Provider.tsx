import { Dispatch, createContext, useEffect, useReducer } from 'react';
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

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		dispatch({
			type: 'UPDATE_THEME',
			payload: theme === 'dark' ? 'dark' : 'light',
		});

		if (
			theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('prefers-color-scheme: dark').matches)
		) {
			document.documentElement?.classList.add('dark');
		} else {
			document.documentElement?.classList.remove('dark');
		}
	}, [state.theme]);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
