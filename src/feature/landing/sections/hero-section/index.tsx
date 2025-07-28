"use client";
import { AnimatePresence, motion } from "motion/react";
import VideoPlayer, { VideoPlayerHandle } from "./components/VideoPlayer";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  const videoRef = useRef<VideoPlayerHandle>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    videoRef.current?.getStatus()
      ? videoRef.current?.pause()
      : videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className="h-[100vh] w-full flex relative bg-black">
      <div className="absolute top-0 left-0 w-full p-10 text-white flex justify-between items-center">
        <div className="flex gap-5">
          <Image
            src={"/images/shared/logo.png"}
            alt="Logo"
            width={75}
            height={75}
          />
          <div>
            <h1 className="text-5xl font-bold">Soccer Fun</h1>
            <p className="text-xl font-light">
              Kick, Compete, and Conquer the Field
            </p>
          </div>
        </div>
        <button
          className="border px-7 py-3 rounded-full flex gap-3 hover:bg-white hover:cursor-pointer hover:text-black transition duration-300 items-center"
          onClick={handleToggle}
        >
          {isPlaying ? (
            <>
              <FaPause />
              <p>Pause Video</p>
            </>
          ) : (
            <>
              <FaPlay />
              <p>Play Demo</p>
            </>
          )}
        </button>
      </div>
      <VideoPlayer
        ref={videoRef}
        onStatusChange={(playing) => {
          if (!playing) {
            setIsPlaying(false);
          }
        }}
      />
    </div>
  );
}
