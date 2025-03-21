
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <h1 className="text-3xl sm:text-4xl font-light text-gradient">
        Yoga Center
      </h1>
      <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 mt-2 rounded-full"></div>
    </div>
  );
};

export default Logo;
