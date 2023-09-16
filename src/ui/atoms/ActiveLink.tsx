"use client";
import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { containsSections } from "@/lib/utils";

export const ActiveLink = <T extends string>({
	href,
	children,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "border-b border-solid border-blue-400",
	exact = true,
}: {
	href: Route<T> | URL;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
}) => {
	const pathName = usePathname();
	const hrefSections = href.toString().split("/").filter(Boolean);
	const pathNameSections = pathName.split("/").filter(Boolean);

	const isActive = exact ? pathName === href : containsSections(hrefSections, pathNameSections);

	return (
		<Link
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			href={href as Route}
		>
			{children}
		</Link>
	);
};
