"use client"
import { Earth, Github, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Handle input changes with correct type casting
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, service, message } = formData;
    const whatsappMessage = `
      *Contact Form Submission*
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappLink = `https://wa.me/+923162391694?text=${encodedMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappLink, "_blank");
  };

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

      <h1 className="mt-6  mb-6 text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-transparent text-center">Get in Touch</h1>
      <p className="text-gray-300 text-md md:text-xl text-center font-semibold">Ready to transform your business with AI?</p>
      <div className="flex flex-col md:flex-row justify-around">
        <div>
          <h2>Contact Information</h2>
         <div className="flex gap-2 ml-4 md:ml-24">
          <Mail size={30 } className="text-yellow-400"/>
         <p className="text-gray-300 text-sm md:text-xl">contact@agenticworld.com</p>
         </div>
         <div className="flex gap-2 ml-4 md:ml-24">
          <Earth size={30 } className="text-yellow-400"/>
          <p className="text-gray-300 text-sm md:text-xl">www.agentiaworld.com</p>
         </div>
         <div className='flex gap-2 mt-4 justify-center'>
          <Github size={36} fill='gray'/>
          <Linkedin size={36} fill='gray'/>
          <Twitter size={36} fill='gray'/>

        </div>
       
        </div>
        <div className="bg-black rounded-lg p-3 sm:p-6 max-w-lg mx-auto mt-2 shadow-2xl shadow-yellow-400">
  <form onSubmit={handleSubmit} className="mt-6 block w-full">
    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="flex-1 bg-black text-white placeholder:text-gray-600 px-4 py-2 
        rounded-md border border-gray-700 outline-none w-full"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="flex-1 bg-black text-white placeholder:text-gray-600 px-4 py-2 
        rounded-md border border-gray-700 outline-none w-full"
      />
    </div>
    <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        className="flex-1 bg-black text-white placeholder:text-gray-600 px-4 py-2 
        rounded-md border border-gray-700 outline-none w-full"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="flex-1 bg-black text-white placeholder:text-gray-600 px-4 py-2 
        rounded-md border border-gray-700 outline-none w-full"
      />
    </div>
    <div>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full mt-4 bg-black text-white placeholder:text-gray-600 px-4 py-2 
        rounded-md border border-gray-700 outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="frontend">Neural Networks</option>
        <option value="backend">Deep Learning</option>
        <option value="fullstack">Advanced ML</option>
        <option value="fullstack">Global Scale</option>
      </select>
    </div>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full mt-4 bg-black text-white placeholder:text-gray-600 px-4 py-2 
      rounded-md border border-gray-700 outline-none"
      rows={5}
      placeholder="Message"
    />
    <div className="mt-3">
      <button
        type="submit"
        className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 transition-all
        duration-150 rounded-full text-white"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

      </div>
      
    </div>
  );
};

export default Contact;
