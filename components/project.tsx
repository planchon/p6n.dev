import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/global-tooltip";

export const ProjectBody = ({
	children,
	className,
}: React.ComponentProps<"div">) => {
	return (
		<div
			className={cn("flex items-center justify-between gap-2 pt-2", className)}
		>
			<div className="w-full">{children}</div>
		</div>
	);
};

export const ProjectHeader = ({
	children,
	className,
	href,
	tooltip,
}: React.ComponentProps<"h3"> & { href: string; tooltip: string }) => {
	return (
		<a
			href={href}
			className={cn("flex items-center justify-between gap-2", className)}
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>{children}</TooltipTrigger>
					<TooltipContent>
						<p>{tooltip}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<FaArrowRightLong className="text-text-color md:block hidden" />
		</a>
	);
};

export const ProjectHeaderText = ({
	children,
	className,
}: React.ComponentProps<"h3">) => {
	return <h3 className={cn("text-md", className)}>{children}</h3>;
};

export const ProjectDescription = ({
	children,
	className,
}: React.ComponentProps<"p">) => {
	return (
		<p className={cn("text-sm text-text-color pl-2 pt-2", className)}>
			{children}
		</p>
	);
};

export const ProjectTechStack = ({
	children,
	className,
}: React.ComponentProps<"div">) => {
	if (!children || !Array.isArray(children)) return null;
	const childrenArray = Array.from(children) as React.ReactElement<{
		title: string;
	}>[];

	return (
		<div
			className={cn(
				"pl-2 pt-1 flex items-center justify-start gap-x-2",
				className,
			)}
		>
			<TooltipProvider>
				{childrenArray.map((child) => (
					<Tooltip key={child.props.title}>
						<TooltipTrigger>{child}</TooltipTrigger>
						<TooltipContent>
							{/* @ts-expect-error */}
							<p>{child.type.name}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</TooltipProvider>
		</div>
	);
};
