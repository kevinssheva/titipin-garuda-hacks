import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function calculateTotalPrice(amount: number, price: number) {
    return amount * price;
}

// create transaction between buyer and seller
export async function POST(req: NextRequest) {
    const {
        postId,
        buyerId,
        amount,
    } = await req.json();

    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
            select: { price: true },
        });

        if (!post) {
            return NextResponse.json(
                { error: "Post not found. Transaction creation failed." },
                { status: 404 }
            );
        }

        const totalPrice = calculateTotalPrice(amount, post.price);

        await prisma.transaction.create({
            data: {
                post: { connect: { id: postId } },
                buyer: { connect: { id: buyerId } },
                amount,
                totalPrice,
            }
        });

        return NextResponse.json({ message: "Successfully creating transaction." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}