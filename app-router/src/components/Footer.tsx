"use client";
import Link from "next/link";
import { navItems } from "@/app/constants";
import { usePathname } from "next/navigation";
import Text from "./Text";

export default function Footer() {
    const pathname = usePathname();
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-700 pt-10 pb-16">
            <div className="flex flex-col items-center gap-4">
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
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
                <Text className="text-xs text-zinc-500 dark:text-zinc-400">
                    © {year} Quang Cối. All rights reserved.
                </Text>
            </div>
        </footer>
    );
}
