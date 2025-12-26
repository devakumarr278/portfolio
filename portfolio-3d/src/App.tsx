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



  useEffect(() => {
    // Wait for DOM to be fully loaded
    const initGlow = () => {
      // Cursor glow effect
      const glow = document.querySelector(".cursor-glow") as HTMLElement | null;

      const handleMouseMove = (e: MouseEvent) => {
        if (glow) {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
        }
      };

      const handleMouseEnter = () => {
        if (glow) {
          glow.style.opacity = "1";
        }
      };

      const handleMouseLeave = () => {
        if (glow) {
          glow.style.opacity = "0";
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      
      // Add event listeners to existing elements
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      // Handle dynamically added elements
      const observer = new MutationObserver(() => {
        document.querySelectorAll("a, button").forEach(el => {
          if (!el.hasAttribute('data-glow-listener')) {
            el.setAttribute('data-glow-listener', 'true');
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.querySelectorAll("a, button").forEach(el => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
        observer.disconnect();
      };
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initGlow, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="cursor-glow"></div>
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
      <div className="page-bottom-effect"></div>
    </div>
  );
}

export default App;