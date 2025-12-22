import { useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import {
  FaUser,
  FaTools,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";

export default function AboutLayout() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="about-page">
      <div className="about-wrapper">
        {/* LEFT PANEL */}
        <div className="left-panel flex flex-col justify-between">
          {/* TOP CONTENT */}
          <div>
            <h2 className="text-center text-xl font-semibold tracking-widest text-gray-700">
              ABOUT ME
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-sm">
              I'm a passionate Cyber Security student who loves turning ideas into
              real-world web applications. From building full-stack projects to solving
              CTF challenges, I enjoy understanding how systems work — and how they break.
              I constantly explore new technologies, sharpen my problem-solving skills,
              and aim to create secure, scalable digital solutions.
            </p>
          </div>

          {/* BOTTOM MENU */}
          <div className="menu mt-10">
            <button
              onClick={() => setActiveTab("profile")}
              className={activeTab === "profile" ? "active" : ""}
            >
              Profile
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={activeTab === "skills" ? "active" : ""}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab("achievements")}
              className={activeTab === "achievements" ? "active" : ""}
            >
              Achievements
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={activeTab === "certifications" ? "active" : ""}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {activeTab === "profile" && <Profile />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "achievements" && <Achievements />}
          {activeTab === "certifications" && <Certifications />}
        </div>
      </div>
    </div>
  );
}