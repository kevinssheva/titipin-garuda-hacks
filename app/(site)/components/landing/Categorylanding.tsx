"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryLanding(props: any) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
      onClick={() => router.push(`/explore?category=${props.nama}`)}
    >
      <Image src={props.foto} width={80} height={80} alt="Category Name" />
      <p className="text-center">{props.nama}</p>
    </div>
  );
}
