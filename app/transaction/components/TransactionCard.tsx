"use client";

import useTransactionModal from "@/app/hooks/useTransactionModal";
import Image from "next/image";
import { usePathname } from 'next/navigation'

interface Post {
  title: string;
  price: number;
  imageURLs: string[];
  author: {
    fullName: string;
    profilePicture: string;
  };
}



export interface TransactionCardProps {
  id: string;
  postId: string;
  amount: number;
  totalPrice: number;
  buyerId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  buyer: {
    fullName: string;
    profilePicture: string;
  }
  post: Post;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  postId,
  amount,
  totalPrice,
  buyerId,
  status,
  createdAt,
  updatedAt,
  buyer,
  post
}) => {
  const transactionModal = useTransactionModal();
  const pathname = usePathname()
  const isBuyPage = pathname === "/transaction/buy";
  return (
    <div className="w-full bg-white drop-shadow-md rounded-lg flex flex-col px-3 py-5 gap-5">
      <div className="flex items-center gap-2">
        <div className="w-[5%] aspect-square bg-gray-100 rounded-full overflow-hidden relative">
          <Image
            src={isBuyPage ? post.author.profilePicture : buyer.profilePicture}
            alt="Profile Picture"
            layout="fill"
            className="rounded-full object-cover object-center"
          />
        </div>

        <p className="font-semibold">{isBuyPage ? post.author.fullName : buyer.fullName}</p>
      </div>
      <div className="flex gap-4">
        <div className="w-1/6 aspect-square rounded-md bg-gray-200">
          <div className="relative w-full h-full">
            <Image
              src={post.imageURLs[0]}
              alt="Foto Produk"
              layout="fill"
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>

        <div>
          <p className="font-bold">{post.title}</p>
          <p className="text-sm font-light text-neutral-500">
            {amount} barang
          </p>
        </div>
        <div className="border-l-2 ml-auto px-4 flex flex-col justify-center">
          <p className="text-sm font-light text-neutral-500">Total Harga</p>
          <p className="font-semibold">Rp {totalPrice}</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 ml-auto">
          <div
            className="cursor-pointer flex items-center justify-center py-2 rounded-md w-full bg-mariner-500 font-bold text-white"
            onClick={() => {
              transactionModal.onOpen({
                id,
                postId,
                amount,
                totalPrice,
                buyerId,
                status,
                createdAt,
                updatedAt,
                buyer,
                post
              });
            }}
          >
            Lihat Detail
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
