import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}