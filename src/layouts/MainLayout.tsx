
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div 
      className={cn(
        "min-h-screen flex flex-col relative overflow-hidden",
        "bg-yoga-bg bg-cover bg-center bg-fixed bg-no-repeat",
        "before:content-[''] before:absolute before:inset-0 before:bg-white/20 dark:before:bg-black/60 before:backdrop-blur-sm"
      )}
    >
      <ThemeToggle />
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
