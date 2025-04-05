import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Letter", id: "letters" },
    { label: "Music", id: "music" },
    { label: "Toy", id: "toy" },
    { label: "For You", id: "for-you" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white py-3 md:py-5 px-4 md:px-10 text-center font-sans flex flex-col items-center max-w-[1200px] mx-auto"
    >
      <motion.a
        onClick={() => scrollToSection("home")}
        whileHover={{ scale: 1.05 }}
        className="text-black text-2xl md:text-4xl font-extrabold no-underline mb-3 md:mb-5 tracking-wider cursor-pointer"
      >
        FOR DIANNE
      </motion.a>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection(item.id)}
            className="text-black text-sm md:text-base no-underline cursor-pointer hover:text-gray-600"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
