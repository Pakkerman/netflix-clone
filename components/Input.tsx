import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className="
        text-md
        invalid:border-b-1
        peer
        block
        w-full
        appearance-none
        rounded-md
      bg-neutral-700
        px-6
        pt-6
        pb-1
        text-white
        focus:outline-none
        focus:ring-0"
        placeholder=" "
      />
      <label
        className="
        text-md 
        absolute
      top-4
        left-6 
        z-10 
        origin-[0] 
        -translate-y-3 
        scale-75 
        transform 
        text-zinc-400 
        duration-150
        peer-placeholder-shown:translate-y-0 
        peer-placeholder-shown:scale-100 
        peer-focus:-translate-y-3
        peer-focus:scale-75
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
