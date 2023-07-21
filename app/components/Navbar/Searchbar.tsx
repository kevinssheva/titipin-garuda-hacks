"use client";

import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Button";

const Searchbar = () => {
  return (
    <div className="w-full flex gap-3">
      <div className="relative flex-1">
        <input
          placeholder=" "
          id="name"
          type="text"
          className="peer bg-neutral-100 border-neutral-300 border-[1px] rounded-md py-1 px-2 w-full"
        />
        <div className="peer-placeholder-shown:flex hidden absolute items-center gap-1 text-neutral-300 top-1/2 -translate-y-1/2 left-2">
          <FaSearch />
          <label htmlFor="name" className="text-sm">
            Search your product
          </label>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-neutral-400">
          <IoLocationOutline size={18} />
        </div>
        <select
          name="location"
          id="location"
          className="text-sm h-full text-neutral-700 px-2 pl-7 bg-neutral-100 border-neutral-300 border-[1px] rounded-md"
        >
          <option value="all">Indonesia</option>
          <option value="all">Singapore</option>
          <option value="all">Malaysia</option>
          <option value="all">Japan</option>
        </select>
      </div>
      <div className="p-0 m-0 h-auto w-1/6">
        <Button label="Search" onClick={() => {}} small />
      </div>
    </div>
  );
};

export default Searchbar;
