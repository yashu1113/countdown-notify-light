
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Logo from "@/components/Logo";
import CountdownTimer from "@/components/CountdownTimer";
import NotificationForm from "@/components/NotificationForm";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <MainLayout>
        <div className="container mx-auto flex flex-col items-center justify-center max-w-3xl">
          <Logo className="mb-12 animate-fade-in" />
          
          <h2 className="text-xl sm:text-2xl font-light text-center text-white mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our website is launching soon. Stay tuned for something amazing.
          </h2>
          
          <CountdownTimer />
          
          <NotificationForm />
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
