import { GraduationCap, Code2, Lightbulb, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-900">
          About Me
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a third-year Electronics and Communication Engineering (ECE) student at
              K Ramakrishnan College of Technology – Trichy, passionate about technology
              and problem-solving. My journey in tech started with curiosity about how
              things work and has evolved into a deep commitment to creating meaningful
              digital and hardware experiences.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ⚙️ When I’m not designing circuits or writing code, you’ll find me exploring
              new technologies, contributing to open-source projects, or participating in
              hackathons. I’m driven by curiosity, teamwork, and the excitement of turning
              ideas into real-world solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-purple-900">Education</h3>
                  <p className="text-gray-600">
                    B.E. Electronics and Communication Engineering (ECE)
                  </p>
                  <p className="text-gray-500 text-sm">
                    K Ramakrishnan College of Technology – Trichy
                  </p>
                  <p className="text-gray-500 text-sm">Year of Graduation: May 2027</p>
                  <p className="text-gray-500 text-sm">GPA: 7.45</p>
                  <p className="text-gray-600 mt-2">
                    Higher Secondary School Certificate
                  </p>
                  <p className="text-gray-500 text-sm">
                    Seventh Day Adventist matric Hr.sec school
                  </p>
                  <p className="text-gray-500 text-sm">2022 - 2023</p>
                  <p className="text-gray-500 text-sm">70.1%</p>
                  <p className="text-gray-600 mt-2">
                    Secondary School Leaving Certificate
                  </p>
                  <p className="text-gray-500 text-sm">
                    Seventh Day Adventist matric Hr.sec school
                  </p>
                  <p className="text-gray-500 text-sm">2020 - 2021</p>
                  <p className="text-gray-500 text-sm">PASS</p>
                </div>
              </div>
            </div>

            {/* Internship 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-purple-900">
                    Internship Experience
                  </h3>
                  <p className="text-gray-600">
                    Intern - Protection & Substation Automation
                  </p>
                  <p className="text-gray-500 text-sm">
                    Schneider Electric India Infrastructure Limited • July - August 2025
                  </p>

                  {/* Certificate link */}
                  <a
                    href="https://drive.google.com/file/d/1EQ8uDrDl5FGOYJrYu8JXwaj0m7ocKJY_/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    📄 View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-purple-900">
                    Internship Experience
                  </h3>
                  <p className="text-gray-600">Intern - Electrical & Instrumentation</p>
                  <p className="text-gray-500 text-sm">
                    UltraTech Cement Limited • December 2024
                  </p>

                  {/* Certificate link */}
                  <a
                    href="https://drive.google.com/file/d/1BBOKwrclTzfJHEjYokBW-Sqn6mrbzp8p/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    📄 View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-purple-900">Interests</h3>
                  <p className="text-gray-600">
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