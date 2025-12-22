import { useState } from "react";

export default function PremiumProjects() {
  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Centralized Alumni Platform",
      description: "A centralized platform to connect alumni, manage profiles, post opportunities, and strengthen alumni–student interaction.",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "#",
      codeLink: "#",
      images: Array.from({ length: 10 }, (_, i) => `/src/assets/project/${i + 1}.png`)
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (step: number, total: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + total) % total);
  };

  return (
    <section className="projects-section">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Check out some of my recent projects that showcase my skills and passion for development.
        </p>

        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* IMAGE SLIDER */}
            <div className="slider">
              <div 
                className="slides" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {project.images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Project slide ${idx + 1}`} 
                  />
                ))}
              </div>

              <button 
                className="nav prev" 
                onClick={() => moveSlide(-1, project.images.length)}
              >
                ❮
              </button>
              <button 
                className="nav next" 
                onClick={() => moveSlide(1, project.images.length)}
              >
                ❯
              </button>
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-content">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <div className="tags mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="buttons">
                <button className="btn live">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                </button>
                <button className="btn code">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}