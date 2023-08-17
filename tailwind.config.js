/** @type {import('tailwindcss').Config} */
export default {
	important: true,
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'104': '34rem',
				'106': '38rem',
				'110': '43rem',
			}
		},
	},
	plugins: [
		
		// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
