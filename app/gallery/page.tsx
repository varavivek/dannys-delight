import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
    title: "Cake Gallery | Danny's Delight - Eggless Cakes Hyderabad",
    description: "Browse our stunning collection of 100% eggless birthday cakes, wedding cakes, and custom theme cakes in Hyderabad. Order yours today!",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Header */}
            <div className="bg-rose-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="mb-4 font-serif text-4xl font-bold text-rose-900 md:text-5xl">Our Cake Gallery</h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Explore our portfolio of handcrafted eggless creations. From elegant wedding cakes to fun birthday themes, find the perfect cake for your celebration.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <GalleryGrid />
            </div>
        </div>
    );
}
