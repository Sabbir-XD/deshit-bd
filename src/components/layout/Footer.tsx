import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDF8F8]">
      {/* Top Section */}
      <div className="w-11/12 mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 text-sm">
        {/* Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/company" className="hover:text-[#FA7470] transition">
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#FA7470] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#FA7470] transition"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Training */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">Training</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:text-[#FA7470] transition">
                Flutter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FA7470] transition">
                Mern Stack
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FA7470] transition">
                Laravel
              </Link>
            </li>
          </ul>
        </div>

        {/* Address + Social */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">Our Address</h3>
          <p className="text-sm sm:text-base leading-6">
            D/58, Block-E Lalmatia, Dhaka <br /> 1207, Bangladesh
          </p>
          <div className="flex space-x-3 mt-2">
            <Link
              href="#"
              className="rounded-full shadow p-1 hover:text-[#FA7470] transition"
            >
              <CiFacebook size={32} />
            </Link>
            <Link
              href="#"
              className="rounded-full shadow p-1 hover:text-[#FA7470] transition"
            >
              <TiSocialLinkedinCircular size={38} />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none"
            />
            <button className="bg-[#FA7470] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-6 text-sm sm:text-base text-center border-t border-gray-200">
        © 2023 All Rights Reserved Design by{" "}
        <span className="text-[#FA7470] font-medium">DeshIT-BD</span>
      </div>
    </footer>
  );
}
