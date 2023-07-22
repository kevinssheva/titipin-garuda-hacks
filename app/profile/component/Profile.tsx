import Productbox from "@/app/(site)/components/landing/Productbox";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Country, State, City } from "country-state-city";

export default function Profile() {
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

  return (
    <div className="relative pt-20">
      <div className="bg-mariner-300 w-full h-28 absolute top-0"></div>

      <div className="block lg:flex gap-16">
        <div className="">
          <div className="border-4 border-white relative w-36 aspect-square rounded-full overflow-hidden">
            <Image
              src="/baju.jpg"
              fill
              alt="profile"
              className="object-cover object-center"
            />
          </div>
          <h1 className="text-3xl mt-2 font-light">Mochamad Syahrial</h1>

          <div className="flex gap-4 mt-4">
            <AiFillStar className="text-yellow-500 text-2xl" />
            <p>4.4 dari 5.0</p>
          </div>

          <p className="text-gray-500 mt-4">
            Bekasi, Indonesia <br /> Joined 2015{" "}
          </p>

          <div className="flex gap-10 text-gray-500 mt-4">
            <p>0 followers</p>
            <p>0 following</p>
          </div>
        </div>

        <div className="gap-4 mt-12">
          <div className="flex gap-14 mb-12">
            <div className="gap-5">
              <h3 className="text-mariner-500 text-2xl">List Titipan</h3>
              <hr className="absolute border-t-2 border-mariner-700 my-4 w-3/4" />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {Array.from({ length: 14 }).map((_, index) => (
              <div key={index}>{productBoxContent}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
