import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import mongo from "../assets/skills/mongo.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import bootstrap from "../assets/skills/bootstrap.png";
import css from "../assets/skills/css.png";
import express from "../assets/skills/express.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import cplusplus from "../assets/skills/c++.png";
import js from "../assets/skills/js.png";
import kali from "../assets/skills/kali.png";
import springboot from "../assets/skills/springboot.png";
import tailwind from "../assets/skills/tailwind.png";

const skills = [
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "MongoDB", icon: mongo },
  { name: "Python", icon: python },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Express", icon: express },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "C++", icon: cplusplus },
  { name: "JS", icon: js },
  { name: "Kali Linux", icon: kali },
  { name: "Spring Boot", icon: springboot },
  { name: "Tailwind", icon: tailwind }
];

export default function Skills() {
  return (
    <div className="right-content">
      <h2>Skills</h2>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}