import Tilt from "react-parallax-tilt";
import profile from "../assets/prof.jpg";

export default function ProfilePhoto() {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
      className="w-56 mx-auto interactive"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-md opacity-70 animate-pulse"></div>
        <img
          src={profile}
          alt="Deva Kumar"
          className="relative rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-500/30 w-56 h-56 object-cover"
        />
      </div>
    </Tilt>
  );
}