import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    // get posts from users that the current user is following
    try {
        const { userId } = params;

        const user = await prisma.user.findUnique({
            select: {
                following: {
                    select: {
                        posts: true
                    }
                }
            },
            where: {
                id: userId
            }
        });

        return NextResponse.json(user?.following);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}