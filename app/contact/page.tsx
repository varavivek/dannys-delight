import type { Metadata } from 'next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '@/components/contact/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
    title: "Contact Us | Danny's Delight - Order Cake in Hyderabad",
    description: "Get in touch to order your custom eggless cake. Visit our home bakery in Hyderabad or order via WhatsApp.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Header */}
            <div className="bg-rose-900 py-16 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Contact Us</h1>
                    <p className="mx-auto max-w-2xl text-lg text-rose-100">
                        Have a question or ready to order? We'd love to hear from you.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                We are a home-based bakery located in Puppalguda, Hyderabad. Visits are by appointment only. We deliver across the city!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Phone & WhatsApp</h3>
                                        <p className="text-gray-600">{BUSINESS_INFO.phone}</p>
                                        <p className="text-sm text-gray-500">Mon-Sat, 9am to 8pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email</h3>
                                        <a href={`mailto:${BUSINESS_INFO.email}`} className="text-rose-600 hover:underline">
                                            {BUSINESS_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Location</h3>
                                        <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                                        <a
                                            href={BUSINESS_INFO.mapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-sm font-medium text-rose-600 hover:underline"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                                        <FaClock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Opening Hours</h3>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {BUSINESS_INFO.hours.map((hour, idx) => (
                                                <li key={idx}>{hour}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-[300px] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567084666504!2d78.38326707593223!3d17.399324983489953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb953af6dcfe05%3A0xdd12f19f8b071b2b!2sDanny%E2%80%99s%20Delight%20(Home%20Baker)%20-%20Best%20Baker!5e0!3m2!1sen!2sin!4v1707361234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Danny's Delight Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
