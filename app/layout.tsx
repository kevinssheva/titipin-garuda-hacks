import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { NextAuthProvider } from "./provider";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import CategoryModal from "./components/Modals/CategoryModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={poppins.className}>
      <NextAuthProvider>
        <LoginModal />
        <CategoryModal />
        <RegisterModal />
        <Navbar
          currentUser={{
            userName: session?.user?.name as string,
            image: session?.user?.image as string,
          }}
        />
        {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
