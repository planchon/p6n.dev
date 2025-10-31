import { cn } from "@/utils/cn";

export const HorizontalLine = ({
	direction,
	className,
}: {
	direction?: "top" | "bottom";
	className?: string;
}) => {
	return (
		<svg
			className={cn(
				className,
				"pointer-events-none z-10 text-[#CBCBCB] w-full",
				direction === "top" ? "absolute top-0" : "",
				direction === "bottom" ? "absolute bottom-0" : "",
			)}
			width="100%"
			height="1"
			viewBox="0 0 100 1"
			preserveAspectRatio="none"
			style={{ left: "50%", transform: "translateX(-50%)", width: "100vw" }}
		>
			<title>Horizontal Line</title>
			<line
				x1="0"
				y1="0.5"
				x2="100"
				y2="0.5"
				stroke="currentColor"
				strokeWidth="1"
				strokeDasharray="6 6"
				vectorEffect="non-scaling-stroke"
			></line>
		</svg>
	);
};
