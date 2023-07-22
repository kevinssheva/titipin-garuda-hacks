"use client";

import Input from "@/app/components/Inputs/Input";

const Search = ({
  query,
  onChange,
}: {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full">
      <Input id="search" label="Search" value={query} onChange={onChange} />
    </div>
  );
};

export default Search;
