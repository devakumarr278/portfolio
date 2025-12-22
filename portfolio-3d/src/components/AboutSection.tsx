import { useState } from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certificates from "./Certificates";
import ProfileStats from "./ProfileStats";

const menuItems = [
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" }
];

export default function AboutSection() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <section className="max-w-[1200px] mx-auto py-10 px-6">
      <div className="flex gap-6 min-h-[520px]">
        {/* Left Panel - Fixed */}
        <div className="w-[300px] h-full flex-shrink-0">
          <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              
              <p className="text-gray-600 mb-6">
                I am a 2nd year B.E CSE (Cyber Security) student at
                Sri Krishna College of Engineering and Technology, Coimbatore.
                I am passionate about building secure web applications,
                solving CTF challenges, and developing full-stack systems.
                I actively practice on platforms like LeetCode, PicoCTF, and TryHackMe,
                and I enjoy learning how real-world systems are attacked and defended.
              </p>
            </div>

            <div className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Scrollable Content */}
        <div className="flex-1 h-full">
          <div className="bg-white rounded-xl shadow p-6 h-full max-h-[520px] overflow-y-auto">
            {activeSection === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Profile</h3>
                <div className="flex items-start gap-4 mb-8">
                  <img
                    src="../assets/profile/Screenshot 2025-12-21 154314.png"
                    alt="Deva Kumar"
                    className="w-24 h-24 rounded-xl object-cover shadow-md"
                  />
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Deva Kumar P</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">🎓 2nd Year</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">💻 B.E CSE (Cyber Security)</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">🏫 Sri Krishna College of Engineering and Technology, Coimbatore</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">📊 CGPA: 8.23</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">🧑‍💻 Role: Full Stack Developer</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">🔐 Focus: Cyber Security & CTFs</h4>
                    </div>
                  </div>
                </div>

                <ProfileStats />
              </motion.div>
            )}

            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Skills</h3>
                <h4 className="font-semibold text-gray-800 mb-4">Programming & Tools</h4>
                <Skills />
              </motion.div>
            )}

            {activeSection === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
                <Achievements />
              </motion.div>
            )}

            {activeSection === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Certifications</h3>
                <Certificates />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}