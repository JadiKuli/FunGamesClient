import AboutSection from "../sections/about-section";
import HeroSection from "../sections/hero-section";
import LeaderboardSection from "../sections/leaderboard-section";
import ShowcaseSection from "../sections/showcase-section";

export default function LandingContainer() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <LeaderboardSection />
      <ShowcaseSection />
    </main>
  );
}
