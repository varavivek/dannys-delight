'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CAKE_IMAGES, BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const categories = ['All', 'Birthday', 'Wedding', 'Theme', 'Cupcakes', 'Other'];

// Helper to deterministically assign a category based on index for demo purposes
const getCategory = (index: number) => {
    const types = ['Birthday', 'Wedding', 'Theme', 'Cupcakes', 'Other'];
    return types[index % types.length];
};

const galleryImages = CAKE_IMAGES.map((img, index) => ({
    ...img,
    id: index,
    category: getCategory(index),
    title: `${getCategory(index)} Cake Design ${index + 1}`,
}));

const GalleryGrid = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const filteredImages = filter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    const handleImageClick = (originalIndex: number) => {
        // Find the index in the filtered array corresponding to the clicked image
        const indexInFiltered = filteredImages.findIndex(img => img.id === originalIndex);
        setSelectedImageIndex(indexInFiltered);
    };

    const handleCloseLightbox = () => setSelectedImageIndex(null);

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev! + 1) % filteredImages.length);
        }
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
        }
    };

    const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

    return (
        <div className="py-12">
            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setFilter(cat);
                            setSelectedImageIndex(null);
                        }}
                        className={cn(
                            "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                            filter === cat
                                ? "bg-rose-500 text-white shadow-md transform scale-105"
                                : "bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            layout
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg"
                            onClick={() => handleImageClick(image.id)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && currentImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={handleCloseLightbox}
                    >
                        <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl" onClick={e => e.stopPropagation()}>

                            {/* Close Button */}
                            <button
                                onClick={handleCloseLightbox}
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                                {/* Image Container */}
                                <div className="relative flex-1 bg-black min-h-[300px] md:min-h-[500px]">
                                    <Image
                                        src={currentImage.src}
                                        alt={currentImage.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 70vw"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                                    >
                                        <FaArrowRight />
                                    </button>
                                </div>

                                {/* Info Panel */}
                                <div className="w-full md:w-80 flex flex-col justify-between p-6 bg-white overflow-y-auto">
                                    <div>
                                        <span className="mb-2 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600">
                                            {currentImage.category}
                                        </span>
                                        <h3 className="mb-2 text-2xl font-serif font-bold text-gray-900">{currentImage.title}</h3>
                                        <p className="mb-6 text-gray-600 text-sm">
                                            Handcrafted with 100% eggless ingredients. Customizable to your theme and flavor preferences.
                                        </p>
                                    </div>

                                    <a
                                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGES.gallery(currentImage.title))}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white transition-colors hover:bg-[#128C7E]"
                                    >
                                        <FaWhatsapp size={20} />
                                        Order Similar Cake
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryGrid;
