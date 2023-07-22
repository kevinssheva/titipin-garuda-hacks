"use client";

import useTransactionModal from "@/app/hooks/useTransactionModal";
import Modal from "./Modal";

const TransactionModal = () => {
  const bodyContent = (
    <div className="flex flex-col gap-2 bg-neutral-200 max-h-[50vh] overflow-auto">
      <div className=" py-5 px-3 bg-white">
        <h1 className="font-semibold">On Going</h1>
        <hr className="border-neutral-300 border-dashed my-3" />
        <div className="flex justify-between">
          <p className="font-light text-sm">No Invoice</p>
          <p className="font-bold text-sm text-mariner-500">
            INV/20230715/MPL/3347309582
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font-light text-sm">Tanggal Pembelian</p>
          <p className="text-sm">15 Juli 2023, 22:32 WIB</p>
        </div>
      </div>
      <div className="py-5 px-3 bg-white">
        <div className="flex justify-between">
          <h1 className="font-semibold">Detail Produk</h1>
          <h1 className="font-bold text-sm">Toko Gibran</h1>
        </div>
        <div className="flex w-full border-neutral-300 rounded-lg border-[1.7px] px-3 py-2 gap-3">
          <div className="w-[10%] aspect-square bg-neutral-200"></div>
          <div className="flex-1 border-r-[1px] border-neutral-300 flex flex-col justify-center">
            <h1 className="font-semibold text-sm">
              NAMA BARANG INI ADALAH BLA BLA BLA
            </h1>
            <p className="font-light text-xs">2 x Rp720.000</p>
          </div>
          <div className="pl-8 pr-2 flex flex-col justify-center">
            <p className="text-sm font-light">Total Harga</p>
            <h1 className="font-semibold">Rp720.000</h1>
          </div>
        </div>
      </div>
      <div className="py-5 px-3 bg-white">
        <h1 className="font-semibold">Info Pengiriman</h1>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <p className="font-light w-1/4">Kurir</p>
            <p className="mx-3">:</p>
            <p>AnterAja - Reguler</p>
          </div>
          <div className="flex text-sm">
            <p className="font-light w-1/4">No Resi</p>
            <p className="mx-3">:</p>
            <p>1000298309</p>
          </div>
          <div className="flex text-sm">
            <p className="font-light w-1/4">Kurir</p>
            <p className="mx-3">:</p>
            <div className="flex flex-col">
              <p className="font-semibold">Kevin Sebastian</p>
              <p>6285236961165</p>
              <p>Jl. Cisitu Indah V no. 10</p>
              <p>Bandung, Jawa Barat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-3 bg-white">
        <h1>Rincian Pembayaran</h1>
        <div className="flex flex-col text-sm gap-2">
          <div className="flex justify-between">
            <p>Metode Pembayaran</p>
            <p>BCA Virtual Account</p>
          </div>
          <hr className="border-dashed border-neutral-300" />
          <div className="flex justify-between">
            <p>Total Harga {"(1 barang)"}</p>
            <p>Rp200.000</p>
          </div>
          <div className="flex justify-between">
            <p>Bea Cukai</p>
            <p>Rp200.000</p>
          </div>
          <div className="flex justify-between">
            <p>Total Ongkos Kirim</p>
            <p>Rp200.000</p>
          </div>
          <hr className="border-dashed border-neutral-300" />
          <div className="flex justify-between">
            <p className="font-semibold">Total Belanja</p>
            <p className="font-semibold">Rp200.000</p>
          </div>
        </div>
      </div>
    </div>
  );

  const transactionModal = useTransactionModal();
  return (
    <Modal
      isOpen={transactionModal.idOpened !== ""}
      title="Detail Transaksi"
      actionLabel="Beri Ulasan"
      onClose={transactionModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default TransactionModal;
