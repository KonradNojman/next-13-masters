/// <reference types="stripe-event-types" />

// localhost tunnel for stripe
// stripe listen --forward-to localhost:3000/api/webhook/stripe
// send the event with custom metadata
// stripe trigger checkout.session.completed --add checkout_session:metadata.cartId=123

import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<NextResponse> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("STRIPE_SECRET_KEY is not defined");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return NextResponse.json("No signature found", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed":
			console.log("checkout.session.completed");
			console.dir(event.data, { depth: 999 });
			break;
		case "checkout.session.async_payment_succeeded": {
		}
		case "checkout.session.async_payment_failed": {
		}
		case "checkout.session.expired": {
		}
		default:
			console.log("Unknown event type");
	}

	return NextResponse.json("OK", { status: 200 });
}
