'use client'

import { useState, useEffect } from 'react'

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
]

export default function Footer() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <footer className="p-6 text-center">
      <p className="text-lg italic">"{quote.text}"</p>
      <p className="text-sm mt-2">- {quote.author}</p>
      <p className="text-xs mt-4 text-gray-400">refresh to change</p>
    </footer>
  )
}

