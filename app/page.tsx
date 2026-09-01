import { HeroSection } from '@/components/hero';
import { EnergyVisualizer } from '@/components/energy';
import { AboutOwner } from '@/components/about';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutOwner />
      <EnergyVisualizer />
    </main>
  );
}
