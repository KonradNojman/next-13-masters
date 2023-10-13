import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ChangeProductQuantity } from "./ChangeProductQuantity";
import { formatMoney } from "@/lib/utils";
import { getCartById } from "@/api/cart";
import { Button } from "@/ui/atoms/Button";
import { handlePaymentAction } from "@/api/actions";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const cart = await getCartById(cartId);

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table className="w-full table-auto">
				<thead>
					<tr>
						<th className="text-left">Product</th>
						<th className="px-4 text-center">Quantity</th>
						<th className="text-right">Price</th>
						<th className="text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.cartOrderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td className="text-left">{item.product.name}</td>
								<td>
									<ChangeProductQuantity itemId={item.id} quantity={item.quantity || 1} />
								</td>
								{/* @Todo: add soft refresh and remove item on the client side - described in 4.6 */}
								<td className="text-right">{formatMoney(item.product.price)}</td>
								<td className="text-right">{formatMoney(item.total)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<form
				action={async () => {
					"use server";
					await handlePaymentAction(cart);
				}}
				className="mt-10 flex w-full justify-center"
			>
				<Button className="px-20">Pay</Button>
			</form>
		</div>
	);
}
