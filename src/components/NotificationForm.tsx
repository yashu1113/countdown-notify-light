
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for launch updates"
            className={cn(
              "glass-input w-full px-4 py-3 rounded-xl",
              "text-slate-800 dark:text-white placeholder:text-slate-500",
              "focus:outline-none focus:ring-2 focus:ring-yoga-purple/50",
              "transition-all duration-300"
            )}
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center",
            "bg-yoga-purple hover:bg-opacity-90 active:bg-opacity-100 text-white",
            "shadow-md hover:shadow-lg",
            isSubmitting ? "opacity-80 cursor-not-allowed" : ""
          )}
        >
          {isSubmitting ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" /> Notify Me
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NotificationForm;
