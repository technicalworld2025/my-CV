"use client"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              MAZID OSS
            </h1>
            <p className="text-xs text-gray-400">Professional CV & Portfolio</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors font-medium">
            About
          </a>
          <a href="#education" className="text-sm text-gray-300 hover:text-purple-400 transition-colors font-medium">
            Education
          </a>
          <a href="#skills" className="text-sm text-gray-300 hover:text-purple-400 transition-colors font-medium">
            Skills
          </a>
        </nav>
      </div>
    </header>
  )
}
