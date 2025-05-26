// src/app/layout.tsx
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "My App",
  description: "An Apple-style site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <body className="bg-white text-black antialiased">
        <header className="fixed top-0 w-full bg-white z-50">
          <nav className="max-w-7xl mx-auto px-4 flex items-center justify-center h-16 space-x-8">
            {/* Logo: replace '/logo.png' with your image */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/img/logo.jpg" alt="Logo" width={40} height={40} />
            </Link>
            <div className="flex space-x-8 text-sm font-medium">
              <Link href="/workout" className="hover:underline">
                Workout
              </Link>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </div>
          </nav>
        </header>

        {/* Push content below the fixed header */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
