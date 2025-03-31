import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GolfSection } from "@/components/sections/GolfSection";
import { BlogSection } from "@/components/sections/BlogSection";

const Index = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GolfSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
