"use client";
import Image from "next/image"
import baju from "../../public/baju.jpg"
import Button from "../components/Button";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

const productDetail = () => {
    return (
        <div className="container py-16 px-4 lg:px-16 mx-auto">
            <div className="mb-2 text-lg lg:col-span-2">
                <span
                    className="cursor-pointer text-mariner-500"
                    onClick={() => { }}
                >
                    Men's Fashion
                </span>
                {" > "}
                <span
                    className="cursor-pointer"
                    onClick={() => { }}
                >
                    Baju Batik Mickey Mouse
                </span>
            </div>
            <div className="flex justify-center space-x-2 lg:space-x-1 h-64 rounded-l rounded-r">
                <div className="relative w-full h-full flex">
                    <Image
                        src={baju}
                        className="object-cover w-full h-full"
                        alt="media"
                        layout="fill"
                    />
                </div>
                <div className="relative w-full h-full flex">
                    <Image
                        src={baju}
                        className="object-cover w-full h-full"
                        alt="media"
                        layout="fill"
                    />
                </div>
                <div className="relative w-full h-full flex">
                    <Image
                        src={baju}
                        className="object-cover w-full h-full"
                        alt="media"
                        layout="fill"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row py-4">
                <div className="w-full lg:w-9/12 lg:mr-4">
                    <div>
                        <div className="flex justify-between">
                            <h1 className="text-xl font-semibold">Baju Batik Mickey Mouse</h1>
                            <AiOutlineHeart size={28} className="text-red-500 mr-3" />
                        </div>
                        <p className="text-md tracking-normal">Singapore</p>
                        <p className="text-2xl font-bold">Rp 200.000</p>
                    </div>
                    <hr className="my-3" />
                    <div className="py-3">
                        <h1 className="text-xl font-semibold">Description</h1>
                        <p className="py-2">Posted :<span className="mx-2 opacity-50">2 days ago</span></p>
                        <p className="py-1 text-md tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora repellendus similique, est cum exercitationem? Sequi dolor laudantium libero provident temporibus, fugiat officiis, illo, quod recusandae sit sunt. Labore nam soluta alias molestias corrupti, rem neque officiis eum doloremque cumque autem eos reprehenderit repudiandae adipisci maiores. Ut soluta quas quo!</p>
                    </div>
                    <hr className="my-3" />
                    <div className="py-3">
                        <h1 className="text-xl pb-3 font-semibold">Meet the Jastipers</h1>
                        <div className="flex justify-between items-center text-lg sm:flex-row flex-col">
                            <div className="flex">
                                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                                    <Image
                                        src={baju}
                                        className="object-cover w-full h-full"
                                        alt="Profile Picture"
                                        layout="fill"
                                    />
                                </div>
                                <div className="flex flex-col justify-center ml-4">
                                    <p className="text-md font-semibold tracking-normal">Gibran Fasha</p>
                                    <p className="text-md tracking-normal font-medium opacity-60">gibranjakarta@gmail.com</p>
                                    {/* // logo location */}
                                    <div className="flex items-center">
                                        <CiLocationOn size={20} className="text-black opacity-60" />
                                        <p className="text-md tracking-normal opacity-60">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-2/12 mt-4 lg:mt-0">
                                <Button disabled={false} label="Follow" onClick={() => { }} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-full lg:w-3/12 border-black border border-opacity-30 rounded-xl px-4 py-2 flex flex-col mt-4 lg:mt-0 h-min">
                    <p className="text-lg font-semibold">Jumlah</p>
                    <div className="py-2 flex items-center">
                        <button
                            // onClick={handleDecrement}
                            className="px-2 py-1 text-mariner-600 rounded-l focus:outline-none border border-black border-opacity-30 border-r-0"
                        >
                            -
                        </button>
                        <span className="px-4 py-1 border border-black border-opacity-30 border-l-0 border-r-0">2</span>
                        <button
                            // onClick={handleIncrement}
                            className="px-2 py-1 text-mariner-600 rounded-r focus:outline-none border border-black border-opacity-30 border-l-0"
                        >
                            +
                        </button>
                        <div className="px-2 text-md">Stok: <span className="font-bold">10</span></div>
                    </div>
                    <hr className="mt-4 mb-3" />
                    <div className="py-3 flex justify-between items-center text-lg">
                        <p>Total</p>
                        <p className="font-bold">Rp 400.000</p>
                    </div>
                    <div className="w-full">
                        <Button disabled={false} label="Titipin" onClick={() => { }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productDetail;