"use client";
import Image from "next/image";
import baju from "../../public/baju.jpg";
import Button from "../components/Button";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Productbox from "../(site)/components/landing/Productbox";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import MediaCarousel from "./component/MediaCarousel";

const ProductDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
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

  const stok = 10; //dummy
  const [jumlah, setJumlah] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center lg:items-start px-3 lg:pl-24 py-16">
      <div className="container py-16 px-5 xl:w-2/3 max-w-6xl">
        <div className="mb-2 text-lg lg:col-span-2">
          <span className="cursor-pointer text-mariner-500" onClick={() => {}}>
            {"Men's"} Fashion
          </span>
          {" > "}
          <span className="cursor-pointer" onClick={() => {}}>
            Baju Batik Mickey Mouse
          </span>
        </div>

        <MediaCarousel
          media={[
            "/explore/pria/baju.jpg",
            "/explore/pria/glasses.jpg",
            "/explore/pria/jam.jpg",
            "/explore/pria/sepatu.jpg",
          ]}
        />

        <div className="flex flex-col lg:flex-row py-4">
          <div className="w-full lg:mr-4">
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">
                  Baju Batik Mickey Mouse
                </h1>

                {!isLiked ? (
                  <AiOutlineHeart
                    size={28}
                    className="text-red-500 mr-3 cursor-pointer"
                    onClick={() => {
                      setIsLiked(true);
                    }}
                  />
                ) : (
                  <AiFillHeart
                    size={28}
                    className="text-red-500 mr-3 cursor-pointer"
                    onClick={() => {
                      setIsLiked(false);
                    }}
                  />
                )}
              </div>
              <p className="text-md tracking-normal">Singapore</p>
              <p className="text-2xl font-bold">Rp 200.000</p>
            </div>
            <hr className="my-3" />
            <div className="py-3">
              <h1 className="text-xl font-semibold">Description</h1>
              <p className="py-2">
                Posted :<span className="mx-2 opacity-50">2 days ago</span>
              </p>
              <p className="py-1 text-md tracking-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                tempora repellendus similique, est cum exercitationem? Sequi
                dolor laudantium libero provident temporibus, fugiat officiis,
                illo, quod recusandae sit sunt. Labore nam soluta alias
                molestias corrupti, rem neque officiis eum doloremque cumque
                autem eos reprehenderit repudiandae adipisci maiores. Ut soluta
                quas quo!
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
                      Gibran Fasha
                    </p>
                    <p className="text-sm lg:text-md tracking-normal font-medium opacity-60">
                      gibranjakarta@gmail.com
                    </p>
                    {/* // logo location */}
                    <div className="flex items-center">
                      <CiLocationOn
                        size={20}
                        className="text-black opacity-60"
                      />
                      <p className="text-sm lg:text-md tracking-normal opacity-60">
                        Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-1/6 mt-4 lg:mt-0">
                  <Button disabled={false} label="Follow" onClick={() => {}} />
                </div>
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
              if (jumlah < stok) {
                setJumlah(jumlah + 1);
              }
            }}
            className="px-2 py-1 text-mariner-600 rounded-r focus:outline-none border border-black border-opacity-30 border-l-0"
          >
            +
          </button>
          <div className="px-2 text-md">
            Stok: <span className="font-bold">10</span>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="py-3 flex justify-between items-center text-lg">
          <p>Total</p>
          <p className="font-bold">Rp 400.000</p>
        </div>
        <div className="w-full">
          <Button disabled={false} label="Titipin" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
