'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`;

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300',
                isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="z-50">
                    <h1 className={cn(
                        "font-serif text-2xl font-bold md:text-3xl transition-colors",
                        isScrolled || pathname !== '/' ? "text-rose-900" : "text-white"
                    )}>
                        Danny's Delight
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors hover:text-rose-500",
                                pathname === link.href ? "text-rose-600 font-semibold" : "",
                                isScrolled || pathname !== '/' ? "text-gray-700" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-green-600"
                    >
                        <FaWhatsapp size={18} />
                        <span>Order Now</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="z-50 block md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <FaTimes size={24} className="text-gray-800" />
                    ) : (
                        <FaBars size={24} className={cn(isScrolled || pathname !== '/' ? "text-gray-800" : "text-white")} />
                    )}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white"
                        >
                            <nav className="flex flex-col items-center space-y-8 text-xl">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "font-medium transition-colors hover:text-rose-500",
                                            pathname === link.href ? "text-rose-600" : "text-gray-800"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-bold text-white shadow-lg active:scale-95"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <FaWhatsapp size={20} />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
