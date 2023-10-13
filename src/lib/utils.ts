import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const containsSections = (a: string[], b: string[]): boolean => {
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
};

export const formatMoney = (price: number) => {
	return Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(price / 100);
};
