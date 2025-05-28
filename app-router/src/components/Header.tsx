"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // cần cài clsx để dễ xử lý className

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Projects", href: "/projects" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="p-4 border-b flex gap-4">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                        "hover:text-teal-500 transition-colors",
                        pathname === item.href
                            ? "text-teal-600 font-semibold"
                            : "text-zinc-700"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </header>
    );
}
