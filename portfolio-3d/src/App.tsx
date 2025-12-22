import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PremiumHero from "./components/PremiumHero";
import About from "./pages/About";
import PremiumProjects from "./components/PremiumProjects";
import PremiumContact from "./components/PremiumContact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <div id="home">
        <PremiumHero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <PremiumProjects />
      </div>
      <div id="contact">
        <PremiumContact />
      </div>
      <Footer />
    </div>
  );
}

export default App;