import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { searchParams }: { searchParams: { [key: string]: string | undefined } }
) {
  try {
    const { category, subCategory, sort } = searchParams;

    const posts = await prisma.post.findMany({
      where: {
        category: category ?? undefined,
        subCategory: subCategory ?? undefined,
      },
      orderBy: [
        sort === "price_max"
          ? {
              price: "desc",
            }
          : sort === "price_min"
          ? {
              price: "asc",
            }
          : {
              createdAt: "desc", // Default sorting for "newest"
            },
      ],
    });

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
