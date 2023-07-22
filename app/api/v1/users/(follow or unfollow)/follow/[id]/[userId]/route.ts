import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string, userId: string } }) {
    const { id, userId } = params;

    // add follower (userId) to user (id)
    try {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                followedBy: {
                    connect: {
                        id: userId
                    }
                },

            }
        });

        return NextResponse.json({ message: "User successfully followed" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

