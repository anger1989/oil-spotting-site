import Hero from '@/components/Hero'
import About from '@/components/About'
import Streaming from '@/components/Streaming'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen cosmic-bg">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Streaming />
      </div>
    </main>
  )
}

