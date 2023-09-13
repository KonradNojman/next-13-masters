import { type ReactNode } from "react";

export default function StaticPagesLayout({ children }: { children: ReactNode }) {
	return <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">{children}</div>;
}
