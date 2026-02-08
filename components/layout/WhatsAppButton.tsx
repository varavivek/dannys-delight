'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-[1000] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] md:bottom-8 md:right-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
            />
            <FaWhatsapp size={32} />
        </motion.a>
    );
};

export default WhatsAppButton;
