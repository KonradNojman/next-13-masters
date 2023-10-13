"use server";

import { revalidateTag } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { type CartType, changeCartItemQuantity, getCartById, createCart } from "./cart";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	const result = await changeCartItemQuantity(itemId, quantity);
	revalidateTag("cart");
	return result;
};

export const handlePaymentAction = async (cart: CartType) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.cartOrderItems.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity || 1,
		})),
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/cancel`,
	});

	if (!checkoutSession.url) {
		throw new Error("Checkout session url is not defined");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
};

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}

	const newCart = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
		// secure: true
	});
	return newCart;
}

export async function getCartFromCookie() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
	return null;
}
