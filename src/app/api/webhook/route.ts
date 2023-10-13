import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
	const json = (await request.json()) as { productId: string };

	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		console.log(`Revalidating /product/${json.productId}`);
		revalidatePath(`/product/${json.productId}`);
		console.log(`Revalidating /products`);
		revalidatePath(`/products`);
		return NextResponse.json({}, { status: 201 });
	}

	return NextResponse.json({ message: "Invalid body" }, { status: 400 });
}
