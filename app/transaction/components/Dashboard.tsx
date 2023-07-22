"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const pathName = usePathname();
  return (
    <div className="mt-24 text-center">
      <h1 className="text-3xl font-bold text-mariner-600">Daftar Transaksi</h1>
      <div className="relative w-full flex drop-shadow-md bg-white my-5">
        <div
          className={`absolute w-1/2 h-1 bg-mariner-500 bottom-0 rounded-t-m
            ${pathName === "/transaction/buy" && "translate-x-full"}
            transition duration-300
          `}
        ></div>
        <Link href="/transaction/sell" className="flex-1 py-3">
          <div className="flex items-center justify-center font-semibold">
            Penjualan
          </div>
        </Link>
        <Link href="/transaction/buy" className="flex-1 py-3">
          <div className="flex items-center justify-center font-semibold">
            Pembelian
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
