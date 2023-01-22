/**
 * Calculates a rem value for spacing from spacing in pixels
 * @param {number} px spacing in pixels
 * @returns {string} spacing in rem with `rem` suffix, e.g. `2.125rem`
 */
const rem = (px) => `${px / 16}rem`;

module.exports = {
	extend: {
		colors: {
			// TODO: Move the 400 colours (main colour of the respective palette) further down the list
			// and have a more gradual fade into them from the start of the palette - for both 'primary' and 'secondary'.
			primary: {
				50: '#FFF5D1',
				100: '#FFE8A0',
				200: '#FFD98E',
				300: '#F5C98B',
				400: '#F5A623',
				500: '#F57F1E',
				600: '#F55A14',
				700: '#F52D0E',
				800: '#F5001A',
				900: '#F50000'
			},
			secondary: {
				50: '#FFEBE9',
				100: '#FFD9D6',
				200: '#FFC6C4',
				300: '#FFAFAE',
				400: '#E5293E',
				500: '#CC1C2F',
				600: '#B31111',
				700: '#99050A',
				800: '#7F0000',
				900: '#660000'
				// Also add #C1413A into the mix
			},
			background: {
				50: '#F1F1F1',
				100: '#E5E5E5',
				200: '#D9D9D9',
				300: '#CCCCCC',
				400: '#BFBFBF',
				500: '#B3B3B3',
				600: '#A6A6A6',
				700: '#999999',
				800: '#8C8C8C',
				900: '#666666'
			}
		},
		spacing: {
			// Provide spacing for large elements
			sm: rem(640),
			md: rem(768),
			lg: rem(1024),
			xl: rem(1280),
			'2xl': rem(1536),

			// Extend additional spacings used more than once
			// the ones used only once are done with JIT
			//
			// NOTE:  For consistency, all spacing extensions should be keyed the same way tailwind does for defaults:
			//
			//        spacingKey = numPixels / 4
			//
			// This will prevent confusion and duplication
			0.5: rem(2),
			1.5: rem(6),
			1.75: rem(7),
			2.25: rem(9),
			2.5: rem(10),
			3.25: rem(13),
			4.25: rem(17),
			6.25: rem(25)
		}
	}
};
