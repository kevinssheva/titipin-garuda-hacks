"use client";

import Input from "./Inputs/Input";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="fixed flex py-3 inset-x-0 bg-pink-200 shadow-xl">
      <div className="w-full flex">
        <Input
          id="search"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button label="Search" onClick={() => {}} outline />
      </div>
    </div>
  );
};

export default Navbar;
