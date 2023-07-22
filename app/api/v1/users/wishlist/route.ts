import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userId, postId } = await req.json();
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
            return NextResponse.json({ message: "User not found." }, { status: 404 });
        }
        const itemIndex = user.wishlist.findIndex((post) => post === postId);
        if (itemIndex === -1) {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    wishlist: {
                        push: postId
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
                        set: user.wishlist.filter((post) => post !== postId) // remove the post from wishlist
                    }
                }
            })
        }

        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}