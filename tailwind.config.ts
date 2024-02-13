import type { Config } from 'tailwindcss'

const config: Config = {
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
			screens: {
				xs: '400px',
			},
			animation: {
				rise: `rise 5s linear`,
				// rise: `rise ${String(
				// 	Math.random() * (5 - 5) + 5
				// )}s ease-in-out infinite alternate`,
			},
			keyframes: {
				rise: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(calc(-200vh))' },
				},
			},
		},
	},
	plugins: [],
}
export default config
