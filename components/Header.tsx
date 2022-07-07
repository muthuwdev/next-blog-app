import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between p-4  mx-auto max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="text-blue-800  font-bold text-lg cursor-pointer">
            TechBitz
          </div>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
          <h3>About</h3>

          <h3 className=" text-white bg-blue-400 px-4 py-1 rounded-full ">
            Contact
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-blue-600">
        <h3>Featured</h3>
        <h3 className="border px-4 py-1 rounded-full border-blue-600">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
