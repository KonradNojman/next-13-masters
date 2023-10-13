import { type NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest): Promise<NextResponse> {
	return NextResponse.json({ message: "Hello World" });
}

// export const runtime = "";
// export const dynamic = true;
// export const dynamicParams = true;
// export const revalidate = 123;
