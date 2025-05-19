import Header from './Header';
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title = 'MySite' }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Website built with Next.js and TailwindCSS" />
            </Head>
            <Header />
            <main className="max-w-7xl mx-auto p-4">{children}</main>
        </>
    );
}
