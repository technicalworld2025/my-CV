"use client"

import { Download } from "lucide-react"
import html2canvas from "html2canvas"
import { useState } from "react"

export default function DownloadCV() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const element = document.getElementById("cv-content")
      if (!element) {
        console.error("CV content element not found")
        return
      }

      const canvas = await html2canvas(element, {
        backgroundColor: "#000000",
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      })

      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = "MD_Asif_Bin_Eyashin_CV.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading CV:", error)
      alert("Failed to download CV. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold text-lg flex items-center gap-2 disabled:opacity-50"
    >
      <Download size={20} />
      {isLoading ? "Downloading..." : "Download CV"}
    </button>
  )
}
