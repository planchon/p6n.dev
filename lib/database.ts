import { Client, type PageObjectResponse } from "@notionhq/client";

if (process.env.NOTION_API_TOKEN == null) {
	throw new Error("NOTION_API_TOKEN is not set");
}

const notion = new Client({
	auth: process.env.NOTION_API_TOKEN,
});

/**
 * Get Notion database
 * @param databaseId ID of the collection to query
 * @returns A list of published posts from the collection
 */
export const getDatabase = async (databaseId: string) => {
	let startCursor: string | undefined;
	const results = [];

	do {
		const response = await notion.dataSources.query({
			data_source_id: databaseId,
		});

		results.push(...(response.results as PageObjectResponse[]));
		startCursor = response.next_cursor ?? undefined;
	} while (startCursor != null);

	const filteredResults = results.filter(
		(r) =>
			r.object === "page" &&
			// @ts-expect-error
			r.properties["show p6n"].checkbox &&
			// @ts-expect-error
			r.properties.Published.checkbox,
	);

	return filteredResults;
};
