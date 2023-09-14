"use client";
import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { containsSections } from "@/lib/utils";

export const ActiveLink = ({
	href,
	children,
	className = "",
	activeClassName = "underline",
	exact = true,
}: {
	href: Route;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
}) => {
	const pathName = usePathname();
	const hrefSections = href.split("/").filter(Boolean);
	const pathNameSections = pathName.split("/").filter(Boolean);

	const isActive = exact ? pathName === href : containsSections(hrefSections, pathNameSections);

	return (
		<Link
			className={clsx(`text-blue-400 hover:text-blue-600 ${className}`, {
				[activeClassName]: isActive,
			})}
			href={href}
		>
			{children}
		</Link>
	);
};
