"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { IoChevronDown, IoExitOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import baju from "../../../public/baju.jpg";

export interface currentUserType {
  userName: string;
  image?: string;
}

const dropDownMenu = [
  {
    label: "Profile",
    icon: HiOutlineUserCircle,
    href: "/profile",
  },
  {
    label: "Wishlist",
    icon: AiOutlineHeart,
    href: "/wishlist",
  },
  {
    label: "Orders",
    icon: AiOutlineShoppingCart,
    href: "/orders",
  },
];

const UserMenu = ({ currentUser }: { currentUser: currentUserType }) => {
  const loginModal = useLoginModal();
  if (Object.keys(currentUser).length === 0) {
    return (
      <div className="lg:flex hidden w-1/12">
        <button
          onClick={loginModal.onOpen}
          className="w-full border-mariner-500 border-2 text-mariner-500 font-semibold py-1 rounded-lg hover:bg-mariner-500 hover:text-white transition duration-300"
        >
          Get Started
        </button>
      </div>
    );
  }
  return (
    <div className="lg:flex hidden w-1/6 gap-4">
      <div className="group w-7/12 border-[1.5px] border-black bg-white rounded-full py-1 px-2 flex items-center gap-2 relative">
        <div className="relative w-7 aspect-square bg-gray-300 rounded-full overflow-hidden" >
          <Image src={currentUser.image ? currentUser.image : baju} alt="profilePicture" fill={true} className="object-cover" />
        </div>
        <p className="font-normal text-base truncate">
          Hello, <span className="font-semibold">{currentUser.userName}</span>
        </p>
        <IoChevronDown className="text-lg ml-auto group-hover:rotate-180 transition" />
        <div className="group-hover:flex absolute hidden bg-white drop-shadow-lg rounded-b-xl w-full top-1/2 left-0 -z-10 pt-7 flex-col overflow-hidden">
          {dropDownMenu.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="w-full flex gap-2 items-center px-3 hover:bg-gray-200 py-2">
                <item.icon size={20} />
                <p>{item.label}</p>
              </div>
            </Link>
          ))}
          <div className="cursor-pointer w-full flex gap-2 items-center px-3 hover:bg-gray-200 py-2 text-red-500">
            <IoExitOutline size={20} />
            <p onClick={() => signOut()}>Logout</p>
          </div>
        </div>
      </div>
      <button className="px-7 font-semibold bg-mariner-500 text-white rounded-lg">
        Sell
      </button>
    </div>
  );
};

export default UserMenu;
