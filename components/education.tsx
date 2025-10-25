"use client"

export default function Education() {
  const educationData = [
    {
      year: "2008-2015",
      institution: "Mascot English Medium School",
      details: "Class Play to Class 5",
      location: "Dhaka",
    },
    {
      year: "2016-2018",
      institution: "Dhaka Ashkona Alsaba Academy",
      details: "Class 6 to Class 8",
      location: "Dhaka",
    },
    {
      year: "2019",
      institution: "Noakhali Chowmuhni Nurani Madrasa",
      details: "3 Months - 3 Classes",
      location: "Noakhali",
    },
    {
      year: "2020-2022",
      institution: "Shenbhag Mohidipur Roshidiya Madrasa",
      details: "Hifz (Quran Memorization) Completion",
      location: "Noakhali",
    },
    {
      year: "2023",
      institution: "Feni Roshidiya Madrasa",
      details: "Urdu, Farsi, Saraf, Nahwu & Mir Studies",
      location: "Feni",
    },
    {
      year: "2024",
      institution: "Mutafarreka Hedayatunnahu Kafiya",
      details: "Islamic Studies Completion",
      location: "Dhaka",
    },
    {
      year: "2025",
      institution: "Fahim Telecom",
      details: "Mobile Repair Course - Android & iPhone",
      location: "Dhaka-Chittagong Road",
    },
  ]

  return (
    <section id="education" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h2>
          <p className="text-gray-300 text-xl">A comprehensive path through diverse learning experiences</p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/10 to-blue-900/10 hover:from-purple-900/20 hover:to-blue-900/20 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1">
                  <p className="text-sm font-bold text-purple-400 uppercase tracking-wide">{edu.year}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-gray-300 mb-3 text-lg">{edu.details}</p>
                  <p className="text-sm text-purple-300">📍 {edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
