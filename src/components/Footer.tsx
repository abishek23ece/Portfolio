import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Abishek A</h3>
            <p className="text-slate-400">Electronics and Communication Engineering Student</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="abishekece22@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Abishek A
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
