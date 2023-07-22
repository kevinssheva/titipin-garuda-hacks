"use client";

import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Button";
import {useState} from "react";
import Dropdown, { DropdownOptionProps } from "../Inputs/Dropdown";
import { Country, State, City } from "country-state-city";

const Searchbar = () => {

  const [location, setLocation] = useState({ value: "", code: "" });
  const countries = Country.getAllCountries();

  return (
    <div className="w-full flex gap-3">
      <div className="relative flex-1">
        <input
          placeholder=" "
          id="name"
          type="text"
          className="peer bg-neutral-100 border-neutral-300 border-[1px] rounded-md py-1 px-2 w-full h-12"
        />
        <div className="peer-placeholder-shown:flex hidden absolute items-center gap-1 text-neutral-300 top-1/2 -translate-y-1/2 left-2">
          <FaSearch />
          <label htmlFor="name" className="text-sm line-clamp-1">
            Search your product
          </label>
        </div>
      </div>
      <div className="relative w-1/6">
        <Dropdown
          label="Country"
          value={location}
          onChange={(newValue: DropdownOptionProps) =>
            setLocation(newValue)
          }
          options={countries.map((country) => {
            return {
              code: country.isoCode,
              value: country.name,
            };
          })}
        />
      </div>
      <div className="p-0 m-0 h-auto w-1/6">
        <Button label="Search" onClick={() => {}} small />
      </div>
    </div>
  );
};

export default Searchbar;
