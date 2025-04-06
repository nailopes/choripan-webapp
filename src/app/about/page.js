"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100  pt-40 py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Hero Image */}
                        <div className="md:w-1/2">
                            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                                <Image
                                    src="/images/hero-choripan.png"
                                    alt="Traditional Choripan being served"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold text-main-red mb-6">A Tradition of Excellence</h1>
                            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                                For over 25 years, Choripan has carried the legacy of authentic South American flavors, passed down through generations and now brought to Calgary with pride, care, and the finest ingredients.
                            </p>
                            <div className="flex gap-6">
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-main-red">25+</span>
                                    <span className="text-gray-700">Years of Tradition</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-main-red">100%</span>
                                    <span className="text-gray-700">Authentic Recipe</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-main-red">1999</span>
                                    <span className="text-gray-700">First Batch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Legacy</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-semibold text-main-red mb-4">The Original Choripan</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                It began in 1999 when Hussa, a Brazilian with a deep appreciation for his wife's Uruguayan culinary heritage, created his first batch of homemade chorizo. What started as weekend cooking with a close friend soon became a family tradition celebrated for its distinctive taste and quality.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By 2009, this passion led to the opening of the first Choripan restaurant in Curitiba, Brazil. Though the physical location was short-lived, Hussa continued crafting his signature sausages and selling them by the kilogram to loyal customers, preserving the authentic techniques and flavors that made them special.                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="/images/hussa.jpeg"
                                alt="Hussa - The Founder"
                                width={250}
                                height={250}
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                            <Image
                                src="/images/original-restaurant.jpeg"
                                alt="Original Choripan in Brazil"
                                width={250}
                                height={250}
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                            <Image
                                src="/images/meat-grinder.jpg"
                                alt="The Original 1999 Meat Grinder"
                                width={250}
                                height={250}
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                            <Image
                                src="/images/chorizo-making.jpg"
                                alt="Traditional Chorizo Making"
                                width={250}
                                height={250}
                                className="rounded-lg shadow-md object-cover w-full h-full"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl font-semibold text-main-red mb-4">From South America to Calgary</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The legacy continued when Hussa passed down the meat grinder, used since the very first batch in 1999, to his son Alex. This symbolic gesture marked the passing of the family recipe. With the recipe in hand, Alex invited his friend Fabio to partner with him in reviving the tradition, and together, they are bringing the family’s culinary heritage to Calgary.                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Introducing "The Best SAUSWICH in the world" where every bite is packed with tradition and flavor. Each bite delivers the genuine taste of South American street food culture, prepared with care and served with pride.
                            </p>
                            <p className="text-gray-700 mt-4">
                                We can&apos;t wait to share this experience with you. Find us, follow us, and take a bite—you&apos;ll taste the tradition in every sandwich.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Tradition */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-main-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tradition</h3>
                            <p className="text-gray-600">
                                Honoring our roots and the authentic methods passed down through generations.
                            </p>
                        </div>

                        {/* Excellence */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-main-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
                            <p className="text-gray-600">
                                Committing to quality in every ingredient and every step of our process.
                            </p>
                        </div>

                        {/* Trust */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-main-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust</h3>
                            <p className="text-gray-600">
                                Building relationships through consistency and transparency in everything we do.
                            </p>
                        </div>

                        {/* Comfort */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-main-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comfort</h3>
                            <p className="text-gray-600">
                                Creating food that feels like home, no matter where you're from.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">The People Behind Choripan</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Meet the team carrying forward a legacy of authentic South American flavors to the streets of Calgary.
                    </p>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Alex */}
                        <div className="flex items-center">
                            <div className="mr-6">
                                <Image
                                    src="/images/alex.jpeg"
                                    alt="Alex - Co-Founder"
                                    width={600}
                                    height={600}
                                    className="rounded-full border-4 border-main-red shadow-md"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alex</h3>
                                <p className="text-main-red font-medium mb-3">Co-Founder</p>
                                <p className="text-gray-700">
                                    With deep roots in Uruguay and a childhood filled with authentic cooking, Alex brings his father's legacy to Calgary with the same passion that started it all.
                                </p>
                            </div>
                        </div>

                        {/* Fabio */}
                        <div className="flex items-center">
                            <div className="mr-6">
                                <Image
                                    src="/images/fabio.jpeg"
                                    alt="Fabio - Co-Founder"
                                    width={600}
                                    height={600}
                                    className="rounded-full border-4 border-main-red shadow-md"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fabio</h3>
                                <p className="text-main-red font-medium mb-3">Co-Founder</p>
                                <p className="text-gray-700">
                                    As a passionate food lover, Fabio is dedicated to turning traditional recipes into some of Calgary's most exciting culinary experiences—bringing fresh perspectives to the local restaurant scene for the first time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-main-red text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>

    );
}