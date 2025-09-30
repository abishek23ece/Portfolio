import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold shadow-xl">
            A
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
         Abishek A
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Electronics and Communication Engineering Student
        </p>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Passionate about building innovative solutions and learning new technologies.
          Currently pursuing my degree while working on exciting projects.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Get in Touch
          </Link>
          <Link to="/projects" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View Projects
          </Link>
        </div>

        <div className="flex gap-6 justify-center text-slate-400">
          <a href="https://github.com/abishek23ece/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="linkedin.com/in/abishek-a-ece" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:abishekece22@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <FileText size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
