'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        name: "Priya M.",
        role: "Happy Customer",
        content: "Amazing eggless cakes! My son's Batman cake was the highlight of his birthday party! The taste was incredible.",
        rating: 5,
    },
    {
        id: 2,
        name: "Rahul & Divya",
        role: "Wedding Clients",
        content: "Finally found a bakery that makes delicious eggless wedding cakes. Highly recommended! The design was exactly what we wanted.",
        rating: 5,
    },
    {
        id: 3,
        name: "Anjali K.",
        role: "Loyal Customer",
        content: "The theme execution was perfect. Everyone asked where we got the Frozen cake! And it tasted so fresh.",
        rating: 5,
    },
    {
        id: 4,
        name: "Suresh Reddy",
        role: "Corporate Client",
        content: "Ordered cakes for our office anniversary. Prompt delivery and excellent quality. Danny's Delight is our go-to now.",
        rating: 5,
    },
    {
        id: 5,
        name: "Meera S.",
        role: "Birthday Mom",
        content: "Best eggless cakes in Hyderabad hands down. Soft, moist, and just the right sweetness. Love it!",
        rating: 5,
    },
];

const TestimonialsCarousel = () => {
    return (
        <section className="bg-rose-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
                    What Our Customers Say
                </h2>
                <p className="mb-12 text-gray-600">
                    Stories of joy and celebration from our satisfied clients.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="pb-16"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="h-full rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-6 flex justify-center text-rose-300">
                                    <FaQuoteLeft size={32} />
                                </div>
                                <p className="mb-6 text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
                                <div className="mb-2 flex justify-center space-x-1 text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} size={16} />
                                    ))}
                                </div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
