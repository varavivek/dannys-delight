import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <GalleryPreview />
      <TestimonialsCarousel />
      <ContactCTA />
    </>
  );
}
