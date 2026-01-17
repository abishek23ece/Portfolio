import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-slate-950 to-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-1">
              Abishek A
            </h3>
            <p className="text-slate-400 text-sm">
              Electronics & Communication Engineering Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/abishek23ece"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/abishek-a-ece"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:abishekece22@gmail.com"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>
            Designed & developed by
            <span className="text-cyan-400 font-medium"> Abishek A</span>
          </p>

          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
