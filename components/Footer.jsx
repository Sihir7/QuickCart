import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-16 lg:px-32 py-14 border-b border-gray-300">
        {/* Logo & Description */}
        <div className="flex-1">
          <Image className="w-28 md:w-32" src={assets.logo} alt="Company Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text since the
            1500s, when an unknown printer created a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1 md:flex justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a className="hover:underline transition" href="#">Home</a></li>
              <li><a className="hover:underline transition" href="#">About Us</a></li>
              <li><a className="hover:underline transition" href="#">Contact Us</a></li>
              <li><a className="hover:underline transition" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 md:flex justify-end">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p><a href="mailto:contact@greatstack.dev" className="hover:underline">contact@greatstack.dev</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="py-4 text-center text-xs md:text-sm">
        &copy; 2025 GreatStack.dev. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
