import { useCallback, useContext } from 'react';
import { ThemeContext } from '../contexts/theme/Provider';
import { ThemeType } from '../contexts/theme/types';

export default function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');

	const { dispatch } = context;

	const updateTheme = useCallback(
		(payload: ThemeType) => {
			localStorage.setItem('theme', payload);
			dispatch({ type: 'UPDATE_THEME', payload });
		},
		[dispatch]
	);
	return { ...context, updateTheme };
}
