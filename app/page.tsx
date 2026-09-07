import { HeroSection } from '@/components/hero';
import { AboutOwner } from '@/components/about';
import { EnergyVisualizer } from '@/components/energy';
import { RateComparison } from '@/components/savings';
import { HardwareGrid } from '@/components/hardware';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EnergyVisualizer />
      <HardwareGrid />
      <RateComparison />
      <AboutOwner />
    </main>
  );
}
