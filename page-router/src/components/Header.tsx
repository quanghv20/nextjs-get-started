'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const router = useRouter();

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-blue-600">
                        <Link href="/">MySite</Link>
                    </div>
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        'hover:text-blue-500 transition',
                                        router.pathname === item.href
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-700'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
