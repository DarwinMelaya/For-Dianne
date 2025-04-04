import { motion } from "framer-motion";

const Music = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-900/95 p-4">
      <motion.div
        className="bg-gradient-to-b from-amber-950/90 to-amber-900/80 rounded-lg shadow-black shadow-lg max-w-sm w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Image Container */}
        <motion.div className="p-4" whileTap={{ scale: 0.98 }}>
          <motion.img
            src="ditosakin.jpg"
            alt="Festival Crew"
            className="w-full h-64 object-cover rounded-lg shadow-black/50"
            whileHover={{ grayscale: 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          className="px-4 pb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-amber-200">Dito Sa'kin</h2>
          <p className="text-amber-300/80">Earl Agustin</p>
        </motion.div>

        {/* Timeline */}
        <div className="px-4 py-2">
          <div className="relative w-full h-1 bg-amber-800/40 rounded">
            <motion.div
              className="absolute h-full bg-amber-400 rounded"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="absolute right-0 -top-1 transform translate-y-[-50%]"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="text-amber-400">♥</div>
            </motion.div>
          </div>
        </div>

        {/* Now Playing Animation */}
        <motion.div
          className="flex justify-center gap-1 px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-4 bg-amber-400 rounded"
              animate={{
                height: ["16px", "24px", "16px"],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Music;
