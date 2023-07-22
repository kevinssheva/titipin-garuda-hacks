import TransactionCard, { TransactionCardProps } from "./TransactionCard";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";
import useSWR from "swr";

const TransactionList = ({ data }: { data: TransactionCardProps[] }) => {
  // const { data: transaction } = useSWR(`http://localhost:3000/api/v1/all-transaction-buyer/${session.user.id}`, fetcher)

  return (
    <div className="w-full flex flex-col gap-5">
      {data.map((item) => (
        <TransactionCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TransactionList;
