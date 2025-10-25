import Header from "@/components/header"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import ContactButtons from "@/components/contact-buttons"

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(102, 51, 153, 0.1) 25%, rgba(102, 51, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(102, 51, 153, 0.1) 75%, rgba(102, 51, 153, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(102, 51, 153, 0.1) 25%, rgba(102, 51, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(102, 51, 153, 0.1) 75%, rgba(102, 51, 153, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <ContactButtons />

      <Header />
      <Hero />
      <Education />
      <Skills />
      <Footer />
    </main>
  )
}
