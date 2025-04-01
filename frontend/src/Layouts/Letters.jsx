import React, { useState } from "react";

const Letters = () => {
  // Add state for active category
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: "love", label: "Love", color: "pink" },
    { id: "health", label: "Health", color: "green" },
    { id: "career", label: "Career", color: "blue" },
    { id: "me", label: "Me", color: "purple" },
  ];

  // Helper function to get color classes
  const getColorClasses = (category) => {
    const colorMap = {
      pink: {
        active: "bg-pink-500 text-white",
        inactive: "bg-pink-100 text-pink-600 hover:bg-pink-200",
        text: "text-pink-500",
      },
      green: {
        active: "bg-green-500 text-white",
        inactive: "bg-green-100 text-green-600 hover:bg-green-200",
        text: "text-green-500",
      },
      blue: {
        active: "bg-blue-500 text-white",
        inactive: "bg-blue-100 text-blue-600 hover:bg-blue-200",
        text: "text-blue-500",
      },
      purple: {
        active: "bg-purple-500 text-white",
        inactive: "bg-purple-100 text-purple-600 hover:bg-purple-200",
        text: "text-purple-500",
      },
    };
    return colorMap[category];
  };

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

  // Filter messages based on active category
  const filteredMessages = activeCategory
    ? messages.filter((message) => message.category === activeCategory)
    : messages;

  return (
    <div className="container mx-auto px-4 py-6 relative z-10 mt-[100px]">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-md
              ${
                activeCategory === category.id
                  ? getColorClasses(category.color).active
                  : getColorClasses(category.color).inactive
              }`}
            onClick={() =>
              setActiveCategory(
                activeCategory === category.id ? null : category.id
              )
            }
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Messages Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMessages.map((message) => {
          const categoryColor = categories.find(
            (cat) => cat.id === message.category
          )?.color;
          const colorClasses = getColorClasses(categoryColor);

          return (
            <div
              key={message.id}
              className={`rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden
                ${
                  activeCategory
                    ? "opacity-100"
                    : "opacity-80 hover:opacity-100"
                }
                border-2 ${
                  message.category === activeCategory
                    ? `border-${categoryColor}-400`
                    : "border-transparent"
                }`}
            >
              <div className={`p-6 ${colorClasses.inactive} bg-opacity-30`}>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  "{message.content}"
                </p>
                <div className="mt-4 flex justify-end items-center">
                  <span className={`${colorClasses.text} font-semibold`}>
                    {
                      categories.find((cat) => cat.id === message.category)
                        ?.label
                    }
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
