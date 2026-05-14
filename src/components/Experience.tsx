"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "ADRA Product Studio",
      duration: "Feb 2026 – Present",
      description: "Developing full-stack web applications, designing scalable backend systems, and implementing responsive UIs using the MERN stack."
    },
    {
      role: "Full Stack Developer Intern",
      company: "JEROSE",
      duration: "Jan 2025 – Aug 2025",
      description: "Built robust RESTful APIs, optimized database queries, and enhanced frontend performance for core products."
    },
    {
      role: "Full Stack Trainer",
      company: "Hindustan Institute",
      duration: "Aug 2025",
      description: "Trained 60+ students in full-stack web development, covering JavaScript fundamentals, React, and Node.js."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-accent-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent-primary mt-1 sm:mt-0 px-3 py-1 bg-accent-primary/10 rounded-full inline-block w-fit">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-foreground/80 font-medium mb-4">{exp.company}</div>
                <p className="text-foreground/60">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
