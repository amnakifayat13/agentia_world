"use client";
import Image from "next/image";
import React from "react";
import Chatbot from "./aiChatbot";
import { Button } from "@/components/ui/button";

const MovingDots = () => {
  // Generate 100 dots with random positions and animation delays
  const dots = Array.from({ length: 200 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 5}s`, // Random duration between 5s and 15s
  }));

  return (
    <div className="relative mx-auto md:w-[1170px] min-h-screen bg-gradient overflow-hidden w-full flex flex-col items-center px-4 md:px-8">
      {/* Background Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="dot"
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.animationDelay,
            animationDuration: dot.animationDuration,
          }}
        />
      ))}

      {/* Heading */}
      <h1 className="mt-32 text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-transparent text-center">
        The Future of Agentic AI ~ Empower. Automate. Evolve.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-8 gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-gray-600 text-lg md:text-2xl font-bold">
            AI is transforming businesses by enhancing efficiency, automating
            processes, and enabling data-driven decision-making.
          </p>
          <div className="mt-6">
            <Button className="px-6 py-3 md:px-8 md:py-6 text-white text-lg md:text-xl bg-yellow-500 hover:bg-yellow-600">
              Get Started Free Trial
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/chatbot.png"
            alt="chatbot"
            width={1000}
            height={1000}
            className="max-w-full h-auto md:h-[400px]"
          />
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="w-full flex justify-center -mt-28">
        <Chatbot />
      </div>
    </div>
  );
};

export default MovingDots;
