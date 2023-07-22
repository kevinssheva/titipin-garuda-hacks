import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json(user);
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
    fullName,
    email,
    phoneNumber,
    country,
    region,
    city,
    profilePicture,
  } = await req.json();
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        fullName,
        email,
        phoneNumber,
        country,
        region,
        city,
        profilePicture,
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
