'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, TwitterIcon, X } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // TODO: Implement actual subscription logic
        if (email) {
            alert(`Subscribed with email: ${email}`);
            setEmail('');
        }
    };
    const openExternalLink = (url) => {
        if (typeof window !== "undefined") {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4 flex flex-col items-center gap-12 text-center">
                {/* Subscription Section */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-2xl font-bondrians mb-6">Subscribe for updates!</h3>
                    <form onSubmit={handleSubscribe} className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-l-full text-dark-brown"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-accent-orange px-6 py-2 rounded-r-full hover:bg-dark-brown transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bondrians mb-6">Follow Us!</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                        >
                            <SiFacebook size={28} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                        >
                            <SiInstagram size={28} />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-orange hover:bg-white hover:text-black transition-colors"
                        >
                            <SiX size={28} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center">
                    <ul className="flex flex-row space-x-6 font-sitka">
                        <li><Link href="#home" className="hover:text-accent-orange">Home</Link></li>
                        <li><Link href="#about" className="hover:text-accent-orange">About Us</Link></li>
                        <li><Link href="#contact" className="hover:text-accent-orange">Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 border-t border-gray-700 pt-6 font-sitka">
                <p>&copy; {new Date().getFullYear()} CHORIPAN FOODS INC. All Rights Reserved.</p>
            </div>
        </footer>
    );

};

export default Footer;