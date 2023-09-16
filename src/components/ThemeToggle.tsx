import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
	const {
		updateTheme,
		state: { theme },
	} = useTheme();

	const handleThemeChange = () => {
		theme === 'dark' ? updateTheme('light') : updateTheme('dark');
	};

	return (
		<button
			className={`${
				theme === 'dark'
					? 'bg-slate-950 hover:bg-slate-900 text-white'
					: 'bg-slate-300 hover:bg-slate-400/70 text-slate-700'
			} font-semibold px-4 py-2 rounded-full capitalize transition-colors duration-500`}
			onClick={handleThemeChange}
		>
			{theme}
		</button>
	);
};

export default ThemeToggle;
