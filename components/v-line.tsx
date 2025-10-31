import { cn } from "@/utils/cn";

export const VirtualLine = ({ direction }: { direction: "left" | "right" }) => {
	return (
		<svg
			className={cn(
				"absolute pointer-events-none z-10 text-[#CBCBCB]",
				direction === "left" ? "left-0" : "right-0",
				"top-0 h-full",
			)}
			width={1}
			height="100%"
			viewBox="0 0 1 100"
			preserveAspectRatio="none"
			style={{ width: "1px" }}
		>
			<title>Virtual Line</title>
			<line
				x1="0.5"
				y1="0"
				x2="0.5"
				y2="100"
				stroke="currentColor"
				strokeWidth="1"
				strokeDasharray="6 6"
				vectorEffect="non-scaling-stroke"
			></line>
		</svg>
	);
};
