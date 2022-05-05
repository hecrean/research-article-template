/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema/schema.graphql',
	sourceGlob: 'src/**/*.svelte',
	module: 'esm',
	framework: 'kit',
	apiUrl: 'https://api-eu-west-2.graphcms.com/v2/cl1twkcva9mdr01xo34f5fi8b/master',
	scalars: {
		DateTime: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			}
		}
	}
};

export default config;
