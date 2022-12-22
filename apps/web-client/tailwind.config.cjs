const theme = require('../../pkg/scaffold/tailwind.theme');
const plugins = require('../../pkg/scaffold/tailwind.plugins');

module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// Go through other @nagradolgija/* dependencies when
		// looking for templates
		'node_modules/@nagradolgija/**/*.{html,js,svelte,ts}'
	],
	theme,
	plugins
};
