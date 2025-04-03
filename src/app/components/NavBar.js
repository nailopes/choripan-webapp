'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="relative w-full bg-white z-50 ">
            <div className="relative container mx-auto px-6 py-4 flex items-center justify-between h-32 lg:h-[9.5rem]">

                {/* Logo (Centered with Semi-Circle Effect) */}
                <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 ">
                    <Image
                        src="/images/logo-round.webp"
                        alt="Choripan Logo"
                        width={200}
                        height={200}
                        className="relative z-10 transform translate-y-1/3 lg:translate-y-1/4 w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52"
                    />
                </Link>

                {/* Social Media (Left Side - Hidden on Small Screens, Visible on Tablets and Larger) */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiFacebook size={28} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiInstagram size={28} />
                    </a>
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiX size={28} />
                    </a>
                </div>

                {/* Navigation Button & Dropdown (Always viseble)*/}
                <div className="relative ml-auto" ref={dropdownRef}>
                    {/* Button to Open Dropdown */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                          flex items-center justify-center
                         border-2 border-main-red
                         hover:bg-white hover:text-main-red
                         bg-main-red text-white transition
                         rounded-lg

                         w-12 h-12                   /* Square on small screens */
                         md:w-32 md:h-12             /* medium rectangle on md screens */
                         lg:w-48 lg:px-6 lg:py-3     /* larger button with padding on large+  */">
                        <Menu size={20} className="sm:size-5 md:size-6" />
                        <span className="font-semibold hidden lg:inline text-base ml-2">
                            Navigation
                        </span>
                    </button>

                    {/* Dropdown Menu (Appears Below Button) */}
                    {isOpen && (
                        <div className="absolute right-0 md:w-full bg-white shadow-lg rounded-lg py-3 top-full mt-2 border border-gray-200">
                            <ul className="flex flex-col items-center space-y-3 text-lg font-semibold">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block w-full text-center px-4 py-2 hover:bg-gray-100 rounded transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;