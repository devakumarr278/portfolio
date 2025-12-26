import { useState } from "react";
import project1 from "../assets/project/1.png";
import project2 from "../assets/project/2.png";
import project3 from "../assets/project/3.png";
import project4 from "../assets/project/4.png";
import project5 from "../assets/project/5.png";
import project6 from "../assets/project/6.png";
import project7 from "../assets/project/7.png";
import project8 from "../assets/project/8.png";
import project9 from "../assets/project/9.png";
import project10 from "../assets/project/10.png";
import instaclone from "../assets/project/instaclone/insta.png";
import portfolio1 from "../assets/project/portfolio/1.png";
import portfolio2 from "../assets/project/portfolio/2.png";
import portfolio3 from "../assets/project/portfolio/3.png";
import portfolio4 from "../assets/project/portfolio/4.png";

export default function PremiumProjects() {
  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Centralized Alumni Platform",
      description: "A centralized platform to connect alumni, manage profiles, post opportunities, and strengthen alumni–student interaction.",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "#",
      codeLink: "https://github.com/devakumarr278/Alumni.git",
      images: [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10]
    },
    {
      id: 2,
      title: "InstaClone",
      description: "A social media clone inspired by Instagram with core UI and functionality.",
      tags: ["React", "Firebase"],
      liveLink: "#",
      codeLink: "https://github.com/devakumarr278/Frontend_instaclone.git",
      images: [instaclone]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, skills, and achievements.",
      tags: ["React", "Tailwind"],
      liveLink: "#",
      codeLink: "https://github.com/devakumarr278/portfolio.git",
      images: [portfolio1, portfolio2, portfolio3, portfolio4]
    }
  ];

  const [visibleCount, setVisibleCount] = useState(1);

  const [slideIndex, setSlideIndex] = useState<Record<number, number>>({});

  const moveSlide = (projectId: number, step: number, total: number) => {
    setSlideIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + step + total) % total
    }));
  };

  return (
    <section className="projects-section">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Check out some of my recent projects that showcase my skills and passion for development.
        </p>

        {projects.slice(0, visibleCount).map((project, index) => (
            <div className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={`project-${project.id}`}>
              {/* IMAGE SLIDER */}
              <div className="slider">
                <div 
                  className="slides" 
                  style={{ transform: `translateX(-${(slideIndex[project.id] ?? 0) * 100}%)` }}
                >
                  {project.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Project slide ${idx + 1}`} 
                    />
                  ))}
                </div>

                {project.images.length > 1 && (
                  <>
                    <button 
                      className="nav prev" 
                      onClick={() => moveSlide(project.id, -1, project.images.length)}
                    >
                      ❮
                    </button>
                    <button 
                      className="nav next" 
                      onClick={() => moveSlide(project.id, 1, project.images.length)}
                    >
                      ❯
                    </button>
                  </>
                )}
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-info-card">
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

        {/* DOWN ARROW */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 1)}
              className="text-3xl text-purple-600 hover:scale-110 transition animate-bounce"
            >
              ⌄
            </button>
          </div>
        )}

        {/* UP ARROW */}
        {visibleCount === projects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                setVisibleCount(1);
                document.querySelector(".projects-section")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="text-3xl text-purple-600 hover:scale-110 transition"
            >
              ⌃
            </button>
          </div>
        )}
      </div>
    </section>
  );
}