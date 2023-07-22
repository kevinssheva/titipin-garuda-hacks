import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// create transaction between buyer and seller
export async function POST(req: NextRequest) {
    const {
        postId,
        buyerId,
    } = await req.json();

    try {
        await prisma.post.create({
            data: {
                postId,
                buyerId
            }
        });

        return NextResponse.json({ message: "Successfully creating transaction." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}