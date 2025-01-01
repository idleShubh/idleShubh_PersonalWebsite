"use client"
import React from 'react'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B192C]" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: 'twinkle 1.5s ease-in-out infinite',
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <div 
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          animation: 'shooting-star 5s linear infinite',
          top: '20%',
          left: '0%'
        }}
      />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes shooting-star {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100vw, 100vh); }
        }
      `}</style>
    </div>
  )
}

export default BackgroundAnimation
