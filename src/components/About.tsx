"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, BrainCircuit } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 className="text-accent-primary" size={32} />,
      title: "MERN Stack Developer",
      description: "Extensive internship experience building full-stack applications.",
    },
    {
      icon: <Server className="text-accent-secondary" size={32} />,
      title: "Scalable APIs",
      description: "Designed and developed over 10+ robust REST APIs.",
    },
    {
      icon: <BrainCircuit className="text-accent-primary" size={32} />,
      title: "Problem Solver",
      description: "Solved 100+ Data Structures & Algorithms problems.",
    },
    {
      icon: <Database className="text-accent-secondary" size={32} />,
      title: "Backend Focus",
      description: "Passionate about backend performance and system design.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            I am a passionate software developer specializing in the MERN stack.
            I focus on writing clean, efficient code and building applications that scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-foreground/60">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
