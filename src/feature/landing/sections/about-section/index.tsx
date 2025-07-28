"use client";

import ScreenMarquee from "@/shared/components/ScreenMarquee";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import AboutBackground from "./components/Background";

export default function AboutSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Animate Detail
  const hidden = useTransform(scrollYProgress, [0.4, 0.45], [1, 0]);

  // Animate Key Feature
  const initialPosition = useTransform(
    scrollYProgress,
    [0.5, 0.55],
    ["600%", "0%"]
  );
  const showPosition = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  // Animate Feature
  const transition_1 = useTransform(
    scrollYProgress,
    [0.6, 0.65],
    ["-100%", "0%"]
  );
  const transition_2 = useTransform(
    scrollYProgress,
    [0.62, 0.67],
    ["-100%", "0%"]
  );
  const transition_3 = useTransform(
    scrollYProgress,
    [0.64, 0.69],
    ["-100%", "0%"]
  );
  const transition_4 = useTransform(
    scrollYProgress,
    [0.66, 0.71],
    ["-100%", "0%"]
  );

  // Animate Feature Back
  const transition_back_1 = useTransform(
    scrollYProgress,
    [0.6, 0.65],
    ["100%", "0%"]
  );
  const transition_back_2 = useTransform(
    scrollYProgress,
    [0.62, 0.67],
    ["100%", "0%"]
  );
  const transition_back_3 = useTransform(
    scrollYProgress,
    [0.64, 0.69],
    ["100%", "0%"]
  );

  return (
    <section ref={targetRef} className="relative h-[250vh] z-99 bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden py-10">
        <div className="relative h-full w-full flex items-center justify-center text-white">
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 text-center"
            style={{ opacity: hidden }}
          >
            <div>
              <h1 className="text-4xl font-bold">
                Soccer Fun: <br />
                Superpowered Soccer Showdown
              </h1>
              <p className="text-xl font-light">
                Kick, Compete, and Conquer the Field
              </p>
            </div>
            <div className="text-center w-1/2">
              <p>
                Soccer Fun is a thrilling and action-packed mobile soccer game
                that brings you an exciting, fast-paced, and unique twist on the
                classic soccer experience! With easy controls and vibrant, fun
                characters, you'll find yourself hooked for hours. Whether
                you're a casual gamer or a competitive player, Soccer Fun is
                perfect for all types of soccer fans. In this game, players take
                on the role of quirky pill-shaped characters who compete in
                high-energy soccer matches. Test your skills in online mode and
                compete with real players around the world, or challenge
                yourself with super-powered moves to dominate the field.
              </p>
            </div>
          </motion.div>

          <motion.div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center gap-10">
            <motion.h1
              className="text-4xl font-bold"
              style={{ y: initialPosition, opacity: showPosition }}
            >
              Key Feature
            </motion.h1>
            <motion.div className="grid grid-cols-5 gap-4 w-full">
              <motion.div className="col-span-2 flex flex-col gap-3">
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-r-full"
                  style={{ x: transition_1 }}
                >
                  <h3 className="font-semibold text-lg">
                    Easily Control Characters with Arrow Keys
                  </h3>
                  <p>
                    Take full control of your quirky pill-shaped soccer star
                    using simple arrow key navigation.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-r-full"
                  style={{ x: transition_2 }}
                >
                  <h3 className="font-semibold text-lg">
                    Engaging and Dynamic Gameplay
                  </h3>
                  <p>
                    A fast-paced, action-filled soccer experience that will keep
                    you on the edge of your seat, match after match.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-r-full"
                  style={{ x: transition_3 }}
                >
                  <h3 className="font-semibold text-lg">
                    Online Mode - Play with Real Players
                  </h3>
                  <p>
                    Challenge friends or compete with real players from all
                    around the world in thrilling matches.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-r-full"
                  style={{ x: transition_4 }}
                >
                  <h3 className="font-semibold text-lg">
                    Use Super Powers for More Challenging Games
                  </h3>
                  <p>
                    Unlock exciting super abilities to give you the edge over
                    your opponents and spice up every match.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div />
              <motion.div className="col-span-2 text-end flex flex-col gap-3">
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-l-full"
                  style={{ x: transition_back_1 }}
                >
                  <h3 className="font-semibold text-lg">
                    Win $coin from Tournaments
                  </h3>
                  <p>
                    Enter tournaments, claim victories, and earn $coins to
                    unlock rewards and upgrade your gameplay experience.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-l-full"
                  style={{ x: transition_back_2 }}
                >
                  <h3 className="font-semibold text-lg">
                    Unlock Crazy Characters and Unique Balls
                  </h3>
                  <p>
                    Discover new crazy characters and a variety of unique, fun
                    soccer balls as you progress through the game.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 p-4 border rounded-l-full"
                  style={{ x: transition_back_3 }}
                >
                  <h3 className="font-semibold text-lg">Leaderboard</h3>
                  <p>
                    Compete with top players globally, climb the leaderboard,
                    and prove you`re the ultimate Soccer Fun champion.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
