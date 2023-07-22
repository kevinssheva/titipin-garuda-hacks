import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { searchParams }: { searchParams: { [key: string]: string | undefined} }
) {
  try {
    const { product, location } = searchParams;

    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: product,
          mode: 'insensitive'
        },
        location: location ?? undefined,
      },
    });

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
