"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";

export type VideoPlayerHandle = {
  play: () => void;
  pause: () => void;
  getStatus: () => boolean;
};

type VideoPlayerProps = {
  onStatusChange?: (isPlaying: boolean) => void;
};

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  ({ onStatusChange }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      play: () => {
        setTimeout(() => {
          videoRef.current?.play();
          setIsPlaying(true);
        }, 1000);
      },

      pause: () => {
        videoRef.current?.pause();
        setIsPlaying(false);
      },

      getStatus: () => isPlaying,
    }));

    useEffect(() => {
      if (!isPlaying && onStatusChange) {
        onStatusChange(false);
      }
    }, [isPlaying]);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          controls={isPlaying}
          preload="none"
          width="100%"
          height="100%"
          poster="images/poster.png"
          className="absolute bottom-0 left-0 w-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="videos/trailler.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
