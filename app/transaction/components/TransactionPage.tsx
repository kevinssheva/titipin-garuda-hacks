"use client";

import { useMemo, useState } from "react";
import Search from "./Search";
import Status from "./Status";
import TransactionList from "./TransactionList";
import { TransactionCardProps } from "./TransactionCard";

const data: TransactionCardProps[] = [
  {
    id: "1",
    sellerImage: "",
    sellerName: "Gibran Jakarta Jos",
    productName: "Nama Produk Ini Adalah Unpaid",
    productImage: "",
    productQuantity: 2,
    totalPrice: 200000,
    status: "UNPAID",
  },
  {
    id: "2",
    sellerImage: "",
    sellerName: "Gibran Jakarta Jos",
    productName: "Nama Produk Ini Adalah On Going",
    productImage: "",
    productQuantity: 2,
    totalPrice: 200000,
    status: "ONGOING",
  },
];

const TransactionPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filteredData = useMemo(() => {
    if (filter === "ALL") {
      return data;
    } else {
      return data.filter((item) => item.status === filter);
    }
  }, [filter]);

  return (
    <div className="w-full flex flex-col gap-5">
      <Search query={query} onChange={(e) => setQuery(e.target.value)} />
      <Status active={filter} onChange={(id: string) => setFilter(id)} />
      <TransactionList data={filteredData} />
    </div>
  );
};

export default TransactionPage;
