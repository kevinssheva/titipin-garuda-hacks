import { create } from "zustand";

interface TransactionModalProps {
  idOpened: string;
  onOpen: (id: string) => void;
  onClose: () => void;
}

const useTransactionModal = create<TransactionModalProps>((set) => ({
  idOpened: "dddawd",
  onOpen: (id) => set({ idOpened: id }),
  onClose: () => set({ idOpened: "" }),
}));

export default useTransactionModal;
