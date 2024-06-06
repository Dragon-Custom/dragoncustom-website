import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	//tailwind defaul
	/* theme: {
		extend: {},
	},
	plugins: [], */
	//next ui theme
	darkMode: "class",
	plugins: [nextui()],
};
