"use client";

import { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

export default function Content() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-[70vh] w-full px-5 py-10 flex justify-center flex-col items-center">
      <p className="text-3xl font-bold text-[#2980B9] lg:text-4xl animate__animated animate__zoomIn">
        Coming soon
        <span className="animate__animated animate__flash animate__infinite animate__slow animate__delay-3s">
          ..
        </span>
        <span className="animate__animated animate__flash animate__infinite animate__slow animate__delay-2s">
          .
        </span>
      </p>
      <p className="text-[#47556A] mt-2">There is no portfolio yet!</p>

      <audio
        ref={audioRef}
        src="Colorful-Flowers.mp3"
        className="hidden"
      ></audio>

      <button
        onClick={togglePlayPause}
        className="mt-4 bg-[#3498db] hover:bg-[#2980b9] text-white font-bold rounded-full p-3 animate__animated animate__fadeInUp"
      >
        {isPlaying ? (
          <FaPause className="text-2xl" />
        ) : (
          <FaPlay className="text-2xl" />
        )}
      </button>
    </div>
  );
}
