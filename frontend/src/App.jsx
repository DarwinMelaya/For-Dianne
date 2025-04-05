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
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "24px",
              textAlign: "center",
              padding: "20px",
            }}
          >
            Click anywhere Dianne 🎵
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
