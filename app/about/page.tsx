import type { Metadata } from 'next';
import Image from 'next/image';
import { FaLeaf, FaMedal, FaHandsHelping, FaMagic } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
    title: "About Us | Danny's Delight - Hyderabad",
    description: "Learn about our journey, our passion for eggless baking, and how we craft custom theme cakes for your celebrations.",
};

const features = [
    {
        icon: FaLeaf,
        title: "100% Eggless",
        desc: "Every cake is vegetarian-friendly, made without eggs but with maximum flavor.",
    },
    {
        icon: FaMedal,
        title: "Premium Ingredients",
        desc: "We use only high-quality butter, fresh cream, and premium chocolates.",
    },
    {
        icon: FaHandsHelping,
        title: "Personal Service",
        desc: "Direct consultation with the baker to ensure your vision is realized.",
    },
    {
        icon: FaMagic,
        title: "Custom Magic",
        desc: "From complex fondant work to elegant piping, we bring any theme to life.",
    },
];

const processSteps = [
    {
        step: "01",
        title: "Share Your Vision",
        desc: "Send us a message on WhatsApp with your theme, flavor preference, and date.",
    },
    {
        step: "02",
        title: "Design & Quote",
        desc: "We'll discuss the design details and provide a transparent price quote.",
    },
    {
        step: "03",
        title: "Fresh Baking",
        desc: "Your cake is baked fresh 1-2 days before the event using premium ingredients.",
    },
    {
        step: "04",
        title: "Pickup or Delivery",
        desc: "Your masterpiece is ready! Collect it or have it delivered to your venue.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <div className="bg-rose-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="mb-4 font-serif text-4xl font-bold text-rose-900 md:text-5xl">Our Story</h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Baking happiness, one eggless cake at a time.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid gap-12 md:grid-cols-2 md:items-center mb-24">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/images/cakes/cake_015.jpg" // Using another image
                            alt="Baker at work"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-gray-900">A Passion for Purity & Taste</h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            {BUSINESS_INFO.name} started from a simple observation: finding high-quality, delicious eggless cakes with custom designs was harder than it should be in Hyderabad.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We decided to change that. What began as a home kitchen experiment has grown into a beloved local brand, trusted by hundreds of families for their most special moments. We believe that dietary preferences shouldn't limit creativity or taste.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Today, we specialize in 100% eggless baking that rivals any traditional cake in texture and flavor. Whether it's a first birthday or a golden anniversary, we put our heart into making your celebration sweeter.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-24">
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">Why Choose {BUSINESS_INFO.name}?</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="rounded-xl bg-white p-6 shadow-md border border-rose-50 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-2xl">
                                    <feature.icon />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div className="bg-rose-900 rounded-3xl p-8 md:p-16 text-white text-center">
                    <h2 className="mb-12 font-serif text-3xl font-bold md:text-4xl">How It Works</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <span className="block text-6xl font-black text-rose-800/50 mb-4">{step.step}</span>
                                <h3 className="mb-2 text-xl font-bold text-white relative z-10">{step.title}</h3>
                                <p className="text-rose-100 relative z-10">{step.desc}</p>
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-rose-800 -z-0 translate-x-1/2" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
