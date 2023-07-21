import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Productbox(props: any) {
  return (
    <>
      <div className="flex flex-col w-48 rounded-xl p-3 shadow-md hover:shadow-xl cursor-pointer">
        <Image
          src={props.image}
          width={250}
          height={250}
          alt="Category Name"
          className="rounded-2xl mb-4"
        />
        <p className="text-base">{props.name}</p>
        <p className="font-bold">Rp {props.price}</p>
        <p className="text-gray-500 text-sm">{props.location}</p>

        <div className="flex items-center">
          <p className="text-gray-500 text-sm">Stok : {props.sold <= 10? props.sold : props.sold + "+"}</p>
        </div>
      </div>
    </>
  );
}
