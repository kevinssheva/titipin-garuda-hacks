"use client"
import Productbox from "@/app/(site)/components/landing/Productbox";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";

interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

interface Product {
  id: string;
  imageURLs: string[];
  title: string;
  price: number;
  location: string;
  rating: string;
  sold: number;
  transactions: any[];
}

function formatNumber(number: number) {
  // Convert the number to string
  const numberString = String(number);

  const [integerPart, decimalPart = ''] = numberString.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

  return formattedNumber;
}

export default function Profile({ user }: { user: User }) {
  const { data: usersData } = useSWR(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/users/${user?.id}`, fetcher);
  const { data: productsData } = useSWR(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/all-post/${user?.id}`, fetcher);
  const router = useRouter();

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
          <h1 className="text-3xl mt-2 font-light">{usersData?.fullName}</h1>

          <div className="flex gap-4 mt-4">
            <AiFillStar className="text-yellow-500 text-2xl" />
            <p>4.4 dari 5.0</p>
          </div>

          {usersData ? (
            <>
              <p className="text-gray-500 mt-4">
                {usersData?.city + ", " + usersData?.country} <br /> Joined {usersData?.createdAt.split("T")[0].split("-")[0]}{" "}
              </p>

              <div className="flex gap-10 text-gray-500 mt-4">
                <p>{usersData?.followedByIDs?.length || ""} followers</p>
                <p>{usersData?.followingIDs?.length || ""} following</p>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <div className="gap-4 mt-12">
          <div className="flex gap-14 mb-12">
            <div className="gap-5">
              <h3 className="text-mariner-500 text-2xl">List Titipan</h3>
              <hr className="absolute border-t-2 border-mariner-700 my-4 w-3/4" />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {productsData ? productsData.map((value: Product, index: number) => (
              <div key={index} onClick={() => { router.push(`/product/${value?.id}`) }}>
                <Productbox
                  id={value?.id}
                  image={value?.imageURLs[0]}
                  name={value?.title}
                  price={formatNumber(value?.price)}
                  location={value?.location}
                  rating="4.4"
                  sold={value?.transactions.length}
                />
              </div>
            )) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
