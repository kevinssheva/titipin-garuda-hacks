import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {
        fullName,
        email,
        password,
        phoneNumber,
        country,
        region
    } = await req.json();

    try {
        await prisma.user.create({
            data: {
                fullName,
                email,
                password,
                phoneNumber,
                country,
                region
            }
        });

        return NextResponse.json({ message: "Successfully creating user." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}