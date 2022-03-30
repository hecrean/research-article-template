/* jshint esversion: 11 */

// Imports
import preprocess from 'svelte-preprocess';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Adapters
import vercelAdapter from '@sveltejs/adapter-vercel';

// Custom require function as replacement for the require from the commonJS in ES Module

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

const options = JSON.stringify(process.env.OPTIONS || '{}');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],

	kit: {
		adapter: vercelAdapter(options),
		vite: () => ({
			resolve: {
				alias: {
					$stores: resolve(__dirname, './src/stores'),
					$components: resolve(__dirname, './src/lib/components'),
					$layouts: resolve(__dirname, './src/lib/layouts'),
					$models: resolve(__dirname, './src/lib/models'),
					$data: resolve(__dirname, './src/lib/data'),
					$core: resolve(__dirname, './src/lib/core'),
					$utils: resolve(__dirname, './src/lib/utils'),
					$env: resolve(__dirname, './src/env')
				}
			},
			envPrefix: ['VITE_', 'SVELTEKIT_STARTER_'],
			plugins: []
		})
	}
};

export default config;
