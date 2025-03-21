
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NotificationForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! You'll be notified when we launch.");
      setEmail("");
      setIsSubmitting(false);
      
      // In a real app, you would send this to your backend
      console.log("Email submitted:", email);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex flex-col sm:flex-row w-full gap-3">
        <div className="relative flex-grow">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for launch updates"
            className={cn(
              "glass-input w-full px-4 py-6 rounded-xl",
              "text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400",
              "focus:ring-2 focus:ring-yoga-purple/50",
              "border-yoga-purple/20 dark:border-yoga-purple/20",
              "h-auto text-base"
            )}
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "px-5 py-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center",
            "bg-yoga-purple hover:bg-yoga-purple/90 active:bg-yoga-purple",
            "dark:bg-yoga-purple dark:hover:bg-yoga-purple/90",
            "text-white shadow-md hover:shadow-lg h-auto",
            isSubmitting ? "opacity-80 cursor-not-allowed" : ""
          )}
        >
          {isSubmitting ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <Mail className="w-5 h-5 mr-2" /> Notify Me
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default NotificationForm;
