"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/Layouts/mode-toggle";
import { Github, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md border-b border-dotted border-gray-400 dark:border-gray-600 ${
        isScrolled ? "bg-white/80 dark:bg-black/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-10 py-6">
        {/* Left Section */}
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-xl font-bold">
            GRaY/UI
          </Link>
          <div className="hidden md:flex space-x-12">
            <Link href="/pages/introduction" className="text-md font-medium transition duration-300 hover:text-neutral-400">
              Docs
            </Link>
            <Link href="/pages/button" className="text-md font-medium transition duration-300 hover:text-neutral-400">
              Components
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Link href="https://github.com/Rajat22UEE/GRAY_UI" target="_blank">
            <Github className="w-6 h-6 transition duration-300 hover:text-neutral-400" />
          </Link>
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-7 h-7" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/pages/introduction">Docs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pages/button">Components</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
