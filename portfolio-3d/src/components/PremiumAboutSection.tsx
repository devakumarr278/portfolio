import { useState } from "react";

// Sidebar component for tab navigation
function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Project Spotlight" }
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-4 space-y-3 sticky top-24">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-full text-left px-4 py-3 rounded-lg font-medium capitalize transition-colors ${
            activeTab === tab.id
              ? "bg-purple-600 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function PremiumAboutSection() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-900">About Me</h1>
      <p className="text-center text-gray-500 mt-2">
        Get to know me better through my academic journey, skills, achievements, and certifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {/* LEFT SIDE - STATIC ABOUT SECTION */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <img 
              src="../assets/profile/Screenshot 2025-12-21 154314.png"
              alt="Deva Kumar"
              className="w-48 rounded-2xl shadow-xl mb-6"
            />

            <h2 className="text-2xl font-bold text-gray-900">Deva Kumar</h2>
            <p className="text-purple-600 font-medium mt-1">
              Full Stack Developer • Cyber Security
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              I am a 2nd year B.E CSE (Cyber Security) student passionate about
              building secure web applications, solving CTF challenges, and
              developing full-stack systems.
            </p>

            {/* NAVIGATION SIDEBAR */}
            <div className="mt-8">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - SCROLLABLE PANEL */}
        <div className="md:col-span-3 h-[650px] bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="h-full overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {/* PROFILE TAB - WITH SCROLLABLE STATS IMAGES */}
            {activeTab === "profile" && (
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Profile</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl">🎓</div>
                      <div>
                        <p className="font-semibold text-gray-800">2nd Year</p>
                        <p className="text-sm text-gray-500">B.E CSE (Cyber Security)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl">🏫</div>
                      <div>
                        <p className="font-semibold text-gray-800">SKCET</p>
                        <p className="text-sm text-gray-500">Coimbatore</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl">📊</div>
                      <div>
                        <p className="font-semibold text-gray-800">CGPA 8.23</p>
                        <p className="text-sm text-gray-500">Academic Excellence</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl">🧑‍💻</div>
                      <div>
                        <p className="font-semibold text-gray-800">Full Stack Developer</p>
                        <p className="text-sm text-gray-500">MERN Stack</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCROLLABLE STATS SECTION */}
                <div className="space-y-10">
                  {/* LeetCode Stats */}
                  <section>
                    <h2 className="text-xl font-semibold text-center mb-4">LeetCode Stats</h2>
                    <div className="flex justify-center">
                      <img
                        src="../assets/profile/leetcode.png"
                        alt="LeetCode Stats"
                        className="rounded-2xl shadow-xl w-full max-w-3xl"
                      />
                    </div>
                  </section>

                  {/* GeeksForGeeks Stats */}
                  <section>
                    <h2 className="text-xl font-semibold text-center mb-4">GeeksForGeeks Stats</h2>
                    <div className="flex justify-center">
                      <img
                        src="../assets/profile/picoctf.png"
                        alt="GFG Stats"
                        className="rounded-2xl shadow-xl w-full max-w-2xl"
                      />
                    </div>
                  </section>

                  {/* GitHub Stats */}
                  <section>
                    <h2 className="text-xl font-semibold text-center mb-4">GitHub Stats</h2>
                    <div className="flex justify-center">
                      <img
                        src="../assets/profile/Screenshot 2025-12-21 154314.png"
                        alt="GitHub Stats"
                        className="rounded-2xl shadow-xl w-full max-w-3xl"
                      />
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* SKILLS TAB - IMAGE-BASED CARDS */}
            {activeTab === "skills" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Skills & Technologies</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[
                    { name: "React", icon: "⚛️" },
                    { name: "JavaScript", icon: "🟨" },
                    { name: "Node.js", icon: "🟢" },
                    { name: "MongoDB", icon: "🍃" },
                    { name: "HTML", icon: "🌐" },
                    { name: "CSS", icon: "🎨" },
                    { name: "Python", icon: "🐍" },
                    { name: "Java", icon: "☕" }
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border hover:border-purple-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ACHIEVEMENTS TAB */}
            {activeTab === "achievements" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Achievements</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <p className="font-semibold text-gray-800">CTF Participation</p>
                      <p className="text-sm text-gray-500">PicoCTF challenges solved and TryHackMe learning paths completed</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">💻</div>
                    <div>
                      <p className="font-semibold text-gray-800">Coding Practice</p>
                      <p className="text-sm text-gray-500">Consistent problem solving on LeetCode with focus on DSA and security concepts</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">🎓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Academic & Technical</p>
                      <p className="text-sm text-gray-500">Mini projects completed in cybersecurity and web development</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CERTIFICATIONS TAB */}
            {activeTab === "certifications" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Certifications</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Cyber Security Fundamentals</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Web Development Certificate</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Database Management Systems</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Ethical Hacking / Security Basics</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Network Security</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="font-semibold text-gray-800">Cloud Security</p>
                      <p className="text-sm text-gray-500">Online Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT SPOTLIGHT TAB */}
            {activeTab === "projects" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Project Spotlight</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <p className="font-semibold text-gray-800">Centralized Alumni Platform</p>
                      <p className="text-sm text-gray-500">A centralized platform to connect alumni, manage profiles, post opportunities, and strengthen alumni-student interaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}