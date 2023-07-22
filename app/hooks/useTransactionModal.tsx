import { create } from "zustand";
import { TransactionCardProps } from "../transaction/components/TransactionCard";

interface TransactionModalProps {
  data: TransactionCardProps | null;
  onOpen: (data: TransactionCardProps) => void;
  onClose: () => void;
}

const useTransactionModal = create<TransactionModalProps>((set) => ({
  data: null,
  onOpen: (data) => set({ data }),
  onClose: () => set({ data: null }),
}));

export default useTransactionModal;
