import ScreenMarquee from "@/shared/components/ScreenMarquee";

export default function AboutBackground() {
  return (
    <div className="absolute sticky top-0 left-0 w-full h-screen z-10 bg-white">
      <ScreenMarquee />
    </div>
  );
}
