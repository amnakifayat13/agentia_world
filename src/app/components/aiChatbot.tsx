"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, X } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you ?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = { sender: "bot", text: "I'm still learning! 😊" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Floating Button to Open Chat */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className=" bottom-10 mr-4 bg-yellow-500 text-white p-6 rounded-full shadow-lg hover:bg-yellow-600"
        >
          Open Chatbot
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed top-28 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray-900 text-yellow-500 rounded-lg shadow-lg p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-6 text-white bg-gray-700 p-1 rounded-full hover:bg-red-600"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-bold text-center mb-4">AI Chatbot</h2>

          <div className="h-64 overflow-y-auto space-y-2 p-4 bg-gray-800 rounded-lg">
            {messages.map((msg, index) => (
              <Card
                key={index}
                className={`p-2 max-w-xs ${
                  msg.sender === "user"
                    ? "ml-auto bg-yellow-500"
                    : "mr-auto bg-gray-700"
                } text-white rounded-lg`}
              >
                <CardContent>{msg.text}</CardContent>
              </Card>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center mt-2">
            <Input
              className="flex-1 bg-gray-700 border-none text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <Button onClick={sendMessage} className="ml-2 bg-yellow-500">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
