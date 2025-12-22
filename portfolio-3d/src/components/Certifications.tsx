import cert1 from "../assets/certification/1.png";
import cert2 from "../assets/certification/2.png";
import cert3 from "../assets/certification/3.png";
import cert4 from "../assets/certification/4.png";
import cert5 from "../assets/certification/5.png";
import cert6 from "../assets/certification/6.png";

const certifications = [
  { 
    title: "Cyber Security Fundamentals",
    issuer: "Coursera",
    domain: "Cyber Security",
    image: cert1 
  },
  { 
    title: "Web Development Certificate",
    issuer: "Udemy",
    domain: "Full Stack Development",
    image: cert2 
  },
  { 
    title: "Database Management Systems",
    issuer: "edX",
    domain: "Database",
    image: cert3 
  },
  { 
    title: "Ethical Hacking / Security Basics",
    issuer: "TryHackMe",
    domain: "Cyber Security",
    image: cert4 
  },
  { 
    title: "Network Security",
    issuer: "Cisco",
    domain: "Networking",
    image: cert5 
  },
  { 
    title: "Cloud Security",
    issuer: "AWS",
    domain: "Cloud Computing",
    image: cert6 
  }
];

export default function Certifications() {
  return (
    <div className="right-content">
      <h2>Certifications</h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-header">
              <h4>{cert.title}</h4>
              <p>{cert.issuer} • {cert.domain}</p>
            </div>

            <img 
              src={cert.image} 
              alt={`${cert.title} Certificate`} 
              className="cert-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}