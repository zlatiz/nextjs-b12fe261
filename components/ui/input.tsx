"use client";
import { useState } from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
};

export default function Input({ placeholder = '', value = '', onChange }: InputProps) {
  const [val, setVal] = useState<string>(value);
  return (
    <input
      className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-md px-3 py-2 text-sm"
      placeholder={placeholder}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
        onChange?.(e.target.value);
      }}
    />
  );
}
