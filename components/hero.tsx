"use client"

import Image from "next/image"
import AnimatedTyping from "./animated-typing"
import DownloadCV from "./download-cv"
import ContactModal from "./contact-modal"

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div id="cv-content" className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="animate-slide-in-up space-y-8">
          <div>
            <h2 className="text-6xl md:text-7xl font-bold text-balance mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                <AnimatedTyping text="MD Asif Bin Eyashin" speed={60} className="inline-block" />
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mt-4">
              <AnimatedTyping text="Passionate Learner & Tech Enthusiast" speed={40} delay={1500} />
            </p>
          </div>

          <div className="space-y-6 text-gray-200">
            <div>
              <p className="text-sm text-purple-400 font-semibold mb-2 uppercase tracking-wide">Date of Birth</p>
              <p className="text-xl font-medium">
                <AnimatedTyping text="December 5, 2004" speed={50} delay={2500} />
              </p>
            </div>
            <div>
              <p className="text-sm text-purple-400 font-semibold mb-2 uppercase tracking-wide">Location</p>
              <p className="text-xl font-medium">
                <AnimatedTyping text="Nateshwar, Shonaimuri, Chowmuhni, Noakhali" speed={40} delay={3500} />
              </p>
            </div>
            <div>
              <p className="text-sm text-purple-400 font-semibold mb-2 uppercase tracking-wide">About Me</p>
              <p className="text-lg leading-relaxed text-gray-300">
                <AnimatedTyping
                  text="A dedicated learner with diverse educational background spanning English medium schooling, Islamic studies, Quranic memorization, and modern technology training. Committed to continuous growth and skill development across multiple disciplines."
                  speed={25}
                  delay={4500}
                />
              </p>
            </div>
          </div>

          <div className="flex gap-6 pt-8">
            <DownloadCV />
            <ContactModal />
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-slide-in-down flex justify-center">
          <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-10-25_19-29-03-4NBu8o4sDTr9VQrgCt0ofvSPNyJl9a.jpg"
              alt="MD Asif Bin Eyashin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
