const Navbar = () => {
  return (
    <nav className="bg-white py-5 px-10 text-center font-sans flex flex-col items-center max-w-[1200px] mx-auto">
      <a
        href="/"
        className="text-black text-4xl font-extrabold no-underline mb-5 tracking-wider"
      >
        FOR DIANNE
      </a>
      <div className="flex gap-8 justify-center">
        <a className="text-black text-base no-underline cursor-pointer hover:text-gray-600">
          Home
        </a>
        <a className="text-black text-base no-underline cursor-pointer hover:text-gray-600">
          Letter
        </a>
        <a className="text-black text-base no-underline cursor-pointer hover:text-gray-600">
          Music
        </a>
        <a className="text-black text-base no-underline cursor-pointer hover:text-gray-600">
          For You
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
