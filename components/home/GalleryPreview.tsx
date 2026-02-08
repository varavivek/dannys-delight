'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { CAKE_IMAGES } from '@/lib/constants';

const GalleryPreview = () => {
    // Take first 8 images for preview
    const previewImages = CAKE_IMAGES.slice(0, 8);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl text-brand-gradient">
                            Latest Creations
                        </h2>
                        <p className="mt-2 text-gray-600">
                            A glimpse into our kitchen. Explore our recent masterpiece cakes.
                        </p>
                    </div>
                    <Link href="/gallery" passHref>
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="hidden items-center gap-2 font-semibold text-rose-600 transition-colors hover:text-rose-700 md:flex"
                        >
                            View Full Gallery <FaArrowRight />
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                    {previewImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute bottom-0 p-4 w-full">
                                    <p className="text-white font-medium truncate">Custom Cake Design</p>
                                    <p className="text-white/80 text-sm">View Details</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <Link href="/gallery" passHref>
                        <button className="flex items-center gap-2 rounded-full border border-rose-200 px-6 py-3 font-semibold text-rose-600 transition-colors hover:bg-rose-50">
                            View All Gallery <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
