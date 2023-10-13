"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Button } from "@/ui/atoms/Button";
import { changeItemQuantity } from "@/api/actions";

export const ChangeProductQuantity = ({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex items-center justify-center gap-2">
			<div data-testid="quantity">{optimisticQuantity}</div>
			<Button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</Button>
			<Button
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</Button>
		</form>
	);
};
