"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Islamic Studies",
      skills: ["Quranic Memorization (Hifz)", "Arabic Language", "Islamic Jurisprudence", "Hadith Studies"],
    },
    {
      category: "Technical Skills",
      skills: ["Mobile Repair", "Android Devices", "iPhone Devices", "Hardware Troubleshooting"],
    },
    {
      category: "Languages",
      skills: ["Bengali (Native)", "English (Fluent)", "Urdu", "Farsi", "Arabic"],
    },
    {
      category: "Personal Qualities",
      skills: ["Dedicated Learner", "Problem Solver", "Adaptable", "Passionate"],
    },
  ]

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-300 text-xl">Diverse competencies developed through education and training</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-blue-900/10 hover:from-purple-900/20 hover:to-blue-900/20 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm group"
            >
              <h3 className="text-3xl font-bold text-purple-400 mb-8 group-hover:text-blue-400 transition-colors">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0"></span>
                    <span className="text-gray-200 text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
