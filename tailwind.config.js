/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				seance: {
					50: '#FBF4FF',
					100: '#F6E8FF',
					200: '#EED0FE',
					300: '#E4ABFC',
					400: '#D479F9',
					500: '#A626D3',
					600: '#A626D3',
					700: '#8C1CAF',
					800: '#74198F',
					900: '#621A75',
					950: '#270239',
				},
			},
		},
	},
	plugins: [],
};
