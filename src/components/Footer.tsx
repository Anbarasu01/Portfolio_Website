import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Anbarasu<span className="text-accent-primary">.P</span>
          </Link>
          <p className="text-sm text-foreground/60">
            Building scalable web applications and secure APIs.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" className="text-foreground/60 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-foreground/60 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-foreground/60 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <FaTwitter size={20} />
          </Link>
          <Link href="https://leetcode.com/u/P_Anbarasu/" target="_blank" className="text-foreground/60 hover:text-orange-500 transition-colors">
            <span className="sr-only">LeetCode</span>
            <SiLeetcode size={20} />
          </Link>
        </div>

        <div className="text-sm text-foreground/50">
          &copy; {currentYear} Anbarasu P. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
