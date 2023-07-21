import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
        });

        return NextResponse.json(post);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
