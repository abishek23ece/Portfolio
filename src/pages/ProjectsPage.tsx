import { Github } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Snake Game using Java',
      description:
        'A classic Snake game built in Java using Swing and AWT, featuring movement, food collection, and collision detection.',
      tech: ['Java', 'Swing', 'AWT'],
      image: 'https://i.pinimg.com/736x/52/7f/2d/527f2d7479d79b72fdaf73c1cfad3c05.jpg',
      github: 'https://github.com/abishek23ece/Snakegame-in-Java-.git'
    },
    {
      title: 'Smart Power Consumption Monitoring System',
      description:
        'An IoT-based system to monitor real-time power consumption, analyze energy usage, detect wastage, and improve efficiency.',
      tech: ['Arduino', 'Current Sensor', 'IoT', 'Embedded C', 'Dashboard'],
      image: 'https://i.pinimg.com/736x/52/0f/e8/520fe8c1966478393ac881367bda7079.jpg',
      github: 'https://github.com/abishek23ece/Smart-Power-Consumption-Monitoring-System'
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interactive weather application with live forecasts, historical data visualization, and alerts.',
      tech: ['React', 'Chart.js', 'API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      github: 'https://github.com'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-400">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-12 rounded-full"></div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl
              hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full
                      bg-gradient-to-r from-cyan-500/20 to-violet-500/20
                      text-cyan-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
