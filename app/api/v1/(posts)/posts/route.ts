import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {
        title,
        description,
        stock,
        price,
        location,
        estimatedTime,
        category,
        subCategory,
        imageURLs,
        authorId
    } = await req.json();

    try {
        await prisma.post.create({
            data: {
                title,
                description,
                stock,
                price,
                location,
                estimatedTime,
                category,
                subCategory,
                imageURLs,
                authorId
            },
        });

        return NextResponse.json({ message: "Successfully creating post." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}


