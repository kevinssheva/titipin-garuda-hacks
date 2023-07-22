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
        id: id,
      },
      include: {
        author: {
          select: {
            id: true,
            fullName: true,
            email: true,
            city: true,
            country: true,
            profilePicture: true,
            followedByIDs: true,
            wishlist: true,
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const {
    title,
    stock,
    price,
    location,
    estimatedTime,
    category,
    imageURLs,
    authorId,
  } = await req.json();
  try {
    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        stock,
        price,
        location,
        estimatedTime,
        category,
        imageURLs,
        authorId,
      },
    });

    return NextResponse.json({ message: "Successfully updating post." });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
