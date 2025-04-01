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
    <div className="max-w-[1200px] mx-auto px-10 py-8 text-center font-sans">
      <h1 className="text-4xl font-extrabold mb-6 tracking-normal">
        Welcome to my website for you.
      </h1>
      <p className="text-lg mb-8">
        Happy Birthday Dianne! Here I compiled all our digital pictures I
        created, letters and songs.
      </p>
      <div className="relative w-full max-w-[800px] mx-auto mb-8">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
