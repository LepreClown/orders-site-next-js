const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

// const primary = '#E30B13'
const primary = '#a6ce47'

module.exports = {
	darkMode: ['class', "[class~='dark']"],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			black: '#565658',
			primary,
			white: '#ffffff',
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
			gray: {
				100: '#F5F5F5',
				300: '#d9dae8',
				500: '#999aa5',
				600: '#66676e',
				700: '#39393f',
				800: '#242529',
				900: '#191b1f',
				950: '#101215',
				960: '#565658',
			},
			blue: {
				300: '#3D8BFD',
				500: '#0D6EFD',
				600: '#0A58CA',
				700: '#084298',
				800: '#052C65',
				900: '#031633',
				950: '#000000',
			},
			red: {
				100: '#FF0000',
				200: '#480607',
				300: '#900020',
				400: '#4F0014',
			},
			green: {
				100: '#454B1B',
				200: '#097969',
				300: '#50C878',
				400: '#4F7942',
				500: '#228B22',
				600: '#008000',
			},
		},

		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},

			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
				pxt: '1rem',
				slider: '1.9rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#a6ce47',
					},
				},

				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.par.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
