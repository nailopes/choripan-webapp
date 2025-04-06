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
                        className="relative z-10 transform translate-y-1/3 lg:translate-y-1/4 w-36 h-36 md:w-40 md:h-40 lg:w-52 lg:h-52"
                    />
                </Link>

                {/* Social Media (Left Side - Hidden on Small Screens, Visible on Tablets and Larger) */}
                <div className="hidden md:flex space-x-4">
                    {/* <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiFacebook size={28} />
                    </a> */}
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiInstagram size={28} />
                    </a>
                    {/* <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                    >
                        <SiX size={28} />
                    </a> */}
                </div>

                {/* Navigation Button & Dropdown (Always viseble)*/}
                <div className="relative ml-auto">
                    <Link href="/" className='font-bondrians text-xl px-5'>Home
                    </Link>
                    <Link href="/about" className='font-bondrians text-xl px-5'>About Us
                    </Link>
                    <Link href="/contact" className='font-bondrians text-xl px-5'>Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;