export type QueryAuthors = {
	readonly input: null;
	readonly result: QueryAuthors$result | undefined;
};

export type QueryAuthors$result = {
	readonly authors: {
		readonly id: string;
		readonly biography: string | null;
		readonly createdAt: Date;
	}[];
};

export type QueryAuthors$afterLoad = {
	readonly data: {
		readonly QueryAuthors: QueryAuthors$result;
	};
};
