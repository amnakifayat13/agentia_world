import { ArrowBigRight, Brain, EarthLock, Layers } from 'lucide-react';
import React from 'react';

const Features = () => {
  return (
    <div className='w-full md:w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 h-auto min-h-screen bg-gradient pb-16 pt-16 flex flex-col items-center'>
      <h1 className='mt-10 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-center'>
        Neural Capabilities
      </h1>
      <p className='text-gray-300 text-md sm:text-lg md:text-xl text-center font-semibold mt-2 max-w-2xl'>
        Powered by next-generation artificial intelligence
      </p>

      {/* Responsive Grid for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl'>
        {featuresData.map((feature, index) => (
          <div key={index} className='flex flex-col items-center sm:items-start bg-gray-900 cursor-pointer border border-gray-700 rounded-2xl border-r-yellow-400 border-r-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-500 p-6'>
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
    title: 'Autonomous Learning',
    description: 'Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning',
    icon: <Brain size={32} />,
  },
  {
    title: 'Cognitive Integration',
    description: 'Seamless integration with existing systems through advanced cognitive APIs and neural bridges',
    icon: <ArrowBigRight size={32} />,
  },
  {
    title: 'Multi-Modal Intelligence',
    description: 'Advanced agents capable of processing text, voice, and visual data for comprehensive understanding',
    icon: <Layers size={32} />,
  },
  {
    title: 'Ethical AI Framework',
    description: 'Built-in ethical guidelines and safety protocols ensuring responsible AI deployment',
    icon: <EarthLock size={32} />,
  },
];

export default Features;