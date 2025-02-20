import { Brain, ChartNoAxesCombined, Layers, LoaderPinwheelIcon, Sparkles, Users2 } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto min-h-screen bg-black pb-16 pt-16 px-4 md:px-6'>
      <h1 className='mt-10 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-center'>
        Powerful AI Features
      </h1>
      <p className="text-gray-300 text-md sm:text-lg md:text-xl text-center font-semibold mt-2">
        Discover how AI can enhance your learning experience.
      </p>

      {/* Grid for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
        {featuresData.map((feature, index) => (
          <div key={index} className='flex flex-col sm:flex-row items-center sm:items-start bg-gray-900 cursor-pointer border border-gray-700 rounded-2xl border-r-yellow-400 border-r-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-500 p-6'>
            <div className='flex-1 text-center sm:text-left'>
              <h1 className='text-gray-300 text-lg sm:text-xl md:text-2xl font-bold'>{feature.title}</h1>
              <p className='text-gray-400 mt-2 text-sm sm:text-base'>{feature.description}</p>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-4 p-4 bg-yellow-500 rounded-xl flex justify-center items-center'>
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Features Data Array
const featuresData = [
  {
    title: "Smart Goal Setting",
    description: "Set and track educational goals with AI-assisted planning and progress monitoring.",
    icon: <LoaderPinwheelIcon size={32} />
  },
  {
    title: "AI-Powered Learning",
    description: "Personalized learning experiences tailored to your unique pace and preferences.",
    icon: <Brain size={32} />
  },
  {
    title: "Multi-Layered Assistance",
    description: "Receive step-by-step guidance and explanations for complex topics.",
    icon: <Layers size={32} />
  },
  {
    title: "Interactive AI Tutor",
    description: "Get instant answers and interactive explanations powered by AI-driven tutoring.",
    icon: <Sparkles size={32} />
  },
  {
    title: "AI Insights & Analytics",
    description: "Gain deep insights into your learning progress with AI-generated analytics.",
    icon: <ChartNoAxesCombined size={32} />
  },
  {
    title: "Collaborative Learning",
    description: "Engage in AI-facilitated group learning with real-time collaboration.",
    icon: <Users2 size={32} />
  }
]

export default Features
