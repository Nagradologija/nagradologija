/**
 * Calculates a rem value for spacing from spacing in pixels
 * @param {number} px spacing in pixels
 * @returns {string} spacing in rem with `rem` suffix, e.g. `2.125rem`
 * @TODO A bit redundant, innit?
 */
const rem = (px) => `${px / 16}rem`;

module.exports = [
	require('@tailwindcss/forms'),
	function ({ addUtilities, addComponents }) {
		addUtilities({
			'.scrollbar-hide': {
				'&::--webkit-scrollbar': {
					display: 'none'
				},
				'-ms-overflow-style': 'none',
				'scrollbar-width': 'none'
			}
		});
		addComponents({
			'.center-absolute': {
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			},
			'.content-container': {
				width: '100%',
				maxWidth: rem(1150),
				margin: '0 auto',
				'@screen 3xl': {
					maxWidth: rem(1260)
				},
				'@screen 4xl': {
					maxWidth: rem(1644)
				}
			}
		});
	}
];
