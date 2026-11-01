import type { Metadata } from "next";
import { GiWaveSurfer } from "react-icons/gi";
import { Biarritz } from "@/components/biarritz";
import { Blog, BlogTitle } from "@/components/blog";
import { Brume } from "@/components/brume";
import { Glenans } from "@/components/glenans";
import { HorizontalLine } from "@/components/h-line";
import { Header } from "@/components/header";
import { Paris } from "@/components/paris";
import {
	ProjectBody,
	ProjectDescription,
	ProjectHeader,
	ProjectHeaderText,
	ProjectTechStack,
} from "@/components/project";
import Dither from "@/components/shaders/wave";
import { Stratumn } from "@/components/stratumn";
import { Voodoo } from "@/components/voodoo";
import { Wizz } from "@/components/wizz";
import { Beaubon } from "@/components/beaubon";
import { Dax } from "@/components/dax";
import {
	SiBun,
	SiDuckdb,
	SiExpo,
	SiGooglecloud,
	SiMongodb,
	SiReact,
	SiRedis,
	SiRust,
	SiTrpc,
} from "react-icons/si";
import { Docker } from "@/components/tech/docker";
import { Gitlab } from "@/components/tech/gitlab";
import { Helm } from "@/components/tech/helm";
import { Node } from "@/components/tech/node";
import { Postgraphile } from "@/components/tech/postgraphile";
import { Postgres } from "@/components/tech/postgres";
import { VirtualLine } from "@/components/v-line";
import { getBlogPosts } from "@/lib/blog";
import { baseOpenGraph, SITE_URL, site } from "@/lib/site";

// Re-render at most once an hour so new blog posts show up without a deploy.
export const revalidate = 3600;

export const metadata: Metadata = {
	alternates: { canonical: "/" },
	openGraph: { ...baseOpenGraph, url: "/" },
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: site.handle,
			alternateName: [site.name, "p6n.dev"],
			inLanguage: "en",
			publisher: { "@id": `${SITE_URL}/#person` },
		},
		{
			"@type": "ProfilePage",
			"@id": `${SITE_URL}/#profilepage`,
			url: SITE_URL,
			name: site.title,
			description: site.description,
			inLanguage: "en",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			mainEntity: { "@id": `${SITE_URL}/#person` },
		},
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: site.name,
			alternateName: site.handle,
			url: SITE_URL,
			image: `${SITE_URL}${site.image}`,
			jobTitle: site.jobTitle,
			description: site.description,
			worksFor: {
				"@type": "Organization",
				name: site.employer.name,
				url: site.employer.url,
			},
			homeLocation: { "@type": "Place", name: site.location },
			knowsAbout: site.knowsAbout,
			sameAs: [
				site.links.github,
				site.links.twitter,
				site.links.x,
				site.links.blog,
			],
		},
	],
};

