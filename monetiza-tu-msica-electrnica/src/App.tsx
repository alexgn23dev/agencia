import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <Navbar />
      <main>
        <Hero />
        
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <Problem />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <Solution />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <Services />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <Process />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <SocialProof />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        </div>

        <FAQ />

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
