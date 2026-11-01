import { getBlogPosts } from "@/lib/blog";
import { SITE_URL, site } from "@/lib/site";

// Plain-markdown version of the home page for LLMs and agents
// (https://llmstxt.org). Re-generated at most once an hour, like the page.
export const revalidate = 3600;

export async function GET() {
	const posts = await getBlogPosts();

	const body = `# ${site.name} (${site.handle})

> ${site.description}

Hello, I'm Paul, a software engineer from Biarritz, currently working in Paris at [Voodoo](https://voodoo.io) on [Wizz](https://wizzapp.com), a dating app. I'm a backend & infra engineer: we run a B2C app at very large scale, with 500k daily active users and 5M monthly active users, mostly on MongoDB and Cloud Run.

Before that, I worked on [Stratumn](https://stratumn.com) at [Sia Partners](https://sia-partners.com). I led the engineering team: we optimized the million-LOC codebase, improved the CI/CD, and maintained all our Kubernetes clusters on AWS.

I love going hardcore on subjects, obsessing over details and understanding how things work. In my free time I sail with friends or teach sailing at [Les Glénans](https://www.glenans.asso.fr/), surf, and shoot film with a Canon AE-1.

## Projects

- **Wizz @ Voodoo: backend & infra of a 5M MAU dating app.** I work on user-facing features from the backend side. The app serves 500k DAU and 5M MAU on 7 MongoDB clusters, around ten Redis databases and 60 microservices on Cloud Run. Stack: MongoDB, Redis, Google Cloud Run.
- **Stratumn: 100x performance gain on core requests.** Total rewrite of the core query engine to better index JSONB data using GIN indexes and Postgres fine-tuning. Complete redesign of the RLS authorization layer. Stack: Postgres, PostGraphile, Node.js. Write-up: [The journey from request timing out to taking 250 ms](https://blog.p6n.dev/p/the-journey-from-request-timing-out-to-taking-250-ms)
- **Stratumn: reduce CI/CD time by 80%.** Moved from one repository per project to a very large monorepo, fine-tuned the CI pipeline down to the runners, and adopted GitOps for CD (Helm). Stack: GitLab, Docker, Helm.
- **[BrumeCloud](https://github.com/brumecloud/brume): no-code open source devops platform.** A fully automated devops platform to deploy applications to any cloud provider following best practices. The Vercel or Railway experience, on your own infrastructure. Stack: Rust, DuckDB.
- **Guide Beaubon: Parisian food guide app.** A Parisian food guide built as a mobile app with Expo. Above all, an experiment to understand growth. Stack: Expo, React Native.

## Blog

${posts.map((post) => `- [${post.title}](${post.url})`).join("\n")}

## Links

- [Website](${SITE_URL})
- [Blog](${site.links.blog})
- [GitHub](${site.links.github})
- [X / Twitter](${site.links.x})
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
