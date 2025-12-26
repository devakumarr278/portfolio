import { useState } from "react";
import { Award, MapPin, Trophy, Shield, Calendar } from "lucide-react";
import rootwar from "../assets/achievement/rootwar.png";
import binaryforge from "../assets/achievement/binaryforge.png";
import hackathon from "../assets/achievement/hackathon.png";

const achievements = [
  { 
    title: "RootWar CTF 2025",
    location: "PSNA College of Engineering",
    result: "Participant",
    domain: "Cyber Security • CTF",
    year: "2025",
    type: "CTF",
    image: rootwar 
  },
  { 
    title: "BinaryForge",
    location: "PSG College of Technology",
    result: "Top 10 Participants",
    domain: "Cyber Security",
    year: "2025",
    type: "Cryptography",
    image: binaryforge 
  },
  { 
    title: "Mind Sprint 2K25",
    location: "Potti SriRamalu College of Engineering",
    result: "Participant",
    domain: "Full Stack Development",
    year: "2025",
    type: "Hackathon",
    image: hackathon 
  }
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="right-content">
      <h2>Achievements</h2>

      <div className="flex flex-col gap-8 mt-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-purple-600">
            
            {/* Trophy Accent Line */}
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-3" />

            {/* Badge with Award Icon */}
            <div className="flex justify-end mb-2">
              <span className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                <Award className="w-3 h-3" />
                {achievement.type}
              </span>
            </div>

            {/* Image */}
            <div className="flex justify-center mb-5">
              <img
                src={achievement.image}
                alt={achievement.title}
                onClick={() => setSelectedImage(achievement.image)}
                className="w-full max-w-md h-[200px] object-contain rounded-xl border shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-purple-300 hover:shadow-lg"
              />
            </div>

            {/* Click hint */}
            <p className="text-xs text-gray-400 text-center mt-1">
              Click image to view
            </p>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {achievement.title}
            </h3>

            {/* Category */}
            <p className="text-sm text-purple-600 text-center mt-1">
              {achievement.domain}
            </p>

            {/* Professional Info Grid - Icons on left, centered */}
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span className="text-center">{achievement.location}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-center">{achievement.year}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-center">{achievement.domain}</span>
              </div>

              <div className="flex items-center justify-center gap-2 font-semibold text-purple-600">
                <Trophy className="w-4 h-4" />
                <span className="text-center">{achievement.result}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                {achievement.year}
              </span>
              <span>{achievement.result}</span>
            </div>

          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-4 max-w-3xl w-[90%] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Achievement"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}