const Navbar = () => {
  return (
    <nav className="bg-white py-3 md:py-5 px-4 md:px-10 text-center font-sans flex flex-col items-center max-w-[1200px] mx-auto">
      <a
        href="/"
        className="text-black text-2xl md:text-4xl font-extrabold no-underline mb-3 md:mb-5 tracking-wider"
      >
        FOR DIANNE
      </a>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        <a className="text-black text-sm md:text-base no-underline cursor-pointer hover:text-gray-600">
          Home
        </a>
        <a className="text-black text-sm md:text-base no-underline cursor-pointer hover:text-gray-600">
          Letter
        </a>
        <a className="text-black text-sm md:text-base no-underline cursor-pointer hover:text-gray-600">
          Music
        </a>
        <a className="text-black text-sm md:text-base no-underline cursor-pointer hover:text-gray-600">
          For You
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
