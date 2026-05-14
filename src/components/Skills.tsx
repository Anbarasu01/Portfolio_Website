"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman"],
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms (DSA)", "System Design","OOPs","Computer Network", "DBMS"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-white/10 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-accent-primary hover:text-white hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
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
