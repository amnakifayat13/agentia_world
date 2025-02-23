"use client";
import { Earth, Github, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, message } = formData;
    const whatsappMessage = `\n*Contact Form Submission*\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappLink = `https://wa.me/+923162391694?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative mx-auto md:w-[1170px] min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden flex flex-col items-center px-4 md:px-8">
      <h1 className="mt-20 text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 via-gray-400 to-black bg-clip-text text-center">
        Get in Touch
      </h1>
      <p className="text-gray-300 text-md md:text-xl text-center font-semibold mt-2">
        Ready to transform your business with AI?
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mt-8 gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl text-gray-300 font-semibold">Contact Information</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-yellow-400" />
              <p className="text-gray-300 text-sm md:text-lg">contact@agenticworld.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Earth size={24} className="text-yellow-400" />
              <p className="text-gray-300 text-sm md:text-lg">www.agentiaworld.com</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Github size={32} className="text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin size={32} className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter size={32} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="bg-black rounded-lg p-6 w-full md:w-1/2 shadow-2xl shadow-yellow-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md" />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md" />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md" />
            </div>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md">
              <option value="" disabled>
                Select an option
              </option>
              <option value="Neural Networks">Neural Networks</option>
              <option value="Deep Learning">Deep Learning</option>
              <option value="Advanced ML">Advanced ML</option>
              <option value="Global Scale">Global Scale</option>
            </select>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-black text-white px-4 py-2 border border-gray-700 rounded-md" rows={5} placeholder="Message"></textarea>
            <button type="submit" className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 transition rounded-md text-white font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
