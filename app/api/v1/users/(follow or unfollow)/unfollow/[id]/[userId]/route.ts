import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string, userId: string } }) {
    const { id, userId } = params;

    // remove follower (userId) from user (id)
    try {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                followedBy: {
                    disconnect: {
                        id: userId
                    }
                },

            }
        });

        return NextResponse.json({ message: "User successfully unfollowed" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}