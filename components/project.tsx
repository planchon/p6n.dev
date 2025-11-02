import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";
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
}: React.ComponentProps<"h3"> & { href: string }) => {
	return (
		<a
			href={href}
			className={cn("flex items-center justify-between gap-2", className)}
		>
			{children}
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
	return (
		<div
			className={cn(
				"pl-2 pt-1 flex items-center justify-start gap-2",
				className,
			)}
		>
			{children}
		</div>
	);
};
