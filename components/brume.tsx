import Image from "next/image";
import { cn } from "@/lib/utils";

type BrumeProps = {
	className?: string;
};

export const Brume = ({ className }: BrumeProps) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Image
				src="/brume.png"
				alt="brume"
				width={22}
				height={22}
				className="rounded-sm"
			/>
			<p className="text-text-color text-[15px] font-medium">BrumeCloud</p>
		</div>
	);
};
