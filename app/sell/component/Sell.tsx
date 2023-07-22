"use client";

import { LuImagePlus } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Dropdown, {
  DropdownOptionProps,
} from "@/app/components/Inputs/Dropdown";
import Input from "@/app/components/Inputs/Input";
import { Country } from "country-state-city";
import toast from "react-hot-toast";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

export default function Sell({ user }: { user: User }) {
  const countries = Country.getAllCountries();
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [category, setCategory] = useState({ value: "", code: "" });
  const [subCategory, setSubcategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({
    code: "",
    value: "",
  });
  const [iserror, setIsError] = useState(false);
  const router = useRouter();

  const handleUpload = (result: any) => {
    if (result.event === "success") {
      setSelectedFiles((prevFiles) => {
        return [...prevFiles, result.info.secure_url];
      });
    } else {
      toast.error("Upload failed");
    }
  };

  const handleSubmit = async () => {
    const data = {
      category: category.value,
      subCategory,
      estimatedTime: (new Date(Date.now() + 11 * 24 * 60 * 60 * 1000)).toISOString(),
      title: name,
      price: parseInt(price),
      stock: parseInt(stock),
      description,
      location: location.value,
      imageURLs: selectedFiles,
      authorId: user.id,
    };

    try {
      const res = await fetch(`/api/v1/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setIsError(true);
        toast.error("Failed to upload product");
      } else {
        toast.success("Product uploaded successfully");
        setTimeout(() => {
          router.push("/profile");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="text-mariner-500 text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
        Mau Nitipin apa nih?
      </h1>

      <div className="block lg:flex gap-20">
        <div className="gap-2 lg:w-1/2">
          <div className="flex items-center justify-center w-full">
            <CldUploadButton
              options={{ maxFiles: 5 }}
              onUpload={handleUpload}
              uploadPreset="qhnme8bz"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <LuImagePlus className="w-10 h-10 text-mariner-400 mb-5" />
                <p className="mb-2 text-sm text-mariner-500 text-center">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-mariner-500 text-center">
                  SVG, PNG, JPG (MAX. 5 Photos)
                </p>
              </div>
            </CldUploadButton>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {selectedFiles.map((url, index) => {
              return (
                <div key={index} className="w-24 aspect-square relative">
                  <Image
                    src={url}
                    fill
                    alt="product"
                    className="object-cover"
                  />
                  ;
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <Dropdown
            label="Category"
            value={category}
            options={[
              { value: "Men Fashion", code: "1" },
              { value: "Women Fashion", code: "2" },
              { value: "Food and Beverages", code: "3" },
              { value: "Electronic", code: "4" },
              { value: "Sports", code: "5" },
              { value: "Arts and Crafts", code: "6" },
              { value: "Toys", code: "7" },
              { value: "Shoes", code: "8" },
              { value: "Books", code: "9" },
            ]}
            onChange={(newValue: DropdownOptionProps) => setCategory(newValue)}
          />

          <Input
            id="subCategory"
            label="subCategory"
            required
            value={subCategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />

          <Input
            id="name"
            label="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h2 className="font-semibold text-2xl text-mariner-400">
            Product Details
          </h2>
          <Dropdown
            label="Country"
            value={location}
            onChange={(newValue: DropdownOptionProps) => setLocation(newValue)}
            options={countries.map((country) => {
              return {
                code: country.isoCode,
                value: country.name,
              };
            })}
          />

          <Input
            id="price"
            label="Price"
            type="number"
            required
            formatPrice
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Input
            id="stock"
            label="Stock"
            type="number"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
          />

          <textarea
            className="w-full px-3 py-3 font-light bg-white border-2 rounded-md outline-none transition"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="text-mariner-500 border border-mariner-500 hover:bg-mariner-500 p-2 w-28 self-center rounded-2xl">
            <p className="hover:text-white font-semibold" onClick={handleSubmit}>Post Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
