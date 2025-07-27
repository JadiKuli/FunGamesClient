"use client";
import { AnimatePresence, motion } from "motion/react";
import VideoPlayer, { VideoPlayerHandle } from "./components/VideoPlayer";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<VideoPlayerHandle>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    videoRef.current?.getStatus()
      ? videoRef.current?.pause()
      : videoRef.current?.play();
    setIsOpen(false);
  };

  return (
    <div className="h-[120vh] w-full flex relative bg-black">
      <VideoPlayer
        ref={videoRef}
        onStatusChange={(playing) => {
          if (!playing) {
            setIsOpen(true);
          }
        }}
      />
    </div>
  );
}
