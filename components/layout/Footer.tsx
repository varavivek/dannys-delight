import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';

const Footer = () => {
    return (
        <footer className="bg-rose-50 text-gray-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Info */}
                    <div>
                        <h2 className="mb-4 font-serif text-2xl font-bold text-rose-900">{BUSINESS_INFO.name}</h2>
                        <p className="mb-6 text-sm leading-relaxed text-gray-600">
                            {BUSINESS_INFO.tagline}. We specialize in creating delicious, 100% eggless cakes for all your special occasions.
                        </p>
                        <div className="flex space-x-4">
                            {BUSINESS_INFO.socialMedia.instagram && (
                                <a
                                    href={BUSINESS_INFO.socialMedia.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600 shadow-sm transition-colors hover:bg-rose-600 hover:text-white"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={20} />
                                </a>
                            )}
                            {BUSINESS_INFO.socialMedia.facebook && (
                                <a
                                    href={BUSINESS_INFO.socialMedia.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600 shadow-sm transition-colors hover:bg-rose-600 hover:text-white"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-rose-900">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-rose-600 transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-rose-600 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-rose-600 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 font-semibold text-rose-900">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-rose-500" />
                                <span>{BUSINESS_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="shrink-0 text-rose-500" />
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-rose-600">{BUSINESS_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="shrink-0 text-rose-500" />
                                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-rose-600">{BUSINESS_INFO.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="h-48 overflow-hidden rounded-lg shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567084666504!2d78.38326707593223!3d17.399324983489953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb953af6dcfe05%3A0xdd12f19f8b071b2b!2sDanny%E2%80%99s%20Delight%20(Home%20Baker)%20-%20Best%20Baker!5e0!3m2!1sen!2sin!4v1707361234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Danny's Delight Location"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-12 border-t border-rose-200 pt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
                    <p className="mt-2">Made with ❤️ in Hyderabad</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
