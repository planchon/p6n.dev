import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const Blog = ({
	children,
	className,
	href,
}: React.ComponentProps<"a"> & { href: string }) => {
	return (
		<a
			href={href}
			className={cn(
				"flex flex-row items-center justify-between gap-2",
				className,
			)}
		>
			{children}
			<div className="md:block hidden hover:cursor-pointer">
				<FaArrowRightLong className="text-text-color" />
			</div>
		</a>
	);
};

export const BlogTitle = ({
	children,
	className,
}: React.ComponentProps<"h3">) => {
	return <h3 className={cn("text-md", className)}>{children}</h3>;
};
