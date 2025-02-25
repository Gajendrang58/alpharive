import React from "react";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn(" shadow-lg rounded-xl p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
