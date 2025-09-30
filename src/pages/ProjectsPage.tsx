import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics with data visualization, sentiment analysis, and export capabilities.',
      tech: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'AI Study Assistant',
      description: 'Machine learning-powered study tool that generates practice questions and provides personalized learning recommendations.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'Web application that helps developers create and customize their portfolio websites with live preview and deployment.',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'CMS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-500 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-500 transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
