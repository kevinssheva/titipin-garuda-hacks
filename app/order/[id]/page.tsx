"use client";

import Button from "@/app/components/Button";
import Dropdown, {
  DropdownOptionProps,
} from "@/app/components/Inputs/Dropdown";
import { useMemo, useState } from "react";

const Page = () => {
  const [value, setValue] = useState<DropdownOptionProps>({
    code: "",
    value: "",
  });

  const [payment, setPayment] = useState<DropdownOptionProps>({
    code: "",
    value: "",
  });

  const [harga, setHarga] = useState(10000);
  const beacukai = useMemo(() => harga * 0.1, [harga]);
  const ongkir = useMemo(
    () => (value.code ? parseInt(value.code) : 0),
    [value]
  );

  const totalHarga = useMemo(
    () => harga + beacukai + ongkir + 2000,
    [harga, beacukai, ongkir]
  );

  const priceToString = (price: number) => {
    return "Rp" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="mt-24 mb-24 container max-w-[60rem] mx-auto h-screen px-7">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="w-full bg-neutral-100 flex flex-col gap-2">
        <div className="flex flex-col bg-white text-sm py-5 px-3">
          <h1 className="font-semibold">Alamat Pengiriman</h1>
          <hr className="my-2" />
          <h1 className="font-semibold">Kevin Sebastian</h1>
          <h1>08123456789</h1>
          <p className="font-light text-neutral-500">Jl. Sekeola II no. 1</p>
          <p className="font-light text-neutral-500">
            Semarang Timur, Kota Semarang
          </p>
        </div>
        <div className="flex flex-col bg-white py-5 px-3 gap-1">
          <h1 className="font-semibold text-base">Armaro_bags</h1>
          <h1 className="font-light text-xs text-neutral-600 mb-4">
            Tangerang
          </h1>
          <div className="flex">
            <div className="flex-1 flex items-start gap-2">
              <div className="w-1/6 aspect-square bg-neutral-300"></div>
              <div className="text-sm">
                <p className="">Tas Ransel Apa Kek Gitu</p>
                <p className="font-bold">{priceToString(harga)}</p>
              </div>
            </div>
            <div className="flex-1 text-sm">
              <p className="font-semibold">Pengiriman</p>
              <Dropdown
                label="Pilih Pengiriman"
                value={value}
                onChange={(e) => setValue(e)}
                options={[
                  {
                    code: "20000",
                    value: "JNE",
                  },
                  {
                    code: "16000",
                    value: "J&T",
                  },
                  {
                    code: "22000",
                    value: "SiCepat",
                  },
                ]}
              />
              {value.code && (
                <div className="flex flex-col gap-1">
                  <p className="font-bold mt-3 mb-1">Kurir Pilihan</p>
                  <p>
                    {value.value} {"(" + priceToString(ongkir) + ")"}
                  </p>
                  <p>Estimasi tiba 25-28 Jul</p>
                </div>
              )}
            </div>
          </div>
          <hr className="mt-8 mb-4" />
          <div className="flex justify-between items-center font-bold">
            <p>Subtotal</p>
            <p>{priceToString(harga + ongkir)}</p>
          </div>
        </div>
        <div className="flex flex-col bg-white py-5 px-3 gap-2">
          <Dropdown
            label="Pilih Pembayaran"
            value={payment}
            onChange={(e) => setPayment(e)}
            options={[
              {
                code: "1",
                value: "QRIS",
              },
              {
                code: "2",
                value: "Virtual Account",
              },
              {
                code: "3",
                value: "Transfer Bank",
              },
            ]}
          />
          <h1 className="font-semibold mt-4 mb-2">Ringkasan Belanja</h1>
          <div className="flex justify-between text-sm">
            <p>Total Harga</p>
            <p>{priceToString(harga)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Biaya Ongkir</p>
            <p>{priceToString(ongkir)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Biaya Beacukai</p>
            <p>{priceToString(beacukai)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Biaya Jasa Aplikasi</p>
            <p>Rp2.000</p>
          </div>
          <hr />
          <div className="mb-10 font-bold flex justify-between">
            <p>Total Belanja</p>
            <p>{priceToString(totalHarga)}</p>
          </div>
          <Button label="Bayar" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Page;
