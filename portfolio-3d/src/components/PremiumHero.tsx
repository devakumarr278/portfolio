import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import TypingRoles from "./TypingRoles";

export default function PremiumHero() {
  const handleScrollToExplore = () => {    // Scroll to the next section (projects)
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background layer */}
      <div className="hero-bg" />

      {/* Content */}
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Hi, I'm <span>Deva Kumar</span>
          </motion.h1>

          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <TypingRoles />
          </motion.div>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            Cyber Security student & Full-Stack Developer.
            I build secure web applications and solve CTF challenges
            to understand how real-world systems break and scale.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <a 
              href="/resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                // Create a temporary link to simulate resume download
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Deva_Kumar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="resume-btn"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Resume
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <div className="social-links">
              <a className="github" href="https://github.com/devakumarr278" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://linkedin.com/in/devakumar9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="instagram" href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.05}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.25}
          >
            <div className="image-wrapper">
              <div className="image-bg"></div>
              <img src="/src/assets/prof.jpg" alt="Deva Kumar" className="hero-image" />
            </div>
          </Tilt>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        onClick={handleScrollToExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2 }}
      >
        ↓ See my work
      </motion.div>
    </section>
  );
}