export default async function Home() {
	const posts = await getBlogPosts();
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
				}}
			/>
			<div className="fixed top-0 left-0 h-[50px] md:h-[10px] z-50 pointer-events-none blur-gradient-top" />
			<div className="w-full min-h-screen relative overflow-x-hidden">
				<div className="inset-0 absolute max-w-[650px] mx-auto max-[690px]:mx-4 pointer-events-none">
					<VirtualLine direction="left" />
					<VirtualLine direction="right" />
				</div>
				<main className="max-w-[650px] mx-auto w-full max-[690px]:px-4 md:py-[150px] py-[25px] relative">
					<div className="relative">
						<HorizontalLine direction="top" />
						<Header />
						<HorizontalLine className="relative" />
						<section aria-label="About" className="px-4 pt-4">
							<p className="text-text-color">
								hello i'm paul, a software engineer from{" "}
								<a
									href="https://www.google.com/maps/place/Biarritz,+France"
									className="hover:underline"
								>
									<Biarritz className="inline-block w-5 h-5 mr-1 mb-1 fill-text-color" />
									Biarritz
								</a>
								, currently working in{" "}
								<a
									href="https://www.google.com/maps/place/Paris,+France"
									className="hover:underline"
								>
									<Paris className="inline-block w-5 h-5 mr-1 mb-1 fill-text-color" />
									Paris
								</a>{" "}
								at{" "}
								<a href="https://voodoo.io" className="hover:underline">
									<Voodoo className="inline-block h-[12px] w-auto mb-[3px] fill-text-color" />
								</a>{" "}
								on{" "}
								<a href="https://wizzapp.com" className="hover:underline">
									<Wizz className="inline-block h-[11px] w-auto mb-[3px] fill-text-color" />
								</a>
								, a dating app. i'm a backend & infra engineer : we run a B2C
								app at very large scale, with 500k daily active users and 5M
								monthly active users, mostly on MongoDB and Cloud Run.
							</p>
							<p className="pt-2 text-text-color">
								before that, i worked on{" "}
								<a href="https://stratumn.com" className="hover:underline">
									<Stratumn className="inline-block h-[15px] w-auto mb-1 fill-text-color" />
								</a>{" "}
								at <a href="https://sia-partners.com">Sia Partners</a>. I led the
								engineering team : we optimized the million LOC codebase,
								improved the CICD, and maintained all our k8s clusters on AWS.
							</p>
							<p className="pt-2 text-text-color">
								i love going hardcore on subjects, obsessing over details and
								understanding how things work.
							</p>
							<p className="pt-2 text-text-color">
								on my free time, i love to sail with friends or teaching it at{" "}
								<a
									href="https://www.glenans.asso.fr/"
									className="hover:underline"
								>
									<Glenans className="inline-block w-5 h-5 mr-1 mb-1 fill-text-color" />
									Les Glénans
								</a>
								.
								<br />i also{" "}
								<GiWaveSurfer className="inline-block w-5 h-5 mr-1 mb-1 fill-text-color" />
								surf and try to use my canon AE-1 camera when i can.
							</p>
							<p className="pt-2 text-text-color">
								two things i buy too much and never use: books and domain names.
							</p>
						</section>
						<Dither
							waveSpeed={0.05}
							waveFrequency={3}
							waveAmplitude={0.3}
							waveColor={[0.9, 0.9, 0.9]}
							colorNum={4}
							pixelSize={2}
							disableAnimation={false}
							enableMouseInteraction={true}
							mouseRadius={1}
							className="h-full w-full p-4"
						/>
						<HorizontalLine className="relative" />
						<h2
							id="projects"
							className="w-full py-2 px-4 font-mackinac text-lg text-text-color select-none"
						>
							Projects
						</h2>
						<HorizontalLine className="relative" />
						<section aria-labelledby="projects" className="p-4">
							<div className="flex items-center gap-2 mb-1 text-text-color">
								<a href="https://wizzapp.com" className="flex">
									<Wizz className="inline-block h-[13px] w-auto fill-text-color" />
								</a>
								<span className="text-[15px] leading-none">@</span>
								<a href="https://voodoo.io" className="flex">
									<Voodoo className="inline-block h-[13px] w-auto fill-text-color" />
								</a>
							</div>
							<ProjectBody>
								<ProjectHeader>
									<ProjectHeaderText>
										Backend & infra of a 5M MAU dating app
									</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									We build a dating app, and I work on user-facing features from
									the backend side. The app serves 500k DAU and 5M MAU on 7
									MongoDB clusters, around ten Redis databases and 60
									microservices on Cloud Run.
								</ProjectDescription>
								<ProjectTechStack>
									<SiMongodb
										title="MongoDB"
										color="#47A248"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<SiRedis
										title="Redis"
										color="#FF4438"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<SiGooglecloud
										title="Cloud Run"
										color="#4285F4"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<div className="flex items-center justify-between gap-2 pt-6">
								<a href="https://stratumn.com" className="flex">
									<Stratumn className="inline-block h-[15px] w-auto mb-1 fill-text-color" />
								</a>
							</div>
							<ProjectBody>
								<ProjectHeader
									href="https://blog.p6n.dev/p/the-journey-from-request-timing-out-to-taking-250-ms"
									tooltip="Read my blog post about it"
								>
									<ProjectHeaderText>
										100x performance gain on core requests
									</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									Total rewrite of the core query engine to better index JSONb
									data using GIN indexes and postgres fine tuning. Complete
									redesign of the RLS authorization layer.
								</ProjectDescription>
								<ProjectTechStack>
									<Postgres
										title="Postgres"
										className="inline-block w-7 h-7 m-1 grayscale hover:grayscale-0"
									/>
									<Postgraphile
										title="Postgraphile"
										className="inline-block w-7 h-7 m-1 grayscale hover:grayscale-0"
									/>
									<Node
										title="Node"
										className="inline-block w-7 h-7 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<ProjectBody className="pt-4">
								<ProjectHeader>
									<ProjectHeaderText>Reduce CI/CD time by 80%</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									Change our git strategy from single repository per project to
									a very large monorepo. Fine tuning of the CI pipeline down to
									the runners. Adoption of GitOps in CD (using helm).
								</ProjectDescription>
								<ProjectTechStack>
									<Gitlab
										title="Gitlab"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<Docker
										title="Docker"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<Helm
										title="Helm"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<div className="flex items-center justify-between gap-2 pt-6">
								<a href="https://brume.dev" className="hover:underline">
									<Brume />
								</a>
							</div>
							<ProjectBody className="pt-3">
								<ProjectHeader
									href="https://github.com/brumecloud/brume"
									tooltip="Go to the repository"
								>
									<ProjectHeaderText>
										No-code open source devops platform
									</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									Brume is a fully automated devops platform allowing you to
									deploy your applications to any cloud provider following the
									best practices without any hassle. Vercel or Railway
									experience, but on your own infrastructure.
								</ProjectDescription>
								<ProjectTechStack>
									<SiRust
										title="Rust"
										className="inline-block w-6 h-6 m-1 text-text-color opacity-50 hover:opacity-100"
									/>
									<SiDuckdb
										title="DuckDB"
										className="inline-block w-6 h-6 m-1 text-text-color opacity-50 hover:opacity-100"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<div className="flex items-center justify-between gap-2 pt-6">
								<a href="https://beaubon.guide" className="hover:underline">
									<Beaubon />
								</a>
							</div>
							<ProjectBody className="pt-3">
								<ProjectHeader>
									<ProjectHeaderText>Parisian food guide app</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									Guide Beaubon is a Parisian food guide, built as a mobile app
									with Expo. Above all, it's an experiment to understand growth.
								</ProjectDescription>
								<ProjectTechStack>
									<SiExpo
										title="Expo"
										className="inline-block w-6 h-6 m-1 text-text-color opacity-50 hover:opacity-100"
									/>
									<SiReact
										title="React Native"
										color="#61DAFB"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<div className="flex items-center justify-between gap-2 pt-6">
								<Dax />
							</div>
							<ProjectBody className="pt-3">
								<ProjectHeader>
									<ProjectHeaderText>
										Personal coach app for long-term goals
									</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription>
									Dax understands your long-term goals (lose weight, do more
									sport, read more, start a business) and prepares custom
									programs to help you reach them. Currently in alpha.
								</ProjectDescription>
								<ProjectTechStack>
									<SiExpo
										title="Expo"
										className="inline-block w-6 h-6 m-1 text-text-color opacity-50 hover:opacity-100"
									/>
									<SiTrpc
										title="tRPC"
										color="#2596BE"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<SiMongodb
										title="MongoDB"
										color="#47A248"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<SiBun
										title="Bun"
										className="inline-block w-6 h-6 m-1 text-text-color opacity-50 hover:opacity-100"
									/>
								</ProjectTechStack>
							</ProjectBody>
						</section>
						<HorizontalLine className="relative" />
						<h2
							id="blog"
							className="w-full py-2 px-4 font-mackinac text-lg text-text-color select-none"
						>
							Blog
						</h2>
						<HorizontalLine className="relative" />
						<section aria-labelledby="blog" className="flex flex-col gap-4 p-4">
							{posts.map((post) => (
								<Blog
									href={post.url}
									key={post.id}
									className="flex flex-row items-center justify-between gap-2"
								>
									<BlogTitle>{post.title}</BlogTitle>
								</Blog>
							))}
						</section>
					</div>
				</main>
			</div>
			<div className="fixed bottom-0 left-0 h-[50px] z-50 pointer-events-none blur-gradient-bottom" />
		</div>
	);
}
