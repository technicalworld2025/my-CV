"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-purple-500/30 bg-gradient-to-b from-black to-purple-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6">About</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Professional CV showcasing educational background, skills, and expertise across diverse fields including
              Islamic studies, technology, and languages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6">Connect</h3>
            <p className="text-gray-300 text-base mb-3">📍 South Khan, Dhaka 1230, Bangladesh</p>
            <p className="text-gray-300 text-base">Open to opportunities and collaborations</p>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-base">© {currentYear} MD Asif Bin Eyashin. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
