import { Brain, EarthLock, Layers } from "lucide-react";
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
    <div className="relative min-h-screen bg-gradient overflow-hidden w-full md:w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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
      <h1 className='mt-28 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-center'>
        AI Solutions
      </h1>
      <p className='text-gray-300 text-md sm:text-lg md:text-xl text-center font-semibold mt-2 max-w-2xl'>
        Transforming industries with intelligent agents
      </p>

      {/* Responsive Grid for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl'>
        {featuresData.map((feature, index) => (
          <div key={index} className='flex flex-col items-center sm:items-start bg-gray-900 cursor-pointer border border-gray-700 rounded-2xl border-r-yellow-400 border-r-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-500 p-6 w-full'>
            <div className='p-4 bg-yellow-500 rounded-xl flex justify-center items-center w-14 h-14'>
              {feature.icon}
            </div>
            <div className='flex-1 text-center sm:text-left mt-4'>
              <h1 className='text-gray-300 text-lg sm:text-xl md:text-2xl font-bold'>{feature.title}</h1>
              <p className='text-gray-400 mt-2 text-sm sm:text-base'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Features Data Array
const featuresData = [
  {
    title: 'Enterprise AI',
    description: 'Custom AI agents designed for enterprise-scale operations and decision-making',
    icon: <Layers size={32} />,
  },
  {
    title: 'Neural Operations',
    description: 'Automated workflow optimization through distributed neural networks',
    icon: <Brain size={32} />,
  },
  {
    title: 'Secure Intelligence',
    description: 'Privacy-first AI solutions with military-grade security protocols',
    icon: <EarthLock size={32} />,
  },
];

export default Agents;
