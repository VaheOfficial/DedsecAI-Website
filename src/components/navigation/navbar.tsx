'use client';

import React from 'react';
import { Icon } from '../svg/svg.container';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="flex flex-row h-40 w-full backdrop-blur items-center justify-between">
            <div className="flex">
            <Icon 
                icon="logo" 
                width={150} 
                height={150} 
                className="ml-3"
                onClick={() => {
                window.location.href = '/';
                }}
            />
            </div>
            <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-10 text-white-white">
                <Link href="/" className="text-[50px] font-HACKED hover:text-gray-300 font-outline-2">Home</Link>
                <Link href="/about" className="text-[50px] font-HACKED hover:text-gray-300 font-outline-2">About</Link>
                <Link href="#contact" className="text-[50px] font-HACKED hover:text-gray-300 font-outline-2">Contact</Link>
            </ul>
            </nav>
        </div>
    );
  };

  export default Navbar;
