import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Letter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#f5e6d3] p-4 sm:p-6 md:p-8 font-serif"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-4 sm:mb-6 md:mb-8 w-full max-w-4xl mx-auto px-2 sm:px-4"
      >
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#2c1810] 
          border-t-2 border-b-2 border-[#8b4513] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 italic"
        >
          This is my message for you
        </h1>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onClick={() => setShowModal(true)}
        className="bg-[#8b4513] hover:bg-[#693610] text-[#f5e6d3] font-serif 
          py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base md:text-lg
          rounded-none border-2 border-[#2c1810] transition duration-300 
          hover:shadow-xl transform hover:scale-105"
      >
        Open Letter
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* Backdrop with sepia effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#2c1810] bg-opacity-70 backdrop-sepia"
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-[95%] md:w-[90%] max-w-4xl mx-auto mt-4 sm:mt-8 md:mt-12 p-3 sm:p-4 md:p-6 
                h-[90vh] flex items-center justify-center"
            >
              <div
                className="relative bg-[#f5e6d3] rounded-none p-4 sm:p-6 md:p-8 shadow-2xl 
                border-4 border-[#8b4513] transform rotate-[1deg] max-h-full overflow-auto"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#2c1810] hover:text-[#8b4513] 
                    z-10 rounded-full p-1 sm:p-2 transition-colors bg-[#f5e6d3] shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src="/message.png"
                  alt="Your Message"
                  className="w-full h-auto max-h-[70vh] object-contain shadow-lg border-2 border-[#8b4513]
                    transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Letter;
