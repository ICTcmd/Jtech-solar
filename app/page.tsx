import { HeroSection }    from '@/components/hero';
import { WhySolar }       from '@/components/whysolar';
import { EnergyVisualizer } from '@/components/energy';
import { HardwareGrid }   from '@/components/hardware';
import { RateComparison } from '@/components/savings';
import { AboutOwner }     from '@/components/about';

export default function Home() {
  return (
    <main>
      {/* 1. Hero + Roof Estimator */}
      <HeroSection />

      {/* 2. Why Choose Solar — using why solar 1-4.jpg images */}
      <WhySolar />

      {/* 3. Energy Flow Visualizer + Blackout Simulator */}
      <EnergyVisualizer />

      {/* 4. Hardware Spec Grid */}
      <HardwareGrid />

      {/* 5. Rate Freeze Comparison Chart */}
      <RateComparison />

      {/* 6. Owner + Customer Video Review + Review Photo */}
      <AboutOwner />
    </main>
  );
}
