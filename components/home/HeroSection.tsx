'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`;

    return (
        <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/cakes/cake_019.jpg')", // Using a cake image from the downloaded set
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-4 block text-lg font-medium uppercase tracking-widest text-[#B76E79] md:text-xl"
                    >
                        Welcome to {BUSINESS_INFO.name}
                    </motion.span>

                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        Hyderabad's Favorite <br />
                        <span className="text-[#FFB6C1]">Eggless Cakes</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
                        {BUSINESS_INFO.tagline}. We bring your dream cakes to life with fresh ingredients and custom designs.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#128C7E]"
                        >
                            <FaWhatsapp className="text-xl" />
                            Order on WhatsApp
                        </motion.a>

                        <Link href="/gallery" passHref>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="min-w-[200px] rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black"
                            >
                                View Our Cakes
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <svg
                    className="h-6 w-6 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;
