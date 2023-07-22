import Image from "next/image";
import Landing from "@/app/(site)/components/landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import RegisterModal from '../components/Modals/RegisterModal'
import LoginModal from '../components/Modals/LoginModal'
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Session } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions) as Session;

  const recommendation = async () => {
    return await prisma.post.findMany({
      where: {
        category: {
          in: session?.user.categoryPilihan,
        }
      },
      select: {
        id: true,
        title: true,
        price: true,
        location: true,
        stock: true,
        imageURLs: true,
      }
    });
  }

  const recommendationProducts = await recommendation();
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Landing recommendationProducts={recommendationProducts} />
    </>
  );
}
