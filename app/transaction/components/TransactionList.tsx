import TransactionCard, { TransactionCardProps } from "./TransactionCard";

const TransactionList = ({ data }: { data: TransactionCardProps[] }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {data.map((item) => (
        <TransactionCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TransactionList;
