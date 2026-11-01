import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Blog posts live on blog.p6n.dev, which serves its own sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
