import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDF8F8]">
      {/* Top Section */}
      <div className="w-10/12 mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        
        {/* Links */}
        <div className="space-y-3">
          <h3 className="font-semibold">Links</h3>
          <ul className="space-y-1">
            <li><Link href="/company">Company</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        {/* Training */}
        <div className="space-y-3">
          <h3 className="font-semibold">Training</h3>
          <ul className="space-y-1">
            <li><Link href="#">Flutter</Link></li>
            <li><Link href="#">Mern Stack</Link></li>
            <li><Link href="#">Laravel</Link></li>
          </ul>
        </div>

        {/* Address + Social */}
        <div className="space-y-3">
          <h3 className="font-semibold">Our Address</h3>
          <p className="text-sm leading-6">
            D/58, Block-E Lalmatia, Dhaka <br /> 1207, Bangladesh
          </p>
          <div className="flex space-x-3">
            <Link
              href="#"
              className="bg-white rounded-full shadow hover:text-[#FA7470] transition mt-1"
            >
              <CiFacebook size={38} />
            </Link>
            <Link
              href="#"
              className="bg-white rounded-full shadow hover:text-[#FA7470] transition"
            >
              <TiSocialLinkedinCircular size={46} />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="font-semibold">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none"
            />
            <button className="bg-[#FA7470] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-6 text-sm text-center border-t border-gray-200">
        © 2023 All Rights Reserved Design by{" "}
        <span className="text-[#FA7470] font-medium">DeshIT-BD</span>
      </div>
    </footer>
  );
}
