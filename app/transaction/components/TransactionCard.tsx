import Button from "@/app/components/Button";
import Link from "next/link";

export interface TransactionCardProps {
  id: string;
  sellerImage: string;
  sellerName: string;
  productName: string;
  productImage: string;
  productQuantity: number;
  totalPrice: number;
  status: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  sellerImage,
  sellerName,
  productName,
  productImage,
  productQuantity,
  totalPrice,
  status,
}) => {
  return (
    <div className="w-full bg-white drop-shadow-md rounded-lg flex flex-col px-3 py-5 gap-5">
      <div className="flex items-center gap-2">
        <div className="w-[5%] aspect-square bg-gray-100 rounded-full overflow-hidden"></div>
        <p className="font-semibold">{sellerName}</p>
      </div>
      <div className="flex gap-4">
        <div className="w-1/6 aspect-square rounded-md bg-gray-200"></div>
        <div>
          <p className="font-bold">{productName}</p>
          <p className="text-sm font-light text-neutral-500">
            {productQuantity} barang
          </p>
        </div>
        <div className="border-l-2 ml-auto px-4 flex flex-col justify-center">
          <p className="text-sm font-light text-neutral-500">Total Harga</p>
          <p className="font-semibold">Rp {totalPrice}</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 ml-auto">
          <Link href={`/transaction/${id}`}>
            <div className="flex items-center justify-center py-2 rounded-md w-full bg-mariner-500 font-bold text-white">
              Lihat Detail
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
