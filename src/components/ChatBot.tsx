import { useState, KeyboardEvent, useEffect, useRef } from "react";
import { sendMessageToGemini } from "../lib/gemini";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Currently Down 😔" },
  ]);
  const [loading, setLoading] = useState(false);

  /* 🔊 Sound (useRef to avoid re-creation) */
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio("/sounds/bounce.mp3");
    soundRef.current.volume = 0.25;
  }, []);

  /* 🚀 Auto-open chat for 3 seconds on load */
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpen(true);
      const closeTimer = setTimeout(() => setOpen(false), 3000);
      return () => clearTimeout(closeTimer);
    }, 500);

    return () => clearTimeout(openTimer);
  }, []);

  /* 🔒 Lock page scroll when chat is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const playSound = () => {
    soundRef.current?.play().catch(() => {});
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessageToGemini(
        `You are a professional AI assistant for Raj Kumar Sah's portfolio.
Only answer questions related to his skills, projects, experience, or contact.
User question: ${input}`
      );

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }catch (error) {
  console.error("Gemini API Error 👉", error);
  setMessages((prev) => [
    ...prev,
    { role: "bot", text: "Sorry, I'm Currently Working on it." },
  ]);
}

    // } finally {
    //   setLoading(false);
    // }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* 🤖 Floating Bouncing Button */}
      <motion.button
        animate={open ? { y: 0 } : { y: [0, -8, 0] }}
        transition={{
          y: { repeat: Infinity, repeatDelay: 4, duration: 0.6 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={playSound}   // 🔊 hover sound
        onClick={() => {
          playSound();             // 🔊 click sound
          setOpen(!open);
        }}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-5 py-3 text-white shadow-lg"
      >
        🤖 Chat
      </motion.button>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="
              fixed bottom-20 right-6 z-50
              w-80 max-h-[70vh]
              rounded-xl
              bg-white/30
              backdrop-blur-lg
              border border-white/20
              shadow-xl
              flex flex-col
            "
          >
            {/* Header */}
            <div className="p-3 text-center font-semibold border-b border-white/20">
              Ask R.K's AI Assistant
            </div>

            {/* Messages (scrollable) */}
            <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-black/80 text-white ml-auto"
                      : "bg-white/70"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <p className="text-xs">Typing...</p>}
            </div>

            {/* Input */}
            <div className="p-2 flex gap-2 border-t border-white/20">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/60 px-2 py-1 rounded focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-black/80 text-white px-3 rounded"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
