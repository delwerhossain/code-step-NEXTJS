"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const path = usePathname()
    console.log(path);
    const header = (
      <header className="flex items-center justify-center">
        <Link href="/" className="btn ml-6 mt-2">
          Home
        </Link>
        <Link href="/about" className="btn ml-6 mt-2">
          About
        </Link>
        <Link href="/login" className="btn ml-6 mt-2">
          Login
        </Link>
      </header>
    );
    return path !== "/about" ? header : "";
};

export default Header;