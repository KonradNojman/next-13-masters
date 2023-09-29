import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	currentPage: number;
	amountOfPages: number;
	// itemsAmount: number;
	// itemsPerPage: number;
	redirectUrl: string;
};

// >1<,2...10
// 1,>2<,3...10
// 1,2,>3<,4...10
// 1...3,>4<,5...10
// ....
// 1...6,>7<,8...10
// 1...7,>8<,9,10
// 1...8,>9<,10
// 1...9,>10<

// 1,2,>3<,4...10
// 1...3,>4<,5...10
// 1...4,>5<,6...10
// 1...6,>7<,8...10
// 1...7,>8<,9,10

export const Pagination = ({
	currentPage,
	amountOfPages,
	// itemsAmount,
	// itemsPerPage,
	redirectUrl,
}: PaginationProps) => {
	const PAGINATION_BORDER_ITEMS = Math.min(4, amountOfPages);
	// const amountOfPages = Math.ceil(itemsAmount / itemsPerPage);

	const prevPagesArray =
		currentPage < PAGINATION_BORDER_ITEMS
			? Array.from({ length: PAGINATION_BORDER_ITEMS }).map((_, i) => i + 1)
			: [1];

	const nextPagesArray =
		currentPage > amountOfPages + 1 - PAGINATION_BORDER_ITEMS
			? Array.from({ length: PAGINATION_BORDER_ITEMS })
					.map((_, i) => amountOfPages - i)
					.reverse()
			: [amountOfPages];

	const currPagesArray = [currentPage - 1, currentPage, currentPage + 1];

	const shouldShowMiddlePages =
		currentPage >= PAGINATION_BORDER_ITEMS &&
		currentPage <= amountOfPages + 1 - PAGINATION_BORDER_ITEMS;

	const shouldShowAdditionalDots = currentPage <= amountOfPages + 1 - PAGINATION_BORDER_ITEMS;

	const defaultPaginationCssClasses =
		"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";
	const activePaginationCssClasses =
		"border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";

	if (amountOfPages <= 4) {
		const pagesArray = Array.from({ length: amountOfPages }).map((_, i) => i + 1);

		return (
			<nav
				aria-label="pagination"
				className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
			>
				<div className="hidden items-baseline md:-mt-px md:flex">
					{pagesArray.map((pageNumber) => (
						<ActiveLink
							key={pageNumber}
							href={`${redirectUrl}/${pageNumber}` as Route}
							className={
								currentPage === pageNumber
									? activePaginationCssClasses
									: defaultPaginationCssClasses
							}
						>
							{pageNumber}
						</ActiveLink>
					))}
				</div>
			</nav>
		);
	}

	return (
		<nav
			aria-label="pagination"
			className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
		>
			<div className="hidden items-baseline md:-mt-px md:flex">
				{prevPagesArray.map((pageNumber) => (
					<ActiveLink
						key={pageNumber}
						href={`${redirectUrl}/${pageNumber}` as Route}
						className={
							currentPage === pageNumber ? activePaginationCssClasses : defaultPaginationCssClasses
						}
					>
						{pageNumber}
					</ActiveLink>
				))}

				<div className="text-2xl">...</div>
				{shouldShowMiddlePages && (
					<>
						{currPagesArray.map((pageNumber) => (
							<ActiveLink
								key={pageNumber}
								href={`${redirectUrl}/${pageNumber}` as Route}
								className={
									currentPage === pageNumber
										? activePaginationCssClasses
										: defaultPaginationCssClasses
								}
							>
								{pageNumber}
							</ActiveLink>
						))}
						{shouldShowAdditionalDots && <div className="text-2xl">...</div>}
					</>
				)}
				{nextPagesArray.map((pageNumber) => (
					<ActiveLink
						key={pageNumber}
						href={`${redirectUrl}/${pageNumber}` as Route}
						className={
							currentPage === pageNumber ? activePaginationCssClasses : defaultPaginationCssClasses
						}
					>
						{pageNumber}
					</ActiveLink>
				))}
			</div>
		</nav>
	);
};
