import { useState } from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Profiles from "./Profiles";
import Achievements from "./Achievements";
import Projects from "./FeaturedProjects";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" }
];

export default function SectionSwitcher() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="min-h-[300px]">
          {activeSection === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Profiles />
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Skills />
            </motion.div>
          )}

          {activeSection === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Achievements />
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}