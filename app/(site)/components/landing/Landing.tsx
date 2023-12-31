"use client";
import Image from "next/image";
import Categorylanding from "./Categorylanding";
import Productbox from "./Productbox";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface recommendationProduct {
  id: string;
  title: string;
  price: number;
  location: string;
  stock: number;
  imageURLs: string[];
}

interface LandingProps {
  recommendationProducts: recommendationProduct[];
}

export default function Landing({ recommendationProducts }: LandingProps) {
  const router = useRouter();

  return (
    <div className="p-24 lg:py-40 py-20">
      <div className="lg:flex gap-6 justify-center mb-12 lg:mb-16 block">
        <div className="rounded-xl lg:w-[50%] mb-6 lg:mb-0 transform transition-transform hover:scale-105">
          <Image
            src="/landing/promo1.jpg"
            width={875}
            height={500}
            alt="promo1"
          />
        </div>
        <div className="rounded-xl lg:w-[50%] transform transition-transform hover:scale-105">
          <Image
            src="/landing/promo2.jpg"
            width={875}
            height={500}
            alt="promo2"
          />
        </div>
      </div>

      <h1 className="font-semibold text-xl lg:text-3xl mb-6 text-mariner-500">
        Explore Your Needs
      </h1>

      <div className="flex mb-12 lg:mb-16 justify-between gap-8 overflow-x-scroll lg:overflow-x-hidden">
        <Categorylanding foto="landing/Men Fashion.svg" nama="Men Fashion" />
        <Categorylanding
          foto="landing/Women Fashion.svg"
          nama="Women Fashion"
        />
        <Categorylanding foto="landing/Electronics.svg" nama="Electronics" />
        <Categorylanding foto="landing/fnb.svg" nama="FnB" />
        <Categorylanding foto="landing/Cosmetic.svg" nama="Cosmetic" />
        <Categorylanding foto="landing/Sports.svg" nama="Sports" />
        <Categorylanding foto="landing/Art & Craft.svg" nama="Art & Craft" />
        <Categorylanding foto="landing/Toys.svg" nama="Toys" />
        <Categorylanding foto="landing/Shoes.svg" nama="Shoes" />
        <Categorylanding foto="landing/Books.svg" nama="Books" />
      </div>

      <h1 className="font-semibold text-xl lg:text-3xl mb-6 text-mariner-500">
        Reccomended For You
      </h1>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {/* {Array.from({ length: 24 }).map((_, index) => (
          <div key={index}>{productBoxContent}</div>
        ))} */}
        {recommendationProducts.map((product: any) => (
          <div
            key={product.id}
            onClick={() => {
              router.push(`/product/${product.id}`);
            }}
          >
            <Productbox
              image={product.imageURLs[0]}
              name={product.title}
              price={product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
              location={product.location}
              sold={product.stock}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/explore">
          <div className="mt-12 bg-mariner-500 hover:bg-mariner-600 cursor-pointer p-5 rounded-xl self-center">
            <p className="text-white text-center font-medium">Explore More</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
