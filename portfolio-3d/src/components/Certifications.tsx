import { useState } from "react";
import cert1 from "../assets/certification/1.png";
import cert2 from "../assets/certification/2.png";
import cert3 from "../assets/certification/3.png";
import cert4 from "../assets/certification/4.png";
import cert5 from "../assets/certification/5.png";
import cert6 from "../assets/certification/6.png";

const certifications = [
  { 
    title: "Java Fundamentals Course",
    issuer: "Infosys",
    domain: "Programming • Core Java",
    image: cert1 
  },
  { 
    title: "DBMS Fundamentals Course",
    issuer: "Infosys",
    domain: "Databases • SQL & DBMS Concepts",
    image: cert2 
  },
  { 
    title: "Design Thinking (NPTEL) – Premier",
    issuer: "Swayam",
    domain: "Innovation • Problem Solving",
    image: cert3 
  },
  { 
    title: "Operating Systems Fundamentals",
    issuer: "Infosys",
    domain: "Systems • OS Concepts",
    image: cert4 
  },
  { 
    title: "C++ Programming Fundamentals",
    issuer: "Infosys",
    domain: "Programming • Object-Oriented Concepts",
    image: cert5 
  },
  { 
    title: "Web Development Fundamentals (HTML & CSS)",
    issuer: "Infosys",
    domain: "Web Development • Frontend",
    image: cert6 
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="right-content">
      <h2>Certifications</h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card bg-white rounded-2xl p-6 shadow-sm border-l-4 border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="cert-header">
              <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
              <span className="inline-block mt-1 text-sm text-indigo-600 font-medium">{cert.issuer}</span>
              <p className="text-gray-500 text-sm mt-1">{cert.domain}</p>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 my-4" />

            <img 
              src={cert.image} 
              alt={`${cert.title} Certificate`} 
              onClick={() => setSelectedCert(cert.image)}
              className="w-full max-w-lg mx-auto rounded-xl border cursor-pointer shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-indigo-300"
            />
            
            <p className="text-xs text-gray-400 text-center mt-2">
              Click certificate to view
            </p>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-4 max-w-4xl w-[90%] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}