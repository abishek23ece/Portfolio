export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 70 },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'SQL/NoSQL', level: 80 },
        { name: 'Docker', level: 70 },
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
