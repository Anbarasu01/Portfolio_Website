"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Server, Users } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Code size={40} className="text-accent-primary" />,
      value: "100+",
      label: "DSA Problems Solved",
      description: "Mastered fundamental data structures and algorithms."
    },
    {
      icon: <Server size={40} className="text-accent-secondary" />,
      value: "10+",
      label: "APIs Built",
      description: "Designed and developed scalable RESTful APIs."
    },
    {
      icon: <Users size={40} className="text-accent-primary" />,
      value: "60+",
      label: "Students Trained",
      description: "Mentored and trained future full-stack developers."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Trophy size={48} className="text-accent-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Milestones & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <div className="text-5xl font-extrabold text-foreground mb-2">
                {item.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              <p className="text-foreground/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
