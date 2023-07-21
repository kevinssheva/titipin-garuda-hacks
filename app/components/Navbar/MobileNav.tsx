import Link from "next/link";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className="w-full flex justify-around">
      <Link href="/">
        <div className="flex flex-col justify-center items-center gap-1 text-neutral-500">
          <AiOutlineHome size={24} />
          <p className="text-sm font-medium">Home</p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col justify-center items-center gap-1 text-neutral-500">
          <AiOutlineHeart size={24} />
          <p className="text-sm font-medium">Wishlist</p>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center gap-1 text-neutral-500 cursor-pointer">
        <AiOutlineUser size={24} />
        <p className="text-sm font-medium">Log In</p>
      </div>
    </div>
  );
};

export default MobileNav;
