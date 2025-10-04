export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { 
          name: 'Java', 
          description: 'Proficient in object-oriented programming for developing robust applications, including data structures and algorithms implementation.' 
        },
        { 
          name: 'C', 
          description: 'Strong foundation in low-level programming for system-level tasks, memory management, and hardware interfacing.' 
        },
        { 
          name: 'Python', 
          description: 'Experienced in scripting for automation, data analysis, and prototyping embedded applications with libraries like NumPy and PySerial.' 
        },
        { 
          name: 'Basic MATLAB', 
          description: 'Used for signal processing simulations, control systems modeling, and numerical computations in academic projects.' 
        },
      ]
    },
    {
      title: 'Hardware Description & Design',
      skills: [
        { 
          name: 'Verilog Code', 
          description: 'Skilled in writing and simulating digital circuits using Verilog for FPGA-based designs and state machine implementations.' 
        },
        { 
          name: 'PCB Design', 
          description: 'Hands-on experience with tools like Eagle or KiCad for schematic capture, layout, and fabrication of custom circuit boards.' 
        },
      ]
    },
    {
      title: 'Embedded Systems & Microcontrollers',
      skills: [
        { 
          name: 'Basics of Embedded Systems', 
          description: 'Understanding of real-time operating systems (RTOS), interrupt handling, and interfacing peripherals for IoT and automation projects.' 
        },
        { 
          name: 'Arduino Uno', 
          description: 'Developed prototypes for sensor integration, motor control, and data logging using the Arduino IDE and shields.' 
        },
        { 
          name: 'ESP32', 
          description: 'Implemented Wi-Fi and Bluetooth-enabled projects for wireless communication, including MQTT protocols for IoT applications.' 
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="text-slate-700 font-medium text-lg mb-2">{skill.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{skill.description}</p>
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