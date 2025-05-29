"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Text from "./Text";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 px-6 border-b border-zinc-200 dark:border-zinc-700">
      <nav className="flex gap-6 justify-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <Text
                className="hover:text-teal-500 dark:hover:text-teal-400 transition"
                highlighted={isActive}
              >
                {item.label}
              </Text>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
