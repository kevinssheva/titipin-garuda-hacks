import Image from "next/image";
import Searchbar from "./Searchbar";
import MobileNav from "./MobileNav";
import UserMenu, { currentUserType } from "./UserMenu";
import Link from "next/link";

const Navbar = ({ currentUser }: { currentUser: currentUserType }) => {
  return (
    <>
      <div className="fixed z-40 flex py-3 inset-x-0 top-0 shadow-xl px-5 md:px-10 items-center justify-center lg:justify-between bg-white">
        <Link href="/" className="w-[12%] max-w-[10rem] lg:block hidden">
          <div className="gap-1 xl:gap-2 flex items-center cursor-pointer">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-1/4"
            />
            <h1 className="font-bold text-2xl xl:text-3xl text-mariner-600">
              Titipin
            </h1>
          </div>
        </Link>
        <div className="w-full max-w-2xl h-fit p-0">
          <Searchbar />
        </div>
        <UserMenu currentUser={currentUser} />
      </div>
      <div className="lg:hidden fixed bottom-0 inset-x-0 py-3 bg-neutral-100 border-t-neutral-300 border-[1px]">
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;
