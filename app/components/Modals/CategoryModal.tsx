"use client";

import Modal from "./Modal";
import useCategoryModal from "@/app/hooks/useCategoryModal";
import Image from "next/image";
import { useState } from "react";

const category = [
  {
    label: "Sports",
    img: "/landing/Sports.svg",
  },
  {
    label: "Art and Craft",
    img: "/landing/Art & Craft.svg",
  },
  {
    label: "Books",
    img: "/landing/Books.svg",
  },
  {
    label: "Cosmetic",
    img: "/landing/Cosmetic.svg",
  },
  {
    label: "Electronic",
    img: "/landing/Electronics.svg",
  },
  {
    label: "FnB",
    img: "/landing/fnb.svg",
  },
  {
    label: "Men Fashion",
    img: "/landing/Men Fashion.svg",
  },
  {
    label: "Shoes",
    img: "/landing/Shoes.svg",
  },
  {
    label: "Toys",
    img: "/landing/Toys.svg",
  },
  {
    label: "Women Fashion",
    img: "/landing/Women Fashion.svg",
  },
];
const CategoryModal = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "Sports",
  ]);

  const handleChange = (label: string) => {
    setSelectedCategory((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        if (prev.length === 3) {
          return prev;
        }
        return [...prev, label];
      }
    });
  };

  const CategoryModal = ({
    label,
    img,
    active,
  }: {
    label: string;
    img: string;
    active: boolean;
  }) => {
    return (
      <div
        className={`cursor-pointer border inline-flex flex-col items-center justify-center w-[27%] p-3 rounded-lg text-center aspect-square
        ${active ? "border-mariner-500" : "border-neutral-300"}
        ${active ? "bg-mariner-200" : "border-neutral-300"}
      `}
        onClick={() => handleChange(label)}
      >
        <Image
          src={img}
          alt={label}
          width={100}
          height={100}
          className="w-[80%] aspect-square"
        />
        <p>{label}</p>
      </div>
    );
  };
  const bodyContent = (
    <div className="flex flex-col gap-2 max-h-[50vh] overflow-auto">
      <div className="flex flex-wrap gap-3 justify-center">
        {category.map((item) => (
          <CategoryModal
            key={item.img}
            label={item.label}
            img={item.img}
            active={selectedCategory.includes(item.label)}
          />
        ))}
      </div>
    </div>
  );

  const categoryModal = useCategoryModal();
  return (
    <Modal
      isOpen={categoryModal.isOpen}
      title="Preferences"
      actionLabel="Save"
      onClose={categoryModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default CategoryModal;
