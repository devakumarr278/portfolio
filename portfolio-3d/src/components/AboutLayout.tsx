import { useState, useEffect } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";


export default function AboutLayout() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    // Reveal animation for elements when they come into view
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2
    });

    revealElements.forEach(el => observer.observe(el));

    // Scroll-spy for navbar highlighting
    const sections = document.querySelectorAll("section[id], div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
      let current = "";

      sections.forEach(section => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop - 120;
        const sectionHeight = element.offsetHeight;
        const sectionId = element.getAttribute("id");
        
        if (sectionId && window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial call to set active link on page load
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-page" id="about">
      {/* CENTERED ABOUT TITLE - OUTSIDE GRID */}
      <div className="w-full text-center mb-5 group">
        <h2 className="inline-block text-3xl font-bold tracking-[0.3em] text-violet-600 relative">
          ABOUT
          <span className="absolute left-1/2 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-blue-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Know more about me
        </p>
      </div>

      <div className="about-wrapper">
        {/* GRID CONTENT - LEFT AND RIGHT PANELS ONLY */}
        <div className="about-layout">
          {/* LEFT PANEL */}
          <div className="about-left left-panel flex flex-col justify-between reveal fade-in">
            {/* TOP CONTENT */}
            <div>
              <h2 className="text-center text-xl font-semibold tracking-widest text-gray-700">
                ABOUT ME
              </h2>

              {/* Animated divider */}
              <div className="divider-container mt-4 mb-6 flex justify-center">
                <div className="divider-line relative w-24 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed text-sm">
                I'm Devakumar, a CSE (Cyber Security) student at SKCET, Coimbatore, with a strong interest in full-stack web development. I like building complete applications using modern frontend and backend technologies, have explored CTF challenges, and enjoy playing cricket outside of tech.
              </p>
            </div>

            {/* BOTTOM MENU */}
            <div className="menu mt-10">
              <button
                onClick={() => setActiveTab("profile")}
                className={`menu-item ${activeTab === "profile" ? "active" : ""}`}
              >
                <span className="icon">👤</span>
                Profile
              </button>

              <button
                onClick={() => setActiveTab("skills")}
                className={`menu-item ${activeTab === "skills" ? "active" : ""}`}
              >
                <span className="icon">🛠</span>
                Skills
              </button>

              <button
                onClick={() => setActiveTab("achievements")}
                className={`menu-item ${activeTab === "achievements" ? "active" : ""}`}
              >
                <span className="icon">🏆</span>
                Achievements
              </button>

              <button
                onClick={() => setActiveTab("certifications")}
                className={`menu-item ${activeTab === "certifications" ? "active" : ""}`}
              >
                <span className="icon">📜</span>
                Certifications
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="about-right right-panel reveal fade-in">
            <div className="right-content">
              {activeTab === "profile" && <Profile />}
              {activeTab === "skills" && <Skills />}
              {activeTab === "achievements" && <Achievements />}
              {activeTab === "certifications" && <Certifications />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}