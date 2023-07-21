"use client";

import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  value,
  required,
  onChange,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700
            absolute
            top-5
            left-2
          "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        onChange={onChange}
        placeholder=" "
        type={type}
        value={value}
        required={required}
        className={`
          peer
          w-full
          p-2
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
        `}
      />
      <label
        className={`
          absolute 
          text-sm
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          text-neutral-500
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-110 
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-100
          peer-focus:-translate-y-4
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
