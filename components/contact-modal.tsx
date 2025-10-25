"use client"

import { useState } from "react"
import { Phone, MessageCircle, Send, Instagram, Facebook, X } from "lucide-react"

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      href: "tel:01610916777",
      color: "bg-green-600 hover:bg-green-700",
      number: "01610916777",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/1BaR1P3e5F/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/qr/Q3H33J4UCNDFN1",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/Abdulmazid86",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mazid7895?igsh=ZmZlYmhkc2I2dnFk",
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all font-semibold text-lg"
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-8 right-8 z-51 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <X size={32} />
          </button>

          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-3xl p-12 max-w-2xl w-full animate-scale-in max-h-[90vh] overflow-y-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {contacts.map((contact) => {
                const Icon = contact.icon
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div
                      className={`${contact.color} w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl`}
                    >
                      <Icon size={48} />
                    </div>
                    <span className="text-center text-gray-200 font-semibold text-sm group-hover:text-purple-400 transition-colors">
                      {contact.label}
                    </span>
                  </a>
                )
              })}
            </div>

            <div className="mt-12 p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-center">
              <p className="text-gray-300 text-lg">
                Choose any platform above to connect with me. I'm always happy to hear from you!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
