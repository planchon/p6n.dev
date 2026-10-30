import Image from "next/image";
import { cn } from "@/lib/utils";

type BeaubonProps = {
	className?: string;
};

export const Beaubon = ({ className }: BeaubonProps) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Image
				src="/beaubon.png"
				alt="beaubon"
				width={22}
				height={22}
				className="rounded-sm grayscale hover:grayscale-0"
			/>
			<p className="text-text-color text-[15px] font-medium">Guide Beaubon</p>
		</div>
	);
};
