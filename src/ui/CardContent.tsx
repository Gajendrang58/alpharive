import React from "react";
import { cn } from "@/lib/utils";

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return <div className={cn("p-2", className)}>{children}</div>;
};

export default CardContent;
