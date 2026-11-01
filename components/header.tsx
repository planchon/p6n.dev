import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { site } from "@/lib/site";

export const Header = () => {
	return (
		<header className="relative">
			<div className="flex md:flex-row flex-col items-center p-4 justify-between">
				<div className="w-full flex items-center gap-4 select-none">
					<Image
						src="/pp.png"
						alt="Paul Planchon"
						width={54}
						height={54}
						className="rounded-full"
					/>
					<div className="flex flex-col select-none">
						<h1 className="font-mackinac text-xl font-bold text-text-color">
							paul planchon
						</h1>
						<p className="font-fragment-mono text-xs font-medium text-text-color">
							product minded engineer
						</p>
					</div>
				</div>
				<div className="flex md:flex-col pt-4 md:pt-0 flex-row md:w-fit w-full justify-between gap-2 select-none">
					<a
						className="flex items-center justify-end gap-2 text-text-color"
						href={site.links.github}
						rel="me"
					>
						<FaGithub className="text-text-color" />
						github
					</a>
					<a
						className="flex items-center justify-end gap-2 text-text-color"
						href={site.links.twitter}
						rel="me"
					>
						<FaTwitter className="text-text-color" />
						twitter
					</a>
				</div>
			</div>
		</header>
	);
};
