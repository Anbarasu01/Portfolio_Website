"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaFolderOpen } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "AdminSight Dashboard",
      description: "A comprehensive admin dashboard built with the MERN stack. Features real-time data visualization, user management, and secure authentication.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "#",
    },
    {
      title: "Sales Dashboard",
      description: "An analytical dashboard for sales data using SQL for complex queries and Power BI for interactive visualizations and reporting.",
      techStack: ["SQL", "Power BI", "Data Analysis"],
      github: "https://github.com",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Some of the recent projects I've worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6 text-accent-primary">
                <FaFolderOpen size={40} className="group-hover:-translate-y-1 transition-transform" />
                <div className="flex gap-4">
                  <Link href={project.github} target="_blank" className="text-foreground/60 hover:text-white transition-colors">
                    <FaGithub size={22} />
                  </Link>
                  <Link href={project.live} target="_blank" className="text-foreground/60 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </Link>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/10">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-sm font-medium text-accent-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
