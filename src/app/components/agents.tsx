import React from "react";

const Agents = () => {
  // Generate 100 dots with random positions and animation delays
  const dots = Array.from({ length: 200 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 5}s`, 
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

      <h1 className="text-white mt-36">hi</h1>
    </div>
  );
};

export default Agents;
