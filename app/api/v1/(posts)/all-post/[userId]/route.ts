import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        const { userId } = params;

        const posts = await prisma.post.findMany({
            include: {
                transactions: true,
            },
            where: {
                authorId: userId
            }
        });

        return NextResponse.json(posts);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}