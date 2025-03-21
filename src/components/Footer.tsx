
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-5 mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  "bg-white/20 backdrop-blur-md border border-white/20 shadow-sm dark:bg-slate-800/40",
                  "hover:bg-white/30 dark:hover:bg-slate-800/60",
                  "text-slate-800 dark:text-white"
                )}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            © {new Date().getFullYear()} Yoga Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
