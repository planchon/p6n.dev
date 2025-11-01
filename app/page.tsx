import { GiWaveSurfer } from "react-icons/gi";
import { Biarritz } from "@/components/biarritz";
import { Glenans } from "@/components/glenans";
import { HorizontalLine } from "@/components/h-line";
import { Header } from "@/components/header";
import { Paris } from "@/components/paris";
import Dither from "@/components/shaders/wave";
import { Stratumn } from "@/components/stratumn";
import { VirtualLine } from "@/components/v-line";

export default function Home() {
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
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 left-0 h-[50px] z-50 pointer-events-none blur-gradient-bottom" />
		</div>
	);
}
