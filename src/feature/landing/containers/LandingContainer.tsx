import AboutSection from "../sections/about-section";
import HeroSection from "../sections/hero-section";
import ShowcaseSection from "../sections/showcase-section";

export default function LandingContainer() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
    </main>
  );
}
