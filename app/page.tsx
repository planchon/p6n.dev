import { GiWaveSurfer } from "react-icons/gi";
import { Biarritz } from "@/components/biarritz";
import { Blog, BlogTitle } from "@/components/blog";
import { Brume } from "@/components/brume";
import { Clickhouse } from "@/components/clickhouse";
import { Convex } from "@/components/convex";
import { Glenans } from "@/components/glenans";
import { Go } from "@/components/go";
import { HorizontalLine } from "@/components/h-line";
import { Header } from "@/components/header";
import { Karnet } from "@/components/karnet";
import { Next } from "@/components/next";
import { OpenRouter } from "@/components/open-router";
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
import { Docker } from "@/components/tech/docker";
import { Gitlab } from "@/components/tech/gitlab";
import { Helm } from "@/components/tech/helm";
import { Node } from "@/components/tech/node";
import { Postgraphile } from "@/components/tech/postgraphile";
import { Postgres } from "@/components/tech/postgres";
import { Temporal } from "@/components/temporal";
import { VirtualLine } from "@/components/v-line";
import { getDatabase } from "@/lib/database";

export default async function Home() {
	const database = await getDatabase("eec54a10-b843-4a1a-8baa-cb42fe2b474e");
	return (
		<div>
			<div className="fixed top-0 left-0 h-[50px] md:h-[10px] z-50 pointer-events-none blur-gradient-top" />
			<div className="w-full min-h-screen relative overflow-x-hidden">
				<div className="inset-0 absolute max-w-[650px] mx-auto max-[690px]:mx-4 pointer-events-none">
					<VirtualLine direction="left" />
					<VirtualLine direction="right" />
				</div>
				<div className="max-w-[650px] mx-auto w-full max-[690px]:px-4 md:py-[150px] py-[25px] relative">
					<div className="relative">
						<HorizontalLine direction="top" />
						<Header />
						<HorizontalLine className="relative" />
						<div className="px-4 pt-4">
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
								on{" "}
								<a href="https://stratumn.com" className="hover:underline">
									<Stratumn className="inline-block h-[15px] w-auto mb-1 fill-text-color" />
								</a>{" "}
								at <a href="https://sia-partners.com">Sia Partners</a>. I lead
								the engineering team : we optimize the million LOC codebase,
								improve the CICD, and maintain all our k8s clusters on AWS.
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
						</div>
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
						<h2 className="w-full py-2 px-4 font-mackinac text-lg text-text-color select-none">
							Projects
						</h2>
						<HorizontalLine className="relative" />
						<div className="p-4">
							<div className="flex items-center justify-between gap-2">
								<Stratumn className="inline-block h-[15px] w-auto mb-1 fill-text-color" />
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
								<ProjectHeader
									href="https://stratumn.com"
									tooltip="Read my blog post about it"
								>
									<ProjectHeaderText>
										Reduce CI/CD time by 80%
									</ProjectHeaderText>
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
								<Brume />
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
									<Go
										title="Go"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<Temporal
										title="Temporal"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
									<Clickhouse
										title="Clickhouse"
										className="inline-block w-6 h-6 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
							<div className="flex items-center justify-between gap-2 pt-6">
								<Karnet className="inline-block h-[17px] w-auto fill-text-color" />
							</div>
							<ProjectBody className="pt-3">
								<ProjectHeader
									href="https://github.com/planchon/karnet"
									tooltip="Go to the repository"
								>
									<ProjectHeaderText>
										Superfast, multi-model/modal LLM chat
									</ProjectHeaderText>
								</ProjectHeader>
								<ProjectDescription className="mb-1">
									I was tired of the shitty UI/UX of the major LLM providers. I
									was missing a great keyboard only chat, fast and smooth ui. So
									I built my own using Convex, Next.js and OpenRouter.
								</ProjectDescription>
								<ProjectTechStack>
									<Convex
										title="Convex"
										className="inline-block w-5 h-5 m-1 grayscale hover:grayscale-0"
									/>
									<OpenRouter
										title="OpenRouter"
										className="inline-block w-5 h-5 m-1 grayscale hover:grayscale-0"
									/>
									<Next
										title="Next"
										className="inline-block w-5 h-5 m-1 grayscale hover:grayscale-0"
									/>
								</ProjectTechStack>
							</ProjectBody>
						</div>
						<HorizontalLine className="relative" />
						<h2 className="w-full py-2 px-4 font-mackinac text-lg text-text-color select-none">
							Blog
						</h2>
						<HorizontalLine className="relative" />
						<div className="flex flex-col gap-4 p-4">
							{database.map(async (post) => (
								<Blog
									// @ts-expect-error
									href={`https://blog.p6n.dev/p/${post.properties.Slug.rich_text[0].plain_text}`}
									key={post.id}
									className="flex flex-row items-center justify-between gap-2"
								>
									<BlogTitle>
										{/* @ts-ignore */}
										{post.properties.Page.title[0].plain_text}
									</BlogTitle>
								</Blog>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 left-0 h-[50px] z-50 pointer-events-none blur-gradient-bottom" />
		</div>
	);
}
