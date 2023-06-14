/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: '1rem',
			center: true,
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			green: '#D3F26A',
			white: '#FAFAF5',
			black: '#272A2D',
			'soft-grey': '#F5F5EB',
			grey: '#E5E6E2',
			'hard-grey': '#858786',
		},
		extend: {},
	},
	plugins: [],
}
