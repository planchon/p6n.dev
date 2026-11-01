import type { Metadata } from "next";

/**
 * Single source of truth for the site identity, used by the metadata,
 * the structured data (JSON-LD), the sitemap, robots.txt and llms.txt.
 */

// Canonical origin. Every other host redirects here: p6n.dev via the Vercel
// domain settings, planchon.io and p6n.vercel.app via next.config.ts.
export const SITE_URL = "https://www.p6n.dev";

export const site = {
	url: SITE_URL,
	name: "Paul Planchon",
	handle: "p6n",
	title: "Paul Planchon · backend & infra engineer",
	description:
		"Paul Planchon (p6n), product-minded backend & infra engineer in Paris. Scaling Wizz, a 5M MAU dating app, at Voodoo. Projects, experience and blog.",
	jobTitle: "Backend & Infrastructure Engineer",
	locale: "en_US",
	image: "/pp.png",
	twitter: "@pplanchon_",
	links: {
		github: "https://github.com/planchon",
		twitter: "https://twitter.com/pplanchon_",
		x: "https://x.com/pplanchon_",
		blog: "https://blog.p6n.dev",
	},
	employer: { name: "Voodoo", url: "https://voodoo.io" },
	location: "Paris, France",
	knowsAbout: [
		"Backend engineering",
		"Infrastructure",
		"Distributed systems",
		"MongoDB",
		"PostgreSQL",
		"Redis",
		"Kubernetes",
		"Google Cloud Run",
		"AWS",
		"CI/CD",
		"Rust",
		"TypeScript",
	],
} as const;

// Shared Open Graph tags. Next.js merges metadata shallowly, so a page that
// sets its own `openGraph` (e.g. for `url`) must spread these back in.
export const baseOpenGraph = {
	type: "profile",
	firstName: "Paul",
	lastName: "Planchon",
	username: site.handle,
	siteName: site.handle,
	title: site.title,
	description: site.description,
	locale: site.locale,
} satisfies Metadata["openGraph"];

// Notion data source that holds the blog posts listed on the home page.
export const BLOG_DATA_SOURCE_ID = "eec54a10-b843-4a1a-8baa-cb42fe2b474e";
