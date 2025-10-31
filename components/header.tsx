import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Header = () => {
	return (
		<div className="relative">
			<div className="flex items-center p-4 justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="/pp.png"
						alt="logo"
						width={54}
						height={54}
						className="rounded-full"
					/>
					<div className="flex flex-col gap-2">
						<h1 className="font-mackinac text-xl font-bold">p6n.dev</h1>
						<h3 className="font-fragment-mono text-sm font-medium">
							curious engineer
						</h3>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-2">
					<div className="flex items-center justify-end gap-2">
						<FaGithub />
						github.com
					</div>
					<div className="flex items-center justify-end gap-2">
						<FaTwitter />
						twitter.com
					</div>
				</div>
			</div>
		</div>
	);
};
