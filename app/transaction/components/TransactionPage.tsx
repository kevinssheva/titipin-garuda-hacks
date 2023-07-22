"use client";

import { useMemo, useState } from "react";
import Search from "./Search";
import Status from "./Status";
import TransactionList from "./TransactionList";
import { TransactionCardProps } from "./TransactionCard";

const TransactionPage = ({transaction}: {transaction: TransactionCardProps[]}) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filteredData = useMemo(() => {
    if (filter === "ALL") {
      return transaction;
    } else {
      return transaction.filter((item) => item.status === filter);
    }
  }, [filter, transaction]);

  return (
    <div className="w-full flex flex-col gap-5">
      <Search query={query} onChange={(e) => setQuery(e.target.value)} />
      <Status active={filter} onChange={(id: string) => setFilter(id)} />
      <TransactionList data={filteredData} />
    </div>
  );
};

export default TransactionPage;
