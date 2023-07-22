import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const transaction = await prisma.transaction.findUnique({
            where: { id },
            include: {
                post: true,
                buyer: true,
            },
        });

        if (!transaction) {
            return NextResponse.json(
                { error: "Transaction not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(transaction);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const transaction = await prisma.transaction.findUnique({
            where: { id },
            include: {
                post: true,
                buyer: true,
            },
        });

        if (!transaction) {
            return NextResponse.json(
                { error: "Transaction not found." },
                { status: 404 }
            );
        }

        const { status } = await req.json();

        await prisma.transaction.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json({ message: "Successfully updating transaction." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
