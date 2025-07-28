"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import ScreenMarquee from "@/shared/components/ScreenMarquee";
import AvailableApp from "./components/Available";

export default function ShowcaseSection() {
  const targetRefShowcase = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRefShowcase,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
    <motion.section className="h-[250vh] relative" ref={targetRefShowcase}>
      <motion.div
        className="absolute w-full h-full backdrop-blur-sm z-10"
        style={{ opacity }}
      ></motion.div>
      <motion.div
        className="absolute w-full h-full bg-black/70 z-10 flex items-center justify-center"
        style={{ opacity: opacity2 }}
      >
        <motion.div
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
          style={{ opacity: opacity3 }}
        >
          <AvailableApp />
        </motion.div>
      </motion.div>
      <div className="sticky top-0 z-5">
        <ScreenMarquee />
      </div>
    </motion.section>
  );
}
