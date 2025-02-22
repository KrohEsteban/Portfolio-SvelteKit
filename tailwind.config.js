const config = {
	content: ['./src/**/*.{html,js,svelte,svx}'],
	theme: {
		extend: {
			colors: {
				'gris-claro': '#d4d3d3',
				'gris-oscuro': '#272b30',
				'gris-intermedio': '#3A3F44',
				amarillo: '#fbbf24'
			},
			fontFamily: {
				DancingScript: ['DancingScript', 'italic'],
				OpenSans: ['OpenSans'],
				KaushanScript: ['KaushanScript']
			}
		},
		keyframes: {
			'open-menu': {
				'0%': { transform: 'scaleY(0)' },
				'80%': { transform: 'scaleY(1.1)' },
				'100%': { transform: 'scaleY(1)' }
			},
			'close-menu': {
				'0%': { transform: 'scaleY(1)' },
				'100%': { transform: 'scaleY(0)' }
			}
		},
		animation: {
			'open-menu': 'open-menu 0.5s ease-in-out forwards',
			'close-menu': 'close-menu 0.5s ease-in-out forwards'
		}
	},
	plugins: []
};

export default config;
