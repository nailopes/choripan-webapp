'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Facebook, Instagram, Twitter, TwitterIcon, X } from 'lucide-react';

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
        <nav className="relative w-full bg-white z-50 shadow-md">
            <div className="relative container mx-auto px-6 py-4 flex items-center justify-between h-[9.5rem]">

                {/* Logo (Centered with Semi-Circle Effect) */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/images/logo.webp"
                        alt="Choripan Logo"
                        width={200}
                        height={200}
                        className="relative z-10 transform translate-y-1/4"
                    />
                </div>

                {/* Social Media (Left Side) */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                    >
                        <Facebook size={28} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <Instagram size={28} />
                    </a>
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <Twitter size={28} />
                    </a>
                </div>

                {/* Navigation Button & Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    {/* Button to Open Dropdown */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2 border-2 border-main-red text-main-red px-4 py-2 rounded-lg hover:bg-main-red hover:text-white transition"
                    >
                        <Menu size={24} />
                        <span className="font-semibold">Navigation</span>
                    </button>

                    {/* Dropdown Menu (Appears Below Button) */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-3">
                            <ul className="flex flex-col items-center space-y-3 text-lg font-semibold">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-2 hover:bg-gray-100 rounded transition"
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