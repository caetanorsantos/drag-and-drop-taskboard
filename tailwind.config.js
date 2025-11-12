/** @type {import('tailwindcss').Config} */
export default {
	content: ["./dist/**/*.html", "./dist/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter"],
			},
		},
	},
	plugins: [],
};
