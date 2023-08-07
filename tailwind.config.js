/** @type {import('tailwindcss').Config} */
export default {
	important: true,
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'102': '30rem',
				'104': '34rem',
				'106': '38rem',
				'110': '43rem',
			}
		},
	},
	plugins: [],
};
