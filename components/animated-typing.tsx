"use client"

import { useEffect, useState } from "react"

interface AnimatedTypingProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function AnimatedTyping({ text, speed = 50, delay = 0, className = "" }: AnimatedTypingProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(delayTimer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [displayedText, text, speed, isTyping])

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  )
}
