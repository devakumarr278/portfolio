import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Cyber Security Enthusiast",
  "CTF Player",
];

export default function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } 
    else if (!isDeleting && charIndex === currentRole.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1200); // stay visible
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="typing-line">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
}