import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Everything is public: search engines and AI agents/crawlers (GPTBot,
// ClaudeBot, PerplexityBot, Google-Extended, …) are all welcome.
// Preview deployments are kept out of the index by Vercel, which sends
// `X-Robots-Tag: noindex` on every non-production URL.
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
