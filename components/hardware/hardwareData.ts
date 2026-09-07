export interface SpecItem { label: string; value: string }
export interface DegradationPoint { year: number; pct: number }

export interface HardwareItem {
  id: string;
  category: 'panels' | 'battery' | 'inverter';
  name: string;
  tagline: string;
  badges: string[];
  keySpec: string;
  keySpecLabel: string;
  icon: 'sun' | 'battery' | 'cpu';
  efficiency: number; // %
  specs: SpecItem[];
  degradation: DegradationPoint[];
  realTimeMetrics: { label: string; value: string; color: 'emerald' | 'blue' | 'orange' }[];
}

export const HARDWARE: HardwareItem[] = [
  {
    id: 'tier1-panel',
    category: 'panels',
    name: 'Tier-1 Monocrystalline Panel',
    tagline: 'Maximum output. Minimal footprint.',
    badges: ['25-Year Degradation Guarantee', 'IP68 Weatherproof', 'Hail Resistant'],
    keySpec: '430W',
    keySpecLabel: 'Peak Power',
    icon: 'sun',
    efficiency: 22.8,
    specs: [
      { label: 'Peak Power Output', value: '430 Wp' },
      { label: 'Cell Efficiency', value: '22.8%' },
      { label: 'Panel Dimensions', value: '1722 × 1134 × 30 mm' },
      { label: 'Weight', value: '20.5 kg' },
      { label: 'Open-Circuit Voltage', value: '49.8 V' },
      { label: 'Short-Circuit Current', value: '11.2 A' },
      { label: 'Temperature Coefficient', value: '-0.30% / °C' },
      { label: 'Operating Temp Range', value: '-40°C to +85°C' },
      { label: 'Degradation Year 1', value: '≤ 2%' },
      { label: 'Degradation Year 2–25', value: '≤ 0.45% / yr' },
      { label: 'Certifications', value: 'IEC 61215, IEC 61730, UL 1703' },
      { label: 'Frame Material', value: 'Anodised aluminium' },
      { label: 'Product Warranty', value: '15 years' },
      { label: 'Performance Warranty', value: '25 years (80.7% output)' },
    ],
    degradation: [
      { year: 0, pct: 100 },
      { year: 1, pct: 98 },
      { year: 5, pct: 96.2 },
      { year: 10, pct: 93.7 },
      { year: 15, pct: 91.2 },
      { year: 20, pct: 88.7 },
      { year: 25, pct: 86.2 },
    ],
    realTimeMetrics: [
      { label: 'Current Output', value: '6.4 kW', color: 'emerald' },
      { label: 'Daily Yield', value: '38.2 kWh', color: 'emerald' },
      { label: 'Panel Temp', value: '44 °C', color: 'orange' },
    ],
  },
  {
    id: 'lfp-battery',
    category: 'battery',
    name: 'LFP Battery Storage',
    tagline: 'All-night backup. Zero compromise.',
    badges: ['100% Blackout Protection', '6,000-Cycle Lifespan', 'Zero Thermal Runaway'],
    keySpec: '10 kWh',
    keySpecLabel: 'Usable Capacity',
    icon: 'battery',
    efficiency: 96.5,
    specs: [
      { label: 'Usable Capacity', value: '10 kWh' },
      { label: 'Chemistry', value: 'Lithium Iron Phosphate (LFP)' },
      { label: 'Round-Trip Efficiency', value: '96.5%' },
      { label: 'Max Continuous Power', value: '5 kW' },
      { label: 'Peak Power (10s)', value: '7.5 kW' },
      { label: 'Depth of Discharge', value: '100% DoD' },
      { label: 'Cycle Life', value: '6,000 cycles @ 80% capacity' },
      { label: 'Switchover Time', value: '0ms (instant)' },
      { label: 'Operating Temp', value: '0°C to +50°C' },
      { label: 'Dimensions', value: '665 × 355 × 195 mm' },
      { label: 'Weight', value: '97 kg' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Warranty', value: '10 years / 6,000 cycles' },
      { label: 'Scalable', value: 'Up to 40 kWh (4 units)' },
    ],
    degradation: [
      { year: 0, pct: 100 },
      { year: 2, pct: 99 },
      { year: 5, pct: 97 },
      { year: 8, pct: 93 },
      { year: 10, pct: 80 },
    ],
    realTimeMetrics: [
      { label: 'State of Charge', value: '88%', color: 'emerald' },
      { label: 'Current Flow', value: '+2.1 kW', color: 'emerald' },
      { label: 'Temp', value: '28 °C', color: 'blue' },
    ],
  },
  {
    id: 'smart-microinverter',
    category: 'inverter',
    name: 'Smart Microinverter',
    tagline: 'Panel-level intelligence. Whole-home control.',
    badges: ['Per-Panel MPPT', '25-Year Warranty', 'Shade Tolerant'],
    keySpec: '99.2%',
    keySpecLabel: 'CEC Efficiency',
    icon: 'cpu',
    efficiency: 99.2,
    specs: [
      { label: 'CEC Efficiency', value: '99.2%' },
      { label: 'Max DC Input Power', value: '480 W' },
      { label: 'AC Output Power', value: '380 VA' },
      { label: 'MPPT Algorithm', value: 'Per-panel (IQ8 Series)' },
      { label: 'Grid Frequency', value: '50/60 Hz' },
      { label: 'AC Output Voltage', value: '220/230/240 V' },
      { label: 'Operating Temp', value: '-40°C to +65°C' },
      { label: 'IP Rating', value: 'IP67 (outdoor rated)' },
      { label: 'Weight', value: '1.1 kg' },
      { label: 'Dimensions', value: '212 × 175 × 30 mm' },
      { label: 'Communication', value: 'Envoy-S metered gateway' },
      { label: 'Monitoring', value: 'Panel-level via Enlighten app' },
      { label: 'Warranty', value: '25 years' },
      { label: 'Rapid Shutdown', value: 'NEC 2017 compliant' },
    ],
    degradation: [
      { year: 0, pct: 100 },
      { year: 5, pct: 99.5 },
      { year: 10, pct: 99 },
      { year: 15, pct: 98.5 },
      { year: 20, pct: 97.8 },
      { year: 25, pct: 97 },
    ],
    realTimeMetrics: [
      { label: 'DC → AC Conversion', value: '99.2%', color: 'emerald' },
      { label: 'Active Units', value: '16 / 16', color: 'emerald' },
      { label: 'Shade Loss', value: '0.2%', color: 'blue' },
    ],
  },
];
