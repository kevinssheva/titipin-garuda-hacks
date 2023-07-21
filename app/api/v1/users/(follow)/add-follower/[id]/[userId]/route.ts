import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string, userId: string } }) {
    const { id, userId } = params;

    // add follower (userId) to user (id)
    try {
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                followers: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        return NextResponse.json(user);
    }

    