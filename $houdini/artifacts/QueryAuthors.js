export default {
	name: 'QueryAuthors',
	kind: 'HoudiniQuery',
	hash: 'c87642ac20f4ea6ef36741b06c444f44720eaf214d1a06bd812f86ba2c1424c6',

	raw: `query QueryAuthors {
  authors {
    id
    biography
    createdAt
  }
}
`,

	rootType: 'Query',

	selection: {
		authors: {
			type: 'Author',
			keyRaw: 'authors',

			fields: {
				id: {
					type: 'ID',
					keyRaw: 'id'
				},

				biography: {
					type: 'String',
					keyRaw: 'biography',
					nullable: true
				},

				createdAt: {
					type: 'DateTime',
					keyRaw: 'createdAt'
				}
			}
		}
	},

	policy: 'NetworkOnly',
	partial: false
};
