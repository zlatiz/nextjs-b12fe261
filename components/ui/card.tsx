"use client";
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="glass-card p-3 shadow-sm">
      {children}
    </div>
  );
}
