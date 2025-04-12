'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

const AboutSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="about"
            className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center"
            ref={ref}
        >
            {/* Image Container */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : -50
                }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-square"
            >
                <Image
                    src="/images/apron.JPG"
                    alt="Choripan History"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : 50
                }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <h2 className="text-4xl font-bondrians text-main-red mb-4">
                    Our Story
                </h2>
                <p className="text-lg font-sitka text-dark-brown leading-relaxed">
                    Choripan is more than just a business—it&apos;s a tradition, a passion, and a story that spans over 25 years. What
                    started in 1999 as a homemade chorizo tradition between friends has evolved into a celebration of South American street food.
                </p>
                <p className="text-lg font-sitka text-dark-brown leading-relaxed mb-6">
                    Now based in Calgary, we bring you "The best SAUSWICH in the world”, crafted with love, tradition, and authentic taste.
                </p>
                <Link href="/about">
                    <button className="bg-accent-orange text-white px-6 py-3 mt- rounded-full hover:bg-main-red transition-colors font-sitka">
                        Learn More
                    </button>
                </Link>
            </motion.div>
        </section>
    );
};

export default AboutSection;