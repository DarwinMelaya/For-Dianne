import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Move data to separate constants
const CATEGORIES = [
  { id: "love", label: "Love", color: "pink" },
  { id: "health", label: "Health", color: "green" },
  { id: "career", label: "Career", color: "blue" },
  { id: "me", label: "Me", color: "purple" },
];

const COLOR_MAP = {
  pink: {
    active: "bg-pink-500 text-white",
    inactive: "border-2 border-pink-500 text-pink-500 hover:bg-pink-50",
    text: "text-pink-500",
  },
  green: {
    active: "bg-green-500 text-white",
    inactive: "border-2 border-green-500 text-green-500 hover:bg-green-50",
    text: "text-green-500",
  },
  blue: {
    active: "bg-blue-500 text-white",
    inactive: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    text: "text-blue-500",
  },
  purple: {
    active: "bg-purple-500 text-white",
    inactive: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50",
    text: "text-purple-500",
  },
};

// Split into smaller components
const CategoryButton = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg
      ${isActive ? COLOR_MAP[category.color].active : "bg-white"}
      before:absolute before:inset-0 before:border-2 before:border-${
        category.color
      }-500 
      before:rounded-full before:content-[''] before:translate-x-0.5 before:translate-y-0.5
      after:absolute after:inset-0 after:border-2 after:border-${
        category.color
      }-500 
      after:rounded-full after:content-[''] after:-translate-x-0.5 after:-translate-y-0.5
      ${!isActive ? `text-${category.color}-500` : ""}`}
    onClick={onClick}
  >
    {category.label}
  </motion.button>
);

const MessageCard = ({ message, isActive, categoryData }) => {
  const colorClasses = COLOR_MAP[categoryData.color];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl overflow-hidden
        ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}
        before:absolute before:inset-0 before:border-2 before:border-${
          categoryData.color
        }-400 
        before:rounded-2xl before:content-[''] before:translate-x-1 before:translate-y-1
        after:absolute after:inset-0 after:border-2 after:border-${
          categoryData.color
        }-400 
        after:rounded-2xl after:content-[''] after:-translate-x-1 after:-translate-y-1`}
    >
      <div
        className={`relative p-6 bg-white border-2 border-${categoryData.color}-400 rounded-2xl`}
      >
        <p className="text-gray-700 leading-relaxed text-lg font-medium">
          "{message.content}"
        </p>
        <div className="mt-4 flex justify-end items-center">
          <span className={`${colorClasses.text} font-semibold`}>
            {categoryData.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Letters = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Add messages array with sample data
  const messages = [
    {
      id: 1,
      content: "May your heart always be filled with love that's pure and true",
      category: "love",
    },
    {
      id: 2,
      content: "Love deeply, but never forget to love yourself first.",
      category: "love",
    },
    {
      id: 3,
      content: "May you always find love that feels like home.",
      category: "love",
    },
    {
      id: 4,
      content: "You are worthy of a love that lights up your soul.",
      category: "love",
    },
    {
      id: 5,
      content:
        "Love isn't about perfection, but about feeling safe and understood.",
      category: "love",
    },
    {
      id: 6,
      content: "The right love will never make you doubt your worth.",
      category: "love",
    },
    {
      id: 7,
      content: " Love is about finding joy in the simplest moments.",
      category: "love",
    },
    {
      id: 8,
      content: "The best love is the one that brings out the best in you.",
      category: "love",
    },
    {
      id: 9,
      content: "May you find a love that feels like home and adventure in one.",
      category: "love",
    },
    {
      id: 10,
      content:
        "Stay strong and take care of yourself—you deserve to be happy and healthy.",
      category: "health",
    },
    {
      id: 11,
      content: "Take time to recharge; your body and mind deserve it.",
      category: "health",
    },
    {
      id: 12,
      content: "A peaceful mind leads to a healthy body.",
      category: "health",
    },
    {
      id: 13,
      content: "Smile often—it's good for the heart.",
      category: "health",
    },
    {
      id: 14,
      content: "Eat well, sleep well, and glow from within",
      category: "health",
    },
    {
      id: 15,
      content: "Don't forget to take breaks—you deserve rest.",
      category: "health",
    },
    {
      id: 16,
      content: "Keep pushing forward; your hard work will bring you success.",
      category: "career",
    },
    {
      id: 17,
      content: "Every step forward, no matter how small, is progress.",
      category: "career",
    },
    {
      id: 18,
      content: "Stay patient; great things take time..",
      category: "career",
    },
    {
      id: 19,
      content: "You're capable of more than you realize—keep going!",
      category: "career",
    },
    {
      id: 20,
      content: "Hard work pays off, even if you don't see it yet.",
      category: "career",
    },
    {
      id: 21,
      content: "Always here for you, cheering you on every step of the way. ",
      category: "me",
    },
    {
      id: 22,
      content: "No matter what, I'll always be here for you. ",
      category: "me",
    },
    {
      id: 23,
      content: "Thinking of you and wishing you the best always.",
      category: "me",
    },
    {
      id: 24,
      content: "Always cheering for you, near or far.",
      category: "me",
    },
    {
      id: 25,
      content: "I'm proud of you, always.",
      category: "me",
    },
    {
      id: 26,
      content: "You inspire me in ways you don't even know.",
      category: "me",
    },
    {
      id: 27,
      content: "I appreciate you more than words can say.",
      category: "me",
    },
    {
      id: 28,
      content: "You make life brighter just by being you.",
      category: "me",
    },
  ];

  const filteredMessages = activeCategory
    ? messages.filter((message) => message.category === activeCategory)
    : messages;

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-6 relative z-10 mt-[100px]"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Letters for You
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Click a category to read your messages.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => toggleCategory(category.id)}
          />
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMessages.map((message) => {
            const categoryData = CATEGORIES.find(
              (cat) => cat.id === message.category
            );
            return (
              <MessageCard
                key={message.id}
                message={message}
                isActive={message.category === activeCategory}
                categoryData={categoryData}
              />
            );
          })}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Letters;
