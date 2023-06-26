"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const header = (
    <header className="flex items-center justify-center">
      <Link href="/" className="btn ml-6 mt-2">
        Home
      </Link>
      <Link href="/about" className="btn ml-6 mt-2">
        About
      </Link>
      <Link href="/clientfetch" className="btn ml-6 mt-2">
        Client Fetch
      </Link>
      <Link href="/serverfetch" className="btn ml-6 mt-2">
        server Fetch
      </Link>
      <Link href="/studentlist" className="btn ml-6 mt-2">
        Student list
      </Link>
      <Link href="/login" className="btn ml-6 mt-2">
        Login
      </Link>
    </header>
  );
  return path !== "/about" ? header : "";
};

export default Header;
