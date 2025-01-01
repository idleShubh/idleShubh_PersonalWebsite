import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function Home() {
  return (
    <AuroraBackground>
      <div className="flex flex-col min-h-screen w-full text-white max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Main />
        <Footer />
      </div>
    </AuroraBackground>
  )
}

