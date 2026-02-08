'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaPalette, FaConciergeBell } from 'react-icons/fa';

const specialties = [
    {
        icon: FaBirthdayCake,
        title: "100% Eggless Cakes",
        description: "Delicious, moist, and fluffy cakes made without eggs. Perfect for vegetarians and health-conscious dessert lovers.",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: FaPalette,
        title: "Theme-Based Designs",
        description: "From cartoon characters to elegant floral designs, we create custom themes that match your celebration perfectly.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: FaConciergeBell,
        title: "Custom Orders",
        description: "Have a unique idea? Share your vision with us, and we'll craft a masterpiece tailored just for you.",
        color: "bg-yellow-100 text-yellow-600",
    },
];

const SpecialtiesSection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl text-brand-gradient">
                        Our Specialties
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Discover what makes Danny's Delight the preferred choice for celebrations across Hyderabad.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group rounded-xl bg-white p-8 text-center shadow-md transition-all hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${item.color} text-3xl transition-transform group-hover:scale-110`}>
                                <item.icon />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
