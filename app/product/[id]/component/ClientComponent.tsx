"use client";
import Image from "next/image";
import baju from "@/public/baju.jpg";
import Button from "@/app/components/Button";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Productbox from "@/app/(site)/components/landing/Productbox";
import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import MediaCarousel from "./MediaCarousel";
import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";

import { add, format, formatDistanceToNow } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import { Session } from "next-auth";

interface Product {
  id: string;
  title: string;
  description: string;
  stock: number;
  price: number;
  location: string;
  category: string;
  subCategory: string;
  estimatedTime: Date;
  imageURLs: string[];
  authorId: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  city: string;
  country: string;
  profilePicture: string;
  wishlist: string[];
  followedByIDs: string[];
}

// interface SignedUser {
//     id: string;
//     name: string;
//     email: string;
//     image: string;
//     wishlist: string[];
// }

const ClientProductDetail = ({id, session} : {id:string, session: Session}) => {

  const { data: products, error: productsError } = useSWR<Product>(`http://localhost:3000/api/v1/posts/${id}`, fetcher)
  const { data, error } = useSWR<Product>(`http://localhost:3000/api/v1/posts/${id}`, fetcher)
  
  const [isLiked, setIsLiked] = useState(session?.user?.wishlist.includes(data?.id as string) as boolean);
  const [isFollowed, setIsFollowed] = useState(data?.author.followedByIDs.includes(session?.user?.id));


  const rekomen = (
    <Productbox
      image="/explore/pria/baju.jpg"
      name="Baju"
      price="90.000"
      location="Singapore"
      rating="4.4"
      sold="10"
    />
  );

  const addWishlist = async (user: Product, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      const res = await fetch(`/api/v1/users/wishlist/${session?.user?.id}/${user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // // ubah true ke false atau false ke true 
      setIsLiked(isLiked => !isLiked)
      // session?.user?.wishlist.includes(data?.id)
    } catch(err) {
      console.log(err)
    }

  }

  const follow = async (user: Product, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const res = await fetch(`/api/v1/users/follow/${user.authorId}/${session?.user?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if(data.message) {
      setIsFollowed(true)
    }
  }
  
  const unfollow = async (user: Product, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const res = await fetch(`/api/v1/users/unfollow/${user.authorId}/${session?.user?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if(data.message) {
      setIsFollowed(false)
    }
  }

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString)

    const isClose = Math.abs(date.getTime() - new Date().getTime()) < 14 * 24 * 60 * 60 * 1000;

    if (isClose) {
      return formatDistanceToNow(date, { locale: idLocale, addSuffix: true });
    } else {
      return format(date, 'dd MMMM yyyy', { locale: idLocale });
    }
  };

  const [jumlah, setJumlah] = useState(1);

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center lg:items-start px-3 lg:pl-24 py-16">
      <div className="container py-16 px-5 xl:w-2/3 max-w-6xl">

        <div className="mb-2 text-lg lg:col-span-2">
          <span className="cursor-pointer text-mariner-500" onClick={() => { }}>
            {data.category}
          </span>
          {" > "}
          <span className="cursor-pointer text-mariner-500" onClick={() => { }}>
            {data.subCategory}
          </span>
          {" > "}
          <span className="cursor-pointer" onClick={() => { }}>
            {data.title}
          </span>
        </div>

        <MediaCarousel media={data.imageURLs} />

        <div className="flex flex-col lg:flex-row py-4">
          <div className="w-full lg:mr-4">
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">
                  {data.title}
                </h1>

                {!isLiked ? (
                  <AiOutlineHeart
                    size={28}
                    className="text-red-500 mr-3 cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      addWishlist(data, e);
                    }}
                  />
                ) : (
                  <AiFillHeart
                    size={28}
                    className="text-red-500 mr-3 cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      addWishlist(data, e);
                    }}
                  />
                )}
              </div>
              <p className="text-md tracking-normal">{data.location}</p>
              <p className="text-2xl font-bold">
                {data.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
            <hr className="my-3" />
            <div className="py-3">
              <h1 className="text-xl font-semibold">Description</h1>
              <p className="pt-2">
                Posted :<span className="mx-2 opacity-50">{formatDate(data.createdAt)}</span>
              </p>
              <p className="pb-2">
                Estimated Arrival :<span className="mx-2 opacity-50">{formatDate(data.estimatedTime)}</span>
              </p>
              <p className="py-1 text-md tracking-normal">
                {data.description}
              </p>
            </div>
            <hr className="my-3" />
            <div className="py-3">
              <h1 className="text-xl pb-3 font-semibold">Meet the Jastipers</h1>
              <div className="flex justify-between items-center text-lg sm:flex-row flex-col">
                <div className="flex">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden">
                    <Image
                      src={baju}
                      className="object-cover w-4/6 lg:w-full h-full"
                      alt="Profile Picture"
                      layout="fill"
                    />
                  </div>
                  <div className="flex flex-col justify-center ml-4">
                    <p className="text-sm lg:text-md font-semibold tracking-normal">
                      {data.author.fullName}
                    </p>
                    <p className="text-sm lg:text-md tracking-normal font-medium opacity-60">
                      {data.author.email}
                    </p>
                    {/* // logo location */}
                    <div className="flex items-center">
                      <CiLocationOn
                        size={20}
                        className="text-black opacity-60"
                      />
                      <p className="text-sm lg:text-md tracking-normal opacity-60">
                        {data.author.city}, {data.author.country}
                      </p>
                    </div>
                  </div>
                </div>
                {session?.user && (
                  <div className="w-1/6 mt-4 lg:mt-0">
                    {isFollowed ? (
                      <Button disabled={false} label="Unfollow" onClick={(e) => {unfollow(data, e)}} outline />
                      ) : (
                      <Button disabled={false} label="Follow" onClick={(e) => {follow(data, e)}} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-xl mb-3">Related Products</h1>
        <div className="flex gap-8 overflow-x-scroll lg:overflow-x-hidden w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>{rekomen}</div>
          ))}
        </div>
      </div>

      <div className="self-center bg-white xl:w-3/12 border-black border border-opacity-30 rounded-xl px-4 py-2 flex flex-col xl:fixed xl:right-24 xl:top-40 mb-7 xl:mb-0">
        <p className="text-lg font-semibold">Jumlah</p>
        <div className="py-2 flex items-center">
          <button
            onClick={() => {
              if (jumlah > 1) {
                setJumlah(jumlah - 1);
              }
            }}
            className="px-2 py-1 text-mariner-600 rounded-l focus:outline-none border border-black border-opacity-30 border-r-0"
          >
            -
          </button>
          <span className="px-4 py-1 border border-black border-opacity-30 border-l-0 border-r-0">
            {jumlah}
          </span>
          <button
            onClick={() => {
              if (jumlah < data.stock) {
                setJumlah(jumlah + 1);
              }
            }}
            className="px-2 py-1 text-mariner-600 rounded-r focus:outline-none border border-black border-opacity-30 border-l-0"
          >
            +
          </button>
          <div className="px-2 text-md">
            Stok: <span className="font-bold">{data.stock}</span>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="py-3 flex justify-between items-center text-lg">
          <p>Total</p>
          <p className="font-bold">
            {(data.price * jumlah).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="w-full">
          <Button disabled={false} label="Titipin" onClick={() => { }} />
        </div>
      </div>
    </div>
  );
};

export default ClientProductDetail;
