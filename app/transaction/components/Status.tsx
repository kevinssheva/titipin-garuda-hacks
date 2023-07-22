"use client";

import { useState } from "react";

const Status = ({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) => {
  const statusData = [
    {
      label: "All",
      id: "ALL",
    },
    {
      label: "Unpaid",
      id: "UNPAID",
    },
    {
      label: "On Going",
      id: "ONGOING",
    },
    {
      label: "On Delivery",
      id: "ONDELIVERY",
    },
    {
      label: "Successful",
      id: "SUCCESSFUL",
    },
    {
      label: "Failed",
      id: "FAILED",
    },
  ];

  const StatusElement = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick?: () => void;
  }) => {
    return (
      <div
        className={`cursor-pointer px-3 py-1 border-[1.5px] border-black text-sm rounded-lg text-black
          ${active && "border-mariner-500 text-mariner-500 bg-mariner-100"}
        `}
        onClick={onClick}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-2">
      <p className="font-semibold">Status</p>
      {statusData.map((item) => (
        <StatusElement
          key={item.id}
          label={item.label}
          active={active === item.id}
          onClick={() => onChange(item.id)}
        />
      ))}
    </div>
  );
};

export default Status;
