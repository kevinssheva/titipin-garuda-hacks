import Image from "next/image";
import Categorylanding from "./Categorylanding";
import Productbox from "./Productbox";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Session } from "next-auth";

export default async function Landing() {
  const productBoxContent = (
    <Productbox
      image="landing/Toys.svg"
      name="Toys"
      price="90.000"
      location="Singapore"
      rating="4.4"
      sold="10"
    />
  );

  // getserversession
  const session = await getServerSession(authOptions) as Session;

  const recommendation = async () => {
    return await prisma.post.findMany({
      where: {
        category: {
          in: session.user.categoryPilihan,
        }
      },
      select: {
        id: true,
        title: true,
        price: true,
        location: true,
        stock: true,
        imageURLs: true,
      }
    });
  }

  const recommendationProducts = await recommendation();


  return (
    <div className="p-24 lg:py-40 py-20">
      <div className="lg:flex gap-6 justify-center mb-12 lg:mb-16 block">
        <Image
          src="/landing/promo1.jpg"
          width={875}
          height={500}
          alt="promo1"
          className="rounded-xl lg:w-[50%] mb-6 lg:mb-0"
        />
        <Image
          src="/landing/promo2.jpg"
          width={875}
          height={500}
          alt="promo1"
          className="rounded-xl lg:w-[50%]"
        />
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
        {recommendationProducts.map((product) => (
          <div key={product.id}>
            <Productbox
              image={product.imageURLs[0]}
              name={product.title}
              price={product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0
              })}
              location={product.location}
              sold={product.stock}
            /></div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="mt-12 bg-mariner-500 hover:bg-mariner-600 cursor-pointer p-5 rounded-xl self-center">
          <p className="text-white text-center font-medium">Explore More</p>
        </div>
      </div>
    </div>
  );
}
