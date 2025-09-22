"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/pic/Group 68 2.jpg";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
    { name: "Training", path: "/training" },
  ];

  return (
    <div className="navbar bg-base-100 px-4">
      {/* Left side (Logo) */}
      <div className="navbar-start">
        <Image src={logo} alt="Logo" width={153} height={27} />
      </div>

      {/* Right side (Menu) */}
      <div className="navbar-end">
        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    pathname === link.path
                      ? "text-[#FA8370]"
                      : "text-gray-700 hover:text-[#FA8370]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    pathname === link.path
                      ? "text-[#FA8370]"
                      : "text-gray-700 hover:text-[#FA8370]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
