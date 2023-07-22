import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { userId: string, productId: string } }) {
    const { userId, productId } = params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                wishlist: true,
            }
        });

        if (!user) {
            throw new Error("User not found.")
        }
        const itemIndex = user.wishlist.findIndex((post) => post === productId);
        if (itemIndex === -1) {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    wishlist: {
                        push: productId
                    }
                }
            })
        } else {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    wishlist: {
                        set: user.wishlist.filter((post) => post !== productId)
                    }
                }
            })
        }

        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}