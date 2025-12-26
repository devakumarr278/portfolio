import { useEffect } from "react";

export default function Navbar() {


  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

  };

  // Scroll spy, navbar shrink with transparent glass effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      
      // Navbar shrink effect
      if (window.scrollY > 60) {
        navbar?.classList.add("shrink");
      } else {
        navbar?.classList.remove("shrink");
      }

      // Scroll spy with offset for fixed navbar
      const sections = ['hero', 'about', 'projects', 'contact'];
      let current = '';

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 120; // offset for fixed navbar
          if (window.scrollY >= offsetTop) {
            current = sectionId;
          }
        }
      });

      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
        (link as HTMLElement).classList.remove("active");
        if ((link as HTMLElement).getAttribute("href") === `#${current}`) {
          (link as HTMLElement).classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar cursor glow effect
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const glow = document.querySelector(".nav-cursor-glow") as HTMLElement;

    if (navbar && glow) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = navbar.getBoundingClientRect();
        glow.style.left = `${e.clientX - rect.left}px`;
        glow.style.top = `${e.clientY - rect.top}px`;
        glow.style.opacity = "1";
      };

      const handleMouseLeave = () => {
        glow.style.opacity = "0";
      };

      navbar.addEventListener("mousemove", handleMouseMove);
      navbar.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        navbar.removeEventListener("mousemove", handleMouseMove);
        navbar.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);



  // Scroll progress bar effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        (scrollProgress as HTMLElement).style.width = progress + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">
          <span className="deva">Deva</span>
          <span className="kumar">Kumar</span>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cursor-glow"></div>
        <div className="scroll-progress"></div>
      </div>
    </nav>
  );
}