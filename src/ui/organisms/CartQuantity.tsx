"use server";
import Link from "next/link";
import { getCartFromCookie } from "@/api/actions";

export async function CartQuantity() {
	const cart = await getCartFromCookie();
	const productQuantity = cart?.cartOrderItems.length || 0;
	return <Link href={"/cart"}>Cart ({productQuantity})</Link>;
}
