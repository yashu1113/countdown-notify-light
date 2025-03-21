
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date 15 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Countdown is over
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Create the individual time unit display boxes
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div 
      className={cn(
        "countdown-card flex flex-col items-center justify-center p-4 sm:p-6",
        "w-20 h-20 sm:w-24 sm:h-24 mx-2 sm:mx-3",
        "min-w-[5rem] sm:min-w-[6rem]", 
        "animate-fade-in"
      )}
    >
      <span className="text-yoga-purple font-bold text-2xl sm:text-4xl font-mono tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center animate-slide-down" style={{ animationDelay: "0.2s" }}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
