import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import LookbookSection from "@/components/home/LookbookSection";
import ShopSection from "@/components/home/ShopSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <ShopSection />
      <AboutSection />
      <LookbookSection />
      <BlogSection />
    </div>
  );
}
