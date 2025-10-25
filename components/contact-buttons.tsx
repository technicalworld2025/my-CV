"use client"

import { Phone, MessageCircle, Send, Instagram, Facebook } from "lucide-react"

export default function ContactButtons() {
  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      href: "tel:01610916777",
      color: "bg-green-600 hover:bg-green-700",
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
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      {contacts.map((contact) => {
        const Icon = contact.icon
        return (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contact.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
            title={contact.label}
            aria-label={contact.label}
          >
            <Icon size={24} />
          </a>
        )
      })}
    </div>
  )
}
