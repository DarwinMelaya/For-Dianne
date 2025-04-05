import Home from "../Layouts/Home";
import Letter from "../Layouts/Letter";
import Letters from "../Layouts/Letters";
import Music from "../Layouts/Music";
import Navbar from "../Layouts/Navbar";
import Toy from "../Layouts/Toy";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-7xl">
        <div id="home">
          <Home />
        </div>
        <div id="letters">
          <Letters />
        </div>
        <div id="music">
          <Music />
        </div>
        <div id="toy">
          <Toy />
        </div>
        <div id="for-you">
          <Letter />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
