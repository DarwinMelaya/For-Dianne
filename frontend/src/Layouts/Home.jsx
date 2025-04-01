import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "pic/1.png",
    "pic/2.png",
    "pic/3.png",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1200px] mx-auto px-4 md:px-10 py-4 md:py-8 text-center font-sans"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 tracking-normal"
      >
        Welcome to my website for you.
      </motion.h1>
      <motion.p
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base md:text-lg mb-6 md:mb-8"
      >
        Happy Birthday Dianne! Here I compiled all our digital pictures I
        created, letters and songs.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative w-full max-w-[800px] mx-auto mb-6 md:mb-8 px-2 md:px-0"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={images[currentImageIndex]}
            alt="Slideshow"
            className="w-full h-auto object-contain rounded-lg shadow-md absolute left-0 right-0"
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Home;
