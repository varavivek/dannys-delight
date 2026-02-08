'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const ContactCTA = () => {
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`;

    return (
        <section className="relative py-20 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/cakes/cake_012.jpg')" }} // Another cake image
            >
                <div className="absolute inset-0 bg-rose-900/80 backdrop-blur-sm" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">
                        Ready to Order Your Dream Cake?
                    </h2>
                    <p className="mb-8 text-xl text-rose-100">
                        Let's create something special for your celebration. Contact us today for a custom quote!
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex min-w-[240px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#128C7E]"
                        >
                            <FaWhatsapp size={24} />
                            Chat on WhatsApp
                        </motion.a>

                        <motion.a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex min-w-[240px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-rose-900"
                        >
                            <FaPhoneAlt size={20} />
                            Call Us Now
                        </motion.a>
                    </div>

                    <p className="mt-8 text-sm text-rose-200 opacity-80">
                        We typically respond within 15 minutes during business hours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
