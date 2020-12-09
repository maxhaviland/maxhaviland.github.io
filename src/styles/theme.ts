import { theme, DefaultTheme, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	...theme,
	fonts: {
		body: 'Roboto, system-ui, sans-serif',
		heading: 'Roboto, system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
	components: {
		Link: {
			baseStyle: {
				color: 'secondary',
			},
		},
	},
	colors: {
		...theme.colors,
		primary: '#1A202C',
		secondary: '#B794F4',
		button: '#6B46C1',
	},
});

export default customTheme;
