'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/constants';

const AboutSection = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="font-serif text-3xl font-bold leading-tight text-gray-900 md:text-4xl text-brand-gradient">
                            Creating Sweet Memories Since [Year]
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            At {BUSINESS_INFO.name}, we believe every celebration deserves a cake that's not just delicious but also a work of art.
                            We started from a simple love of baking and a desire to bring smiles to celebrations across Hyderabad.
                        </p>
                        <div className="border-l-4 border-rose-400 bg-rose-50 p-6">
                            <p className="font-medium text-rose-900 italic">
                                "All our cakes are 100% eggless and made fresh to order. Whether it's your little one's favorite cartoon character or an elegant wedding cake, we pour our heart into every creation."
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['100% Vegetarian', 'Made Fresh', 'Custom Designs', 'Hygiene Assured'].map((badge) => (
                                <span key={badge} className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[500px]"
                    >
                        <Image
                            src="/images/cakes/cake_006.jpg" // Using another download image
                            alt="Delicious Cake by Danny's Delight"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
