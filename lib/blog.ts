import type { PageObjectResponse } from "@notionhq/client";
import { getDatabase } from "@/lib/database";
import { BLOG_DATA_SOURCE_ID, site } from "@/lib/site";

export type BlogPost = {
	id: string;
	title: string;
	url: string;
};

const plainText = (property: PageObjectResponse["properties"][string]) => {
	if (property?.type === "title") {
		return property.title.map((t) => t.plain_text).join("");
	}
	if (property?.type === "rich_text") {
		return property.rich_text.map((t) => t.plain_text).join("");
	}
	return "";
};

/** Published posts flagged "show p6n" in Notion, linking to blog.p6n.dev. */
export const getBlogPosts = async (): Promise<BlogPost[]> => {
	const pages = await getDatabase(BLOG_DATA_SOURCE_ID);

	return pages.flatMap((page) => {
		const title = plainText(page.properties.Page).trim();
		const slug = plainText(page.properties.Slug).trim();
		if (!title || !slug) return [];
		return [{ id: page.id, title, url: `${site.links.blog}/p/${slug}` }];
	});
};
