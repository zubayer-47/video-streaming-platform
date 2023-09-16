/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	important: true,
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				102: '28rem',
				104: '34rem',
				106: '38rem',
				110: '43rem',
			},

			colors: {
				...colors,
				dark: '#1F2021',
				'dark-modal': '#212121',
				'dark-overlay': {
					100: '#353535',
					200: '#3C3C3D',
				},
				'dark-text': '#87878F',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
