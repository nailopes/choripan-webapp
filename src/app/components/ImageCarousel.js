'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageCarousel = () => {
    const carouselRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Track the current scroll position
    const [scrollX, setScrollX] = useState(0);
    // Track if user is manually scrolling
    const [isManualScrolling, setIsManualScrolling] = useState(false);
    // Track if automatic scrolling should be paused (e.g., on hover)
    const [isPaused, setIsPaused] = useState(false);

    const choripanVariations = [
        { id: 1, src: '/images/carousel-images/choripan1.webp', alt: 'Classic Choripan' },
        { id: 2, src: '/images/carousel-images/choripan2.webp', alt: 'Gourmet Choripan' },
        { id: 3, src: '/images/carousel-images/choripan3.webp', alt: 'Spicy Choripan' },
        { id: 4, src: '/images/carousel-images/choripan1.webp', alt: 'Choriburger' },
        { id: 5, src: '/images/carousel-images/choripan2.webp', alt: 'Choriwrap' },
    ];

    // Auto-scroll animation
    useEffect(() => {
        let animationFrameId;
        let lastTimestamp = 0;
        const scrollSpeed = 2; // pixels per millisecond

        const animate = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const elapsed = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (carouselRef.current && inView && !isManualScrolling && !isPaused) {
                // Calculate new scroll position
                const newScrollX = scrollX + scrollSpeed * elapsed;

                // Get max scroll width (total content width minus visible width)
                const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

                // Loop back to start when reaching the end
                if (newScrollX >= maxScroll) {
                    setScrollX(0);
                    carouselRef.current.scrollLeft = 0;
                } else {
                    setScrollX(newScrollX);
                    carouselRef.current.scrollLeft = newScrollX;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        if (inView) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [inView, isManualScrolling, isPaused, scrollX]);

    // Handle manual interaction
    const handleManualScroll = () => {
        if (carouselRef.current) {
            setScrollX(carouselRef.current.scrollLeft);
            setIsManualScrolling(true);

            // Reset the manual scrolling flag after user stops scrolling
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setIsManualScrolling(false);
            }, 1000);
        }
    };

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
                    Choripan Photos
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="overflow-x-scroll scrollbar-hide"
                    ref={carouselRef}
                    onScroll={handleManualScroll}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
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
                                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300"></div>
                            </div>
                        ))}
                        {/* Duplicate the first few images to create a seamless loop effect */}
                        {choripanVariations.slice(0, 2).map((image) => (
                            <div
                                key={`duplicate-${image.id}`}
                                className="flex-shrink-0 w-64 h-48 relative group cursor-pointer"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageCarousel;