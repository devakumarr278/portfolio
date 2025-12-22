import rootwar from "../assets/achievement/rootwar.png";
import binaryforge from "../assets/achievement/binaryforge.png";
import hackathon from "../assets/achievement/hackathon.png";

const achievements = [
  { 
    title: "RootWar CTF Competition",
    domain: "Cyber Security • CTF",
    description: "Participated in RootWar CTF 2025, solving real-world cyber security challenges including web exploitation, cryptography, and forensics.",
    year: "2025",
    mode: "Team Event",
    type: "CTF",
    image: rootwar 
  },
  { 
    title: "BinaryForge Hackathon",
    domain: "Full Stack Development",
    description: "Won 2nd place in the BinaryForge hackathon by building a secure web application with React and Node.js in 24 hours.",
    year: "2024",
    mode: "Individual",
    type: "Hackathon",
    image: binaryforge 
  },
  { 
    title: "Cyber Security Workshop",
    domain: "Education • Networking",
    description: "Attended an intensive workshop on ethical hacking and network security fundamentals, gaining hands-on experience with penetration testing tools.",
    year: "2024",
    mode: "Workshop",
    type: "Learning",
    image: hackathon 
  }
];

export default function Achievements() {
  return (
    <div className="right-content">
      <h2>Achievements</h2>

      <div className="flex flex-col gap-8 mt-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-purple-500 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
            
            {/* Badge */}
            <div className="flex justify-end mb-2">
              <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                {achievement.type}
              </span>
            </div>

            {/* Image */}
            <div className="flex justify-center mb-5">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full max-w-md h-[200px] object-contain rounded-xl border shadow-sm"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {achievement.title}
            </h3>

            {/* Category */}
            <p className="text-sm text-purple-600 text-center mt-1">
              {achievement.domain}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed text-center max-w-xl mx-auto">
              {achievement.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                {achievement.year}
              </span>
              <span>{achievement.mode}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}