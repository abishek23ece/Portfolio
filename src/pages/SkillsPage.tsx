export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Java',
          description:
            'Strong understanding of object-oriented programming concepts with experience in building applications and implementing data structures.'
        },
        {
          name: 'C',
          description:
            'Solid foundation in low-level programming, memory management, and basic hardware interfacing.'
        },
        {
          name: 'Python',
          description:
            'Used for scripting, automation, data handling, and basic embedded system prototyping.'
        },
        {
          name: 'MATLAB (Basic)',
          description:
            'Applied for signal processing simulations, control system analysis, and numerical computations in academics.'
        }
      ]
    },
    {
      title: 'VLSI & PCB Fundamentals',
      skills: [
        {
          name: 'Basics of VLSI Design',
          description:
            'Understanding of CMOS logic, combinational and sequential circuits, digital design flow, and introductory HDL concepts.'
        },
        {
          name: 'Basics of PCB Design',
          description:
            'Knowledge of schematic design, component placement, routing fundamentals, and PCB layer concepts.'
        }
      ]
    },
    {
      title: 'Embedded Systems & Microcontrollers',
      skills: [
        {
          name: 'Embedded Systems Fundamentals',
          description:
            'Basic knowledge of embedded architectures, interrupts, timers, and peripheral interfacing.'
        },
        {
          name: 'Arduino Uno',
          description:
            'Hands-on experience developing prototypes involving sensors, actuators, and serial communication.'
        },
        {
          name: 'ESP32',
          description:
            'Worked on Wi-Fi and Bluetooth based projects for IoT applications and wireless communication.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-400">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-14"></div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl
              hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-8 text-cyan-300">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="border-l-4 border-cyan-400 pl-4"
                  >
                    <h4 className="text-cyan-200 font-medium text-lg mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
