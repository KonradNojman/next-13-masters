"use client";
import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type OrderByType = {
	label: string;
	value: string;
};

const orderList: OrderByType[] = [
	{ label: "By Price", value: "price" },
	{ label: "By Rating", value: "avg_rating" },
];

export const SortSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
		router.push(`${pathname}?sort=${event.target.value}` as Route);

	return (
		<>
			<select
				name="sort-by"
				value={searchParams.get("sort") || "Sort by"}
				onChange={handleOnChange}
				className="mb-8 block w-32 cursor-pointer appearance-none rounded-md border-2 border-slate-600 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			>
				<option disabled>Sort by</option>
				{orderList.map(({ label, value }) => (
					<option
						key={value}
						value={value}
						data-testid={value.includes("price") ? "sort-by-price" : "sort-by-rating"}
					>
						{label}
					</option>
				))}
			</select>
		</>
	);
};
