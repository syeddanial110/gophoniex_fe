"use client";
import React, { useState, useRef } from "react";
import videoPoster from "../../assets/Images/videoPoster.jpg"; // Replace with your poster image path
import Image from "next/image";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/4124024/4124024-uhd_2732_1440_25fps.mp4";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // Ensure video element is rendered before play
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden my-35">
      {!playing && (
        <div className="relative w-full h-[70vh] bg-black">
          <Image
            src={videoPoster}
            alt="Video poster"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white font-bold rounded-full w-32 h-32 flex items-center justify-center text-xl shadow-lg border-4 border-white hover:scale-105 transition"
            aria-label="Play video"
          >
            Play
          </button>
        </div>
      )}
      {playing && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          controls
          autoPlay
          className="w-full h-[70vh] object-cover"
        />
      )}
    </div>
  );
};

export default VideoSection;
