"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const menu = (
    <>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/">Home</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/about">About</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/clientfetch">Client Fetch</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/serverfetch">server Fetch</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/staticserverfetch">static server     fetch</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/studentlist">Student list</Link>
      <Link className="hover:bg-slate-300 p-2  border-collapse rounded-xl  border-t" href="/login">Login</Link>
    
    </>
  );
  const header = (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Practice NEXT . JS</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {menu}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {/* Content */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          {menu}
        </ul>
      </div>
    </div>
  );
  return path !== "/about" ? header : "";
};

export default Header;
