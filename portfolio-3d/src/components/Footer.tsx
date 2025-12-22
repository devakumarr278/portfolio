import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-slate-300 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Deva Kumar
            </h2>

            <p className="mt-3 max-w-sm text-slate-400 leading-relaxed">
              I design & build clean, secure, and scalable web experiences.
            </p>

            {/* Divider */}
            <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* CENTER */}
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3 hover:text-white transition">
              📞 <a href="tel:+919384553580">+91 9384553580</a>
            </p>
            <p className="flex items-center gap-3 hover:text-white transition">
              ✉️ <a href="mailto:devakumarpdk@gmail.com">devakumarpdk@gmail.com</a>
            </p>
            <p className="flex items-start gap-3 text-slate-400">
              📍 Coimbatore, Tamil Nadu<br />India
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-500 hover:scale-110 transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-pink-500/30"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://threads.net/@yourusername"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <FaThreads size={20} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 hover:scale-110 transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-sky-500/30"
              >
                <FaXTwitter size={20} />
              </a>
            </div>

            {/* THEME */}
            <button className="px-6 py-2 rounded-full bg-slate-800 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-600/30 transition-all">
              🌙 Toggle Theme
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <p className="text-center text-xs text-slate-500 mt-20">
          © {new Date().getFullYear()} Deva Kumar. Crafted with care.
        </p>
      </div>
    </footer>
  );
}