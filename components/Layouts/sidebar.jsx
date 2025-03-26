"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

const sections = [
  {
    title: "Get Started",
    links: [
      { name: "Introduction", path: "/pages/introduction" },
      { name: "Installation", path: "/pages/installation" },
    ],
  },
  {
    title: "Components",
    links: [
      { name: "Button", path: "/pages/button" },
      { name: "Card", path: "/pages/card" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname(); // Get the current route

  return (
    <aside className="w-72 bg-white/80 dark:bg-neutral-950 p-6 border border-dotted border-gray-400 dark:border-gray-600 rounded-2xl h-screen sticky top-16">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col space-y-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{section.title}</h2>
              <ul className="mt-4 text-neutral-600 dark:text-neutral-300">
                {section.links.map((link) => {
                  const isActive = pathname === link.path; // Check if the link is active

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className={`block w-64 my-2 py-2 px-4 rounded-lg transition-colors duration-200 
                                    ${isActive ? "bg-neutral-200 dark:bg-neutral-800" : "hover:bg-neutral-200 dark:hover:bg-neutral-800"}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
