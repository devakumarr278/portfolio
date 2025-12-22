export default function FeaturedProjects() {
  const project = {
    name: "Centralized Alumni Platform",
    description: "A centralized platform to connect alumni, manage profiles, post opportunities, and strengthen alumni-student interaction.",
    techStack: ["React", "Node.js", "MongoDB", "JWT"],
    liveLink: "#",
    sourceLink: "https://github.com/devakumarr278/alumni-platform"
  };

  return (
    <section className="w-full px-6 lg:px-16 mt-14">
      <div className="grid grid-cols-12 gap-8 items-center">

        {/* LEFT SIDE – PROJECT IMAGE */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <div className="h-[300px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – PROJECT CONTENT */}
        <div className="col-span-12 lg:col-span-7">

          <h3 className="text-sm uppercase tracking-wide text-purple-600 font-semibold">
            Project Spotlight
          </h3>

          <h2 className="text-2xl font-bold mt-2">
            {project.name}
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.liveLink}
              className="px-5 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
            >
              View Live
            </a>

            <a
              href={project.sourceLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              Source Code
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}