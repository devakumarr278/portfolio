export default function Contact() {
  return (
    <section className="py-10 px-6 lg:px-16 bg-gray-900 text-white">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse">
            Let's Connect
          </h2>
          <p className="mt-4 text-gray-600 italic">
            🔐 Secure communication. No spam. Just meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <Stat title="Projects" value="15+" />
          <Stat title="Tech Stack" value="MERN" />
          <Stat title="Response Time" value="24 hrs" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
          <a 
            href="mailto:devakumar.cse2023@sce.edu.in" 
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="mb-3 p-3 bg-gray-700 rounded-full group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Email</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/devakumar9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="mb-3 p-3 bg-gray-700 rounded-full group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/devakumarr278" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="mb-3 p-3 bg-gray-700 rounded-full group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://picoctf.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="mb-3 p-3 bg-gray-700 rounded-full group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.5 1.41-1.41 3.59 3.91 6.59-7.09 1.41 1.41-8 8.59z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">PicoCTF</span>
          </a>
          
          <a 
            href="https://tryhackme.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
          >
            <div className="mb-3 p-3 bg-gray-700 rounded-full group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.5 1.41-1.41 3.59 3.91 6.59-7.09 1.41 1.41-8 8.59z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">TryHackMe</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <p className="text-2xl font-bold text-purple-600">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}