import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

export default {
	kit: {
		appDir: "app",
		adapter: adapter()
	  },

	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};