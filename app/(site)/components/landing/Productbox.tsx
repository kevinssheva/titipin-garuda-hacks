import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Productbox(props: any) {
  return (
    <>
      <div className="flex flex-col w-48 aspect-[3/5] rounded-xl p-3 shadow-md hover:shadow-xl cursor-pointer">
        <div className="relative h-1/2 overflow-hidden w-full rounded-lg mb-2">
        <Image
          src={props.image}
          fill
          alt="Category Name"
          className="object-cover"
        />
        </div>
        <p className="text-base line-clamp-3">{props.name}</p>
        <p className="font-bold">{props.price}</p>
        <p className="text-gray-500 text-sm">{props.location}</p>

        <div className="flex items-center">
          <p className="text-gray-500 text-sm">Stok : {props.sold <= 10? props.sold : props.sold + "+"}</p>
        </div>
      </div>
    </>
  );
}
