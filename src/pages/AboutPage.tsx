import { GraduationCap, Lightbulb, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4
          bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-14 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Section */}
          <div>
            <p className="text-lg leading-relaxed mb-6 text-slate-300">
              I am a third-year Electronics and Communication Engineering (ECE) student at
              K Ramakrishnan College of Technology, Trichy. I am passionate about building
              reliable systems, exploring emerging technologies, and solving practical
              engineering problems.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-slate-300">
              Through academic projects, internships, and self-learning, I focus on
              embedded systems, electronics, and modern software development while
              continuously improving my technical and problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Quick Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium
                  bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">

            {/* Education */}
            <Card
              icon={<GraduationCap size={22} />}
              title="Education"
            >
              <Info
                title="B.E. Electronics and Communication Engineering"
                subtitle="K Ramakrishnan College of Technology, Trichy"
                extra="Graduation: May 2027 | GPA: 7.45"
              />
              <Divider />
              <Info
                title="Higher Secondary School Certificate"
                subtitle="Seventh Day Adventist Matric Hr. Sec. School"
                extra="2022 – 2023 | 70.1%"
              />
              <Divider />
              <Info
                title="Secondary School Leaving Certificate"
                subtitle="Seventh Day Adventist Matric Hr. Sec. School"
                extra="2020 – 2021 | PASS"
              />
            </Card>

            {/* Internship 1 */}
            <Card
              icon={<Briefcase size={22} />}
              title="Internship Experience"
            >
              <Info
                title="Intern – Protection & Substation Automation"
                subtitle="Schneider Electric India Infrastructure Limited"
                extra="July – August 2025"
              />
              <CertificateLink href="https://drive.google.com/file/d/1EQ8uDrDl5FGOYJrYu8JXwaj0m7ocKJY_/view" />
            </Card>

            {/* Internship 2 */}
            <Card
              icon={<Briefcase size={22} />}
              title="Internship Experience"
            >
              <Info
                title="Intern – Electrical & Instrumentation"
                subtitle="UltraTech Cement Limited"
                extra="December 2024"
              />
              <CertificateLink href="https://drive.google.com/file/d/1BBOKwrclTzfJHEjYokBW-Sqn6mrbzp8p/view" />
            </Card>

            {/* Interests */}
            <Card
              icon={<Lightbulb size={22} />}
              title="Interests"
            >
              <p className="text-slate-300">
                Embedded Systems, PCB Design, IoT Applications, Web Development
              </p>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

function Card({ icon, title, children }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10
      rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-cyan-500/20 text-cyan-300 p-3 rounded-xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-cyan-200">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function Info({ title, subtitle, extra }) {
  return (
    <div>
      <p className="font-medium text-slate-100">{title}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
      <p className="text-sm text-slate-500">{extra}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-white/10 my-3"></div>;
}

function CertificateLink({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 text-sm font-medium
      text-cyan-300 hover:text-cyan-200 transition-colors"
    >
      View Certificate →
    </a>
  );
}
