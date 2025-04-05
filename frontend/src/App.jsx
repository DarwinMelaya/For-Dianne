import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const audioRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio started successfully");
          setShowOverlay(false);
        })
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  return (
    <Router>
      {showOverlay && (
        <div
          onClick={startAudio}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center cursor-pointer z-50"
        >
          <div className="relative p-4 sm:p-8 md:p-12 rounded-xl bg-black/20 backdrop-blur-sm w-[90%] sm:w-auto max-w-md mx-auto">
            <div className="relative z-10 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border border-amber-200/20 rounded-lg">
              <h1 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-amber-100 tracking-widest mb-2 sm:mb-4">
                Click anywhere
              </h1>
              <p className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-amber-200 font-bold tracking-wide animate-pulse">
                Dianne 🎵
              </p>
              <div className="mt-4 sm:mt-6">
                <span className="inline-block w-20 sm:w-24 md:w-32 h-0.5 bg-amber-200/40"></span>
              </div>
            </div>
          </div>
        </div>
      )}
      <audio ref={audioRef} loop preload="auto" src="ditosakin.mp3" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
