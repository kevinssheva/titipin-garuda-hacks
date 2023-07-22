import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// get all transactions from a user (seller)
export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        const { userId } = params;

        const transactions = await prisma.transaction.findMany({
            where: {
                // Use the seller's userId to filter transactions where they are the seller
                post: {
                    authorId: userId,
                },
            },
            include: {
                post: true,
                buyer: true,
            },
        });

        return NextResponse.json(transactions);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}