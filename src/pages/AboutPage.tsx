import { GraduationCap, Code2, Lightbulb, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I'm a third-year Electronics and Communication Engineering (ECE) student at
              K Ramakrishnan College of Technology – Trichy, passionate about technology
              and problem-solving. My journey in tech started with curiosity about how
              things work and has evolved into a deep commitment to creating meaningful
              digital and hardware experiences.
            </p>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              ⚙️ When I’m not designing circuits or writing code, you’ll find me exploring
              new technologies, contributing to open-source projects, or participating in
              hackathons. I’m driven by curiosity, teamwork, and the excitement of turning
              ideas into real-world solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">Education</h3>
                  <p className="text-slate-600">
                    B.E. Electronics and Communication Engineering (ECE)
                  </p>
                  <p className="text-slate-500 text-sm">
                    K Ramakrishnan College of Technology – Trichy
                  </p>
                  <p className="text-slate-500 text-sm">Year of Graduation: May 2027</p>
                  <p className="text-slate-500 text-sm">GPA: 7.45</p>
                </div>
              </div>
            </div>

            {/* Internship 1 */}
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">
                    Internship Experience
                  </h3>
                  <p className="text-slate-600">
                    Intern - Protection & Substation Automation
                  </p>
                  <p className="text-slate-500 text-sm">
                    Schneider Electric India Infrastructure Limited • July - August 2025
                  </p>

                  {/* Certificate link */}
                  <a
                    href="https://drive.google.com/file/d/1EQ8uDrDl5FGOYJrYu8JXwaj0m7ocKJY_/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium hover:bg-cyan-200 transition-colors"
                  >
                    📄 View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">
                    Internship Experience
                  </h3>
                  <p className="text-slate-600">Intern - Electrical & Instrumentation</p>
                  <p className="text-slate-500 text-sm">
                    UltraTech Cement Limited • December 2024
                  </p>

                  {/* Certificate link */}
                  <a
                    href="https://drive.google.com/file/d/1BBOKwrclTzfJHEjYokBW-Sqn6mrbzp8p/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium hover:bg-cyan-200 transition-colors"
                  >
                    📄 View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">Interests</h3>
                  <p className="text-slate-600">
                    Web Development, PCB Design, Embedded Systems, IoT Innovations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
