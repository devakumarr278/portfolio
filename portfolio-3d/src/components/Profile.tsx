import { Github, Folder, Award } from "lucide-react";
import leetcode from "../assets/profile/leetcode.png";
import picoctf from "../assets/profile/picoctf.png";
import tryhackme from "../assets/profile/tryhackme.png";

const StatCard = ({ icon, title, value, color }: { icon: React.ReactNode; title: string; value: string; color: string; }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition hover:scale-[1.02] duration-300">
    <div className={`p-3 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default function Profile() {
  return (
    <div className="right-content">
      
      {/* PROFILE HERO */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">
          DK
        </div>
        <div>
          <h1
            className="text-4xl font-bold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Deva Kumar
          </h1>
          <p className="mt-2 text-violet-600 text-sm tracking-wider">
            Full Stack Developer • Cyber Security
          </p>
        </div>
      </div>
      {/* HIGHLIGHT STRIP */}
      <div className="flex gap-3 flex-wrap mt-2">
        {/* Tags removed as per request */}
      </div>

      {/* PROFILE INFO CARDS */}
      <div className="space-y-4 mt-8">
        {[
          ["🎓", "2nd Year Student"],
          ["💻", "B.E CSE (Cyber Security)"],
          ["🏫", "Sri Krishna College of Engineering and Technology"],
          ["⭐", "CGPA: 8.23"],
        ].map(([icon, text], i) => (
          <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
            <span className="text-xl">{icon}</span>
            <p className="text-gray-700 font-medium">{text}</p>
          </div>
        ))}
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <StatCard
          title="GitHub Repositories"
          value="8"
          color="bg-purple-100 text-purple-600"
          icon={<Github size={22} />}
        />
        <StatCard
          title="Projects"
          value="2"
          color="bg-blue-100 text-blue-600"
          icon={<Folder size={22} />}
        />
        <StatCard
          title="Certificates"
          value="6"
          color="bg-green-100 text-green-600"
          icon={<Award size={22} />}
        />
      </div>

      {/* SCROLLABLE IMAGES */}
      <h3>LeetCode Stats</h3>
      <img src={leetcode} alt="LeetCode Stats" className="stat-img" />

      <h3>PicoCTF Stats</h3>
      <img src={picoctf} alt="PicoCTF Stats" className="stat-img" />

      <h3>TryHackMe Stats</h3>
      <img src={tryhackme} alt="TryHackMe Stats" className="stat-img" />
    </div>
  );
}