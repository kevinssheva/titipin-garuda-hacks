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

export default function Sell() {
  const countries = Country.getAllCountries();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState({ value: "", code: "" });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 5) {
      window.alert("You can upload a maximum of 5 files.");
      return;
    }

    setSelectedFiles(files);
  };

  const handleDeleteImage = (index: number) => {
    setSelectedFiles((prevFiles) => {
      // Create a new array excluding the file at the given index
      return prevFiles.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <h1 className="text-mariner-500 text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
        Mau Nitipin apa nih?
      </h1>

      <div className="block lg:flex gap-20">
        <div className="gap-2 lg:w-1/2">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-mariner-500 border-dashed rounded-lg cursor-pointer bg-mariner-100 hover:bg-mariner-200"
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
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap justify-center">
            {selectedFiles.map((file, index) => (
              <div key={index} className="m-2 flex flex-row-reverse">
                <RxCrossCircled
                  className="w-5 h-5 text-white bg-black rounded-full cursor-pointer"
                  onClick={() => handleDeleteImage(index)}
                />
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded file ${index + 1}`}
                  width={160}
                  height={160}
                  className="w-16 h-16 lg:w-40 lg:h-40 object-cover rounded-md mt-4"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <Dropdown
            label="Category"
            value={category}
            options={[
              { value: "Fashion", code: "1" },
              { value: "Electronic", code: "2" },
              { value: "Furniture", code: "3" },
              { value: "Handmade", code: "4" },
              { value: "Toys", code: "5" },
              { value: "Shoes", code: "6" },
              { value: "Others", code: "11" },
            ]}
            onChange={(newValue: DropdownOptionProps) => setCategory(newValue)}
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
            <p className="hover:text-white font-semibold">Post Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
