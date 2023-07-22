"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryLanding(props: any) {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer hover:opacity-75 transition-opacity" onClick={() => router.push(`/explore?category=${props.nama}>
            {/* The "hover:opacity-75" class will change opacity on hover */}
            <Image src={props.foto} width={80} height={80} alt="Category Name" />
            <p className="text-center">{props.nama}</p>
            <style jsx>{`
        .hover\:opacity-75:hover {
          opacity: 0.75;
          /* Adjust the opacity value (0 to 1) as per your preference */
        }
      `}</style>
        </div>
    );
}