"use client";


import { Button } from "@/components/ui/button";
import { Github, Terminal } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <div className="w-full px-10 py-20">
        <div className="flex flex-col md:flex-row items-start justify-between w-full border border-dotted border-gray-300 dark:border-gray-600 rounded-lg p-16 min-h-[500px] gap-10">

          {/* Left Section */}
          <div className="md:w-1/2 space-y-10">
            <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              Effortlessly Fetch UI Components with <span className="text-gray-600 dark:text-gray-600 ">GRaY/UI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Streamline your development process by easily adding UI components to your project.
            </p>

            {/* Buttons */}
            <div className="flex space-x-6">
              <Button className="px-6 py-3 text-lg" asChild>
                <a href="/pages/introduction">Get Started</a>
              </Button>
              <Button variant="outline" className="px-6 py-3 text-lg flex items-center space-x-2" asChild>
                <a href="https://github.com/Rajat22UEE/GRAY_UI" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" /> <span>GitHub</span>
                </a>
              </Button>
            </div>

            {/* Command Terminal */}
            <div className="bg-neutral-900 text-green-400 p-5 rounded-lg font-mono text-lg flex items-center space-x-3">
              <Terminal className="w-6 h-6" />
              <span>npx gray_ui add &lt;component-name&gt;</span>
            </div>
          </div>

          {/* Right Section (Horizontally Divided) */}
          <div className="md:w-1/2 flex flex-row space-x-6">

            {/* First Section (2 Cards, Vertical Layout) */}
            <div className="w-1/2 space-y-6">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-52 bg-gray-200 dark:bg-neutral-900 flex items-center justify-center text-lg font-medium text-gray-800 dark:text-gray-200 rounded-lg shadow-sm"
                >
                  Card {index + 1}
                </div>
              ))}
            </div>

            {/* Second Section (3 Cards, Vertical Layout) */}
            <div className="w-1/2 space-y-6">

              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-32 bg-gray-200 dark:bg-neutral-900 flex items-center justify-center text-lg font-medium text-gray-800 dark:text-gray-200 rounded-lg shadow-sm"
                >
                  Card {index + 3}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
