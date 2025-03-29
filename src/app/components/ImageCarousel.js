'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageCarousel = () => {
    const carouselRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const choripanVariations = [
        { id: 1, src: '/images/carousel-images/choripan1.webp', alt: 'Classic Choripan' },
        { id: 2, src: '/images/carousel-images/choripan2.webp', alt: 'Gourmet Choripan' },
        { id: 3, src: '/images/carousel-images/choripan3.webp', alt: 'Spicy Choripan' },
        { id: 4, src: '/images/carousel-images/choripan1.webp', alt: 'Traditional Choripan' },
        { id: 5, src: '/images/carousel-images/choripan2.webp', alt: 'Street Style Choripan' },
    ];

    return (
        <section
            id="gallery"
            className="py-16 bg-gray-50"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: inView ? 1 : 0,
                        y: inView ? 0 : 50
                    }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bondrians text-main-red text-center mb-8"
                >
                    Choripan Variations
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="overflow-x-scroll scrollbar-hide"
                    ref={carouselRef}
                >
                    <div className="flex space-x-6 pb-6">
                        {choripanVariations.map((image) => (
                            <div
                                key={image.id}
                                className="flex-shrink-0 w-64 h-48 relative group cursor-pointer"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageCarousel;