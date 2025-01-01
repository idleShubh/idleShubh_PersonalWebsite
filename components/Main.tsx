import GlassCard from './GlassCard'

export default function Main() {
  return (
    <main className="flex-grow flex justify-center items-center p-6">
      <div className="flex gap-4 w-full max-w-6xl h-full">
        <div className="flex flex-col space-y-4 w-1/3">
          <GlassCard title="Projects" content="View some of my cool projects" className="flex-1" />
          <GlassCard title="Education" content="Check out my tech skills and education" className="flex-1" />
          <GlassCard title="Goals" content="Discover my aspirations" className="flex-1" />
        </div>
        <div className="w-1/3">
          <GlassCard 
            title="About" 
            content="I’m Shubh Srivastava, a CS student at Scaler School of Technology,passionate about creating impactful tech solutions. Hailing from Lucknow, I thrive on challenges and believe in continuous learning. With a love for coding, content creation, and innovation, I aim to blend technology with creativity. My mantra,Always try to TRY :), drives me to embrace growth and push boundaries. Let’s connect and collaborate!" 
            className="h-full"
          />
        </div>
        <div className="flex flex-col space-y-4 w-1/3">
          <GlassCard title="Blogs" className="flex-grow">
            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="rounded-lg p-2 backdrop-blur-md bg-blue-500/50 border border-blue-400/30 
                transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-blue-500/60 hover:shadow-lg hover:shadow-blue-400/20 hover:scale-[1.02]
                hover:border-blue-400/40">
                <h3 className="text-white text-center">Blog 1</h3>
              </div>
              <div className="rounded-lg p-2 backdrop-blur-md bg-orange-500/50 border border-orange-400/30 
                transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-orange-500/60 hover:shadow-lg hover:shadow-orange-400/20 hover:scale-[1.02]
                hover:border-orange-400/40">
                <h3 className="text-white text-center">Blog 2</h3>
              </div>
              <div className="rounded-lg p-2 backdrop-blur-md bg-purple-500/50 border border-purple-400/30 
                transition-all duration-300 ease-in-out cursor-pointer
                hover:bg-purple-500/60 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-[1.02]
                hover:border-purple-400/40">
                <h3 className="text-white text-center">Blog 3</h3>
              </div>
            </div>
          </GlassCard>
          <GlassCard title="My clicks" content="I upload random photo here : )" className="h-1/3" />
        </div>
      </div>
    </main>
  )
}

