import Image from "next/image";
import { cn } from "@/lib/utils";

type DaxProps = {
	className?: string;
};

export const Dax = ({ className }: DaxProps) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Image
				src="/dax.png"
				alt="dax"
				width={22}
				height={22}
				className="rounded-sm grayscale hover:grayscale-0"
			/>
			<p className="text-text-color text-[15px] font-medium">Dax</p>
		</div>
	);
};
