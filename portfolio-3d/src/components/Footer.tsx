import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-slate-300 overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b0b3b] to-[#020617] bg-[300%_300%] animate-gradient-move"></div>

      {/* Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_70%)] blur-[100px] animate-float-orb"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_70%)] blur-[100px] animate-float-orb-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <div className="footer-content">
            <h2 className="footer-name text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-up">
              Deva Kumar
            </h2>

            <div className="footer-underline w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-3 animate-fade-up"></div>

            <p className="mt-6 max-w-sm text-slate-400 leading-relaxed animate-fade-up-delayed">
              I design & build clean, secure, and scalable web experiences.
            </p>
          </div>

          {/* CENTER */}
          <div className="space-y-4 text-sm animate-fade-up-delayed-2">
            <a 
              href="tel:+919384553580" 
              className="footer-contact flex items-center gap-3 hover:text-purple-400 transition-transform duration-300 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 transition-all">
                <PhoneCall size={16} className="text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <span className="group-hover:translate-x-1.5 transition-transform">+91 9384553580</span>
            </a>
            
            <a 
              href="mailto:devakumarpdk@gmail.com" 
              className="footer-contact flex items-center gap-3 hover:text-purple-400 transition-transform duration-300 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500 transition-all">
                <Mail size={16} className="text-pink-400 group-hover:text-white transition-colors" />
              </div>
              <span className="group-hover:translate-x-1.5 transition-transform">devakumarpdk@gmail.com</span>
            </a>
            
            <div className="footer-contact flex items-start gap-3 text-slate-400 hover:text-purple-400 transition-transform duration-300 cursor-default group">
              <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-all mt-0.5">
                <MapPin size={16} className="text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <span className="group-hover:translate-x-1.5 transition-transform">Coimbatore, Tamil Nadu<br />India</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 animate-fade-up-delayed-2">
              <a
                href="https://instagram.com/_d.e.v.a.a_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="footer-social w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm hover:bg-gradient-to-br from-purple-500 to-purple-600 hover:transform hover:translate-y-[-6px] hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-400 cursor-pointer"
              >
                <FaInstagram size={20} className="transition-transform duration-300" />
              </a>

              <a
                href="https://threads.net/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads Profile"
                className="footer-social w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm hover:bg-gradient-to-br from-gray-800 to-black hover:transform hover:translate-y-[-6px] hover:scale-110 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-400 cursor-pointer"
              >
                <FaThreads size={20} className="transition-transform duration-300" />
              </a>

              <a
                href="https://twitter.com/DEVAKUM47050747"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="footer-social w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm hover:bg-gradient-to-br from-sky-500 to-sky-600 hover:transform hover:translate-y-[-6px] hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-400 cursor-pointer"
              >
                <FaXTwitter size={20} className="transition-transform duration-300" />
              </a>
            </div>


          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12 animate-pulse-line"></div>

        {/* BOTTOM */}
        <p className="footer-copy text-center text-xs text-slate-500 transition-opacity duration-300 hover:opacity-100 cursor-default">
          © {new Date().getFullYear()} Deva Kumar · Crafted with care
        </p>
      </div>
    </footer>
  );
}