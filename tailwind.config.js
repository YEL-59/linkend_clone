module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#152b3c',
				secondary: '#12222e',
			},
			backgroundImage: {
				breadbg: "url('/src/assets/background/breadcrumb-bg.jpg')",
			},
			fontSize: {
				xsm: '.8rem',
			},
		},
	},
	plugins: [],
};
