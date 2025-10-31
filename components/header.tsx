import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Header = () => {
	return (
		<div className="relative">
			<div className="flex md:flex-row flex-col items-center p-4 justify-between">
				<div className="w-full flex items-center gap-4">
					<Image
						src="/pp.png"
						alt="logo"
						width={54}
						height={54}
						className="rounded-full grayscale hover:grayscale-0"
					/>
					<div className="flex flex-col gap-2">
						<h1 className="font-mackinac text-xl font-bold text-text-color">
							p6n.dev
						</h1>
						<h3 className="font-fragment-mono text-sm font-medium text-text-color">
							curious engineer
						</h3>
					</div>
				</div>
				<div className="flex md:flex-col pt-4 md:pt-0 flex-row md:w-fit w-full justify-between gap-2">
					<a
						className="flex items-center justify-end gap-2 text-text-color"
						href="https://github.com/planchon"
					>
						<FaGithub className="text-text-color" />
						github
					</a>
					<a
						className="flex items-center justify-end gap-2 text-text-color"
						href="https://twitter.com/pplanchon_"
					>
						<FaTwitter className="text-text-color" />
						twitter
					</a>
				</div>
			</div>
		</div>
	);
};
