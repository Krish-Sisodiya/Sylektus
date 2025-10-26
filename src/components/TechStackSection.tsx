import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiGit,
  SiGithub
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // FontAwesome AWS icon

const TechStackSection = () => {
  return (
    <section className="py-16 bg-gray-950 text-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-blue-400">
        Our Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-10 text-6xl">
        <SiReact
          title="React"
          className="hover:text-sky-400 hover:scale-110 transition-transform"
        />
        <SiNodedotjs
          title="Node.js"
          className="hover:text-green-500 hover:scale-110 transition-transform"
        />
        <SiExpress
          title="Express"
          className="hover:text-gray-400 hover:scale-110 transition-transform"
        />
        <SiMongodb
          title="MongoDB"
          className="hover:text-green-400 hover:scale-110 transition-transform"
        />
        <SiJavascript
          title="JavaScript"
          className="hover:text-yellow-400 hover:scale-110 transition-transform"
        />
        <SiTypescript
          title="TypeScript"
          className="hover:text-blue-400 hover:scale-110 transition-transform"
        />
        <FaAws
          title="AWS"
          className="hover:text-orange-400 hover:scale-110 transition-transform"
        />
        <SiDocker
          title="Docker"
          className="hover:text-sky-300 hover:scale-110 transition-transform"
        />
        <SiGit
          title="Git"
          className="hover:text-red-500 hover:scale-110 transition-transform"
        />
        <SiGithub
          title="GitHub"
          className="hover:text-gray-300 hover:scale-110 transition-transform"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
