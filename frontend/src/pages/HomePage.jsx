import Home from "../Layouts/Home";
import Letters from "../Layouts/Letters";
import Music from "../Layouts/Music";
import Navbar from "../Layouts/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Letters />
      <Music />
    </div>
  );
};

export default HomePage;
