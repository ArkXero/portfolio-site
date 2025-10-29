import { lazy, Suspense, useMemo, memo } from 'react';
import HolographicCard from './components/ui/holographic-card';
import './App.css';
import { Code2, Database, Globe, Cpu, Terminal, Zap } from 'lucide-react';

// Lazy load heavy components
const AnimatedShaderBackground = lazy(() => import('./components/ui/animated-shader-background'));
const LogoLoop = lazy(() => import('./components/ui/logo-loop'));

// Memoized section components
const HeroSection = memo(() => (
  <div className="relative min-h-screen flex items-center justify-center p-8" style={{ zIndex: 1 }}>
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
        <p className="text-gray-300">Interactive Holographic Card Demo</p>
      </div>

      <div className="flex justify-center">
        <HolographicCard />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          Move your mouse over me!
        </p>
      </div>
    </div>
  </div>
));

HeroSection.displayName = 'HeroSection';

const ContentCard = memo<{ title: string; description: string }>(({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
));

ContentCard.displayName = 'ContentCard';

const AdditionalContent = memo(() => (
  <div className="relative bg-black py-16 z-10">
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ContentCard
          title="About Me"
          description="Passionate about technology and innovation, currently studying at TJHSST."
        />
        <ContentCard
          title="Projects"
          description="Building amazing things with code. Check out my latest work."
        />
        <ContentCard
          title="Contact"
          description="Let's connect and collaborate on exciting projects."
        />
      </div>
    </div>
  </div>
));

AdditionalContent.displayName = 'AdditionalContent';

const Footer = memo(() => (
  <footer className="relative bg-black border-t border-gray-900 py-8 z-10">
    <div className="container mx-auto px-8 text-center text-gray-500">
      <p>&copy; 2025 Ronit Singh. All rights reserved.</p>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

function App() {
  // Memoize tech logos to prevent recreation on every render
  const techLogos = useMemo(
    () => [
      {
        node: <Code2 className="w-8 h-8 text-blue-400" />,
        title: 'JavaScript',
        ariaLabel: 'JavaScript'
      },
      {
        node: <Database className="w-8 h-8 text-green-400" />,
        title: 'Database',
        ariaLabel: 'Database Technologies'
      },
      {
        node: <Globe className="w-8 h-8 text-purple-400" />,
        title: 'Web Development',
        ariaLabel: 'Web Development'
      },
      {
        node: <Cpu className="w-8 h-8 text-red-400" />,
        title: 'Computer Science',
        ariaLabel: 'Computer Science'
      },
      {
        node: <Terminal className="w-8 h-8 text-yellow-400" />,
        title: 'Terminal',
        ariaLabel: 'Command Line'
      },
      {
        node: <Zap className="w-8 h-8 text-pink-400" />,
        title: 'Performance',
        ariaLabel: 'Performance Optimization'
      }
    ],
    []
  );

  return (
    <div className="relative min-h-screen">
      {/* Lazy-loaded Starry Background */}
      <Suspense fallback={<div className="fixed top-0 left-0 w-full h-screen bg-black -z-10" />}>
        <AnimatedShaderBackground />
      </Suspense>

      {/* Hero Section with Holographic Card */}
      <HeroSection />

      {/* Gradient Transition Section - smooth fade from stars to solid background */}
      <div
        className="relative h-64 -mt-64 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Lazy-loaded Logo Loop Section */}
      <Suspense fallback={<div className="h-48 bg-black" />}>
        <div className="relative bg-black py-16 z-10">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Technologies & Skills
            </h2>
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={32}
              gap={48}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="rgba(0, 0, 0, 1)"
              ariaLabel="Technology stack"
              className="mb-8"
            />
          </div>
        </div>
      </Suspense>

      {/* Additional Content Section */}
      <AdditionalContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
