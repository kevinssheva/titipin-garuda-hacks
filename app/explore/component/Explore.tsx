import Image from "next/image";
import Subcategory from "./Subcategory";
import { useState } from "react";
import Productbox from "@/app/(site)/components/landing/Productbox";

export default function Explore() {
  const listproduct = (
    <Productbox
      image="/explore/pria/baju.jpg"
      name="Baju"
      price="90.000"
      location="Singapore"
      rating="4.4"
      sold="10"
    />
  );

  return (
    <>
      <h3 className="text-2xl font-light mb-12">Mens Fashion</h3>

      <h1 className="text-3xl mb-8">Jastip Mens Fashion</h1>
      <p className="font-light text-2xl mb-6">
        Yuk titip barang yang kamu mau!
      </p>

      <div className="flex w-3/4 gap-4 flex-wrap">
        <Subcategory foto="/explore/pria/taspria.jpg" name="Tas & Dompet" />
        <Subcategory foto="/explore/pria/baju.jpg" name="Baju" />
        <Subcategory foto="/explore/pria/jam.jpg" name="Jam" />
        <Subcategory foto="/explore/pria/sepatu.jpg" name="Sepatu" />
        <Subcategory foto="/explore/pria/glasses.jpg" name="Kacamata" />
      </div>

      <div className="flex gap-5">
        <div className="mt-12 p-3 rounded-full border border-gray-400 w-44">
          <select>
            <option value="Men Fashion">Men Fashion</option>
            <option value="Women Fashion">Woman Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="FnB">FnB</option>
            <option value="Cosmetic">Cosmetic</option>
            <option value="Sports">Sports</option>
            <option value="Art & Craft">Art & Craft</option>
            <option value="Toys">Toys</option>
            <option value="Shoes">Shoes</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="mt-12 p-3 rounded-full border border-gray-400 w-52">
          <select>
            <option value="Best Match">Best Match</option>
            <option value="Newest">Newest</option>
            <option value="Harga-Tinggi">High To Low (Price)</option>
            <option value="Harga-Rendah">Low To High (Price)</option>
          </select>
        </div>
      </div>

      <div className="flex-wrap flex gap-8 mt-12">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index}>{listproduct}</div>
        ))}
      </div>
    </>
  );
}
