'use client';

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        type: 'Birthday Cake',
        theme: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp message
        const text = `Hi, I'm interested in ordering a cake!\n
*Name:* ${formData.name}
*Event Date:* ${formData.date}
*Type:* ${formData.type}
*Theme/Idea:* ${formData.theme}
*Message:* ${formData.message}`;

        const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">Send an Enquiry</h3>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-700">Event Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="mb-2 block text-sm font-medium text-gray-700">Cake Type</label>
                    <select
                        id="type"
                        name="type"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option>Birthday Cake</option>
                        <option>Wedding Cake</option>
                        <option>Anniversary Cake</option>
                        <option>Kids Theme Cake</option>
                        <option>Cupcakes</option>
                        <option>Other Dessert</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="theme" className="mb-2 block text-sm font-medium text-gray-700">Theme / Idea (Optional)</label>
                <input
                    type="text"
                    id="theme"
                    name="theme"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    placeholder="e.g. Frozen, Spiderman, Floral, Minimalist..."
                    value={formData.theme}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">Any other details?</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    placeholder="Flavor preferences, allergies, special instructions..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#128C7E]"
            >
                <FaWhatsapp size={24} />
                Send via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500">
                This will open WhatsApp with your details pre-filled.
            </p>
        </form>
    );
};

export default ContactForm;
