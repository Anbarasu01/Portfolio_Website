"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-accent-primary font-medium tracking-wide text-lg mb-2"
            >
              Hi, I am
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
            >
              Anbarasu P.
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6"
            >
              <span className="text-gradient">Full-Stack Developer</span> (MERN)
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-foreground/60 max-w-lg mx-auto md:mx-0"
            >
              Building scalable web applications and secure APIs. Passionate about backend performance and system design.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-6 mt-8"
          >
            <Link href="https://github.com" target="_blank" className="text-foreground/60 hover:text-accent-primary transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-foreground/60 hover:text-accent-secondary transition-colors">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://leetcode.com/u/P_Anbarasu/" target="_blank" className="text-foreground/60 hover:text-orange-500 transition-colors">
              <SiLeetcode size={24} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="w-80 h-80 rounded-full border-4 border-white/10 relative flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 mix-blend-overlay z-10 pointer-events-none" />
            <Image
              src="/images/profile.jpg"
              alt="Anbarasu P"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-[center_10%]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
