import { cn } from "@/lib/utils";

type RewindProps = {
	className?: string;
};

export const Rewind = ({ className }: RewindProps) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				width={22}
				height={22}
				aria-hidden="true"
				className="grayscale hover:grayscale-0"
			>
				<rect width="64" height="64" rx="14" fill="#059669" />
				<path d="M33 20v24L15 32z M51 20v24L33 32z" fill="#ffffff" />
			</svg>
			<p className="text-text-color text-[15px] font-medium">Rewind</p>
		</div>
	);
};
