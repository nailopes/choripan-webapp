'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative mt-0 h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src="/images/hero-background.jpg"
                alt="Choripan Hero Background"
                layout="fill"
                objectFit="cover"
                quality={90}
                priority
                className="absolute inset-0 z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="relative z-20 text-center text-white px-4"
            >
                <h1 className="text-5xl md:text-8xl font-bondrians mb-4 text-white">
                    Choripan
                </h1>
                <p className="text-2xl md:text-3xl font-sitka mb-6 text-white">
                    The Best Sandwich in the World
                </p>
                <button className="bg-main-red text-white px-8 py-3 rounded-full hover:bg-dark-brown transition-colors">
                    Explore Menu
                </button>
            </motion.div>
        </section>
    );
};

export default HeroSection;