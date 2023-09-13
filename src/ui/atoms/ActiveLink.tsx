"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathName = usePathname();
	const isActive = pathName === href;

	return (
		<Link
			className={clsx("text-blue-400 hover:text-blue-600", {
				underline: isActive,
			})}
			href={href}
		>
			{children}
		</Link>
	);
};
