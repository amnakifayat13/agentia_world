"use client"
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
    <div className="relative  h-screen bg-gradient overflow-hidden w-full md:w-[1170px] mx-auto">
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
    <h1 className="mt-24  mb-6 text-2xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-transparent text-center">
 The Future of Agentic AI ~   Empower. Automate. Evolve.
</h1>
<div className="flex">
    <div className=" " >
        <p className="text-gray-600 text-sm md:text-2xl font-bold mt-6 ml-4">AI is transforming businesses by enhancing efficiency, automating processes, and enabling data-driven decision-making.</p>
        <Button className="md:p-8 text-white md:text-xl ml-4 font- mt-6 md:m-16 bg-yellow-500 hover:bg-yellow-600 absolute">Get Started Free Trial</Button>
        <Chatbot/>
    </div>
    <div>
        <Image src="/chatbot.png" alt="chatbot" width={1000} height={1000} className="mt-2  h-[400px]"/>
    </div>
</div>


    </div>
  );
};

export default MovingDots;
