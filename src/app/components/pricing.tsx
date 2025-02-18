import { Button } from '@/components/ui/button'
import { CheckCheckIcon } from 'lucide-react'
import React from 'react'

const Pricing = () => {
  return (
    <div className="w-full md:w-[1170px] mx-auto px-4 md:px-8 lg:px-12 py-16 bg-black">
      <h1 className="mb-6 text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-transparent text-center">
        Choose Your Plan
      </h1>
      <p className="text-gray-300 text-md md:text-xl text-center font-semibold">
        Scale your AI capabilities with our flexible pricing
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          { title: "Starter", price: "$499", features: ["2 AI Agent Instances", "Basic Neural Processing", "24/7 Support", "Weekly Analytics", "Basic Integration Support"] },
          { title: "Pro", price: "$999", features: ["5 AI Agent Instances", "Advanced Neural Processing", "Priority Support", "Daily Analytics", "API Access"] },
          { title: "Enterprise", price: "Custom", features: ["Unlimited AI Instances", "Dedicated AI Models", "Enterprise Support", "Real-time Analytics", "Full API Integration"] }
        ].map((plan, index) => (
          <div
            key={index}
            className="border border-yellow-500 shadow-md shadow-yellow-400 rounded-lg p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500"
          >
            <h2 className="text-2xl text-yellow-500 font-bold mt-2">{plan.title}</h2>
            <div className="flex mt-2">
              <span className="text-2xl text-yellow-500 font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <p className="text-gray-300 text-xl">/month</p>}
            </div>
            <div className="mt-4 space-y-3 w-full">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCheckIcon size={26} className="text-yellow-400" />
                  <p className="text-gray-300 text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <Button className="py-3 px-8 text-lg border border-yellow-500 mt-6 w-full text-center transition-transform duration-200 hover:bg-yellow-500 hover:text-black hover:scale-110">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
