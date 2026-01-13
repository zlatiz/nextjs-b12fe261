"use client";
import Link from 'next/link';
import type { MouseEvent } from 'react';

type ButtonProps = {
  label: string;
  href?: string;
  variant?: 'solid' | 'ghost';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, href, variant = 'solid', onClick }: ButtonProps) {
  const base = 'px-4 py-2 rounded-md text-sm font-medium transition-transform duration-200';
  const solid = 'gradient-cta text-white shadow-md';
  const ghost = 'bg-transparent border border-[rgba(255,255,255,0.06)] text-white';

  if (href) {
    return (
      <Link href={href} className={`${base} ${variant === 'solid' ? solid : ghost}`}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variant === 'solid' ? solid : ghost}`}>
      {label}
    </button>
  );
}
