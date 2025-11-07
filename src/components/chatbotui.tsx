"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RahnumaChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Assalam o Alaikum! I'm RAHNUMA — your AI Government Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Placeholder bot reply (for now)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thank you for your message. Soon, I’ll be connected to my AI brain!" },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-4">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-6"
      >
        <h1 className="text-3xl font-bold text-blue-800">RAHNUMA</h1>
        <p className="text-gray-600">AI-Powered Government Services Assistant</p>
      </motion.header>

      {/* Chatbox */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 flex flex-col flex-grow"
        style={{ height: "70vh" }}
      >
        <div className="flex-grow overflow-y-auto space-y-3 p-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-xl max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white self-end ml-auto"
                  : "bg-gray-100 text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-grow border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-4">
        Built by <span className="text-blue-700 font-semibold">Umm E Habiba</span>
      </footer>
    </div>
  );
}
