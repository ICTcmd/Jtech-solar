# Design Document

## Overview

This design document describes the technical architecture, component structure, and TypeScript interfaces for the JTech Solar-Pro website. The website follows a modern, high-tech aesthetic inspired by Linear and Vercel, built with Next.js App Router, Tailwind CSS, TypeScript, and Lucide React icons.

## Design System Tokens

### Color Palette

```typescript
// tailwind.config.ts theme extension
const colors = {
  slate: {
    base: '#020617',      // Dark slate background
    surface: '#f8fafc',   // Off-white containers
    border: '#1e293b',    // slate-800 borders
  },
  emerald: {
    glow: '#10b981',      // Accent and active states
  }
}
```

### Typography Scale

```typescript
const typography = {
  hero: {
    h1: 'text-6xl md:text-7xl lg:text-8xl font-bold',
    h2: 'text-4xl md:text-5xl lg:text-6xl font-semibold',
    body: 'text-lg md:text-xl',
  },
  section: {
    h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold',
    h3: 'text-2xl md:text-3xl font-medium',
    body: 'text-base md:text-lg',
  },
  ui: {
    label: 'text-sm font-medium',
    caption: 'text-xs text-slate-400',
  }
}
```

### Spacing & Layout

```typescript
const spacing = {
  section: 'py-16 md:py-24 lg:py-32',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  card: 'p-6 md:p-8',
}
```

### Effects

```typescript
const effects = {
  frostedGlass: 'backdrop-blur-md bg-slate-900/60',
  border: 'border border-slate-800',
  glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  transition: 'transition-all duration-300 ease-out',
}
```

## TypeScript Interfaces

### Core Data Models

```typescript
// Equipment specifications
interface EquipmentSpec {
  id: string;
  type: 'panel' | 'battery' | 'inverter';
  name: string;
  manufacturer: string;
  imageUrl: string;
  specifications: {
    power?: string;
    efficiency?: string;
    capacity?: string;
    voltage?: string;
    dimensions: string;
    weight: string;
    warranty: string;
    certifications: string[];
  };
  features: string[];
  performanceMetrics: {
    label: string;
    value: string;
    unit?: string;
  }[];
}

// Roof estimator data
interface RoofEstimatorData {
  step: 1 | 2 | 3;
  roofArea: number | null;           // square feet (100-10000)
  monthlyBill: number | null;        // dollars (1-9999)
  roofOrientation: RoofOrientation | null;
}

type RoofOrientation = 
  | 'North' 
  | 'South' 
  | 'East' 
  | 'West' 
  | 'Northeast' 
  | 'Northwest' 
  | 'Southeast' 
  | 'Southwest';

interface RoofEstimate {
  annualGenerationKwh: number;
  annualSavingsDollars: number;
  recommendedSystemSize: number;     // kW
  estimatedPanelCount: number;
}

// Energy flow visualization
interface EnergyFlowState {
  mode: 'day' | 'night';
  flows: {
    panelToHome: boolean;
    panelToBattery: boolean;
    batteryToHome: boolean;
  };
  metrics: {
    solarGeneration: number;         // kW
    homeConsumption: number;         // kW
    batteryCharge: number;           // %
  };
}

// Savings comparison
interface SavingsData {
  year: number;                      // 0-20
  utilityCost: number;               // cumulative
  solarCost: number;                 // cumulative
  netSavings: number;                // utility - solar
}

interface SavingsParameters {
  initialUtilityRate: number;        // $/kWh
  utilityInflationRate: number;      // % per year
  monthlyUsage: number;              // kWh
  solarSystemCost: number;           // $ total
  solarMonthlyPayment: number;       // $ fixed
  solarLoanTermYears: number;
}

// Lead form
interface LeadFormData {
  name: string;                      // max 100 chars
  email: string;                     // max 254 chars
  phone: string;                     // max 20 chars
  address: {
    street: string;                  // max 200 chars
    city: string;                    // max 100 chars
    state: string;                   // max 50 chars
    postalCode: string;              // max 20 chars
  };
}

interface LeadFormValidation {
  name: { valid: boolean; error?: string };
  email: { valid: boolean; error?: string };
  phone: { valid: boolean; error?: string };
  address: { valid: boolean; error?: string };
}

interface LeadFormState {
  data: LeadFormData;
  validation: LeadFormValidation;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errorMessage?: string;
}

// Trust badges
interface TrustBadge {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}
```

## Component Architecture

### Page Structure

```
app/
├── layout.tsx                 # Root layout with fonts, metadata
├── page.tsx                   # Home page (main landing)
└── globals.css               # Tailwind directives

components/
├── hero/
│   ├── HeroSection.tsx       # Main hero container
│   ├── TrustBadges.tsx       # Micro-pill badges
│   └── RoofEstimator.tsx     # 3-step estimator card
├── energy/
│   ├── EnergyVisualizer.tsx  # Home schematic with flows
│   ├── DayNightToggle.tsx    # Mode switcher
│   └── EnergyFlowPath.tsx    # Animated pathway component
├── hardware/
│   ├── HardwareGrid.tsx      # Equipment cards grid
│   ├── EquipmentCard.tsx     # Individual product card
│   └── SpecDrawer.tsx        # Slide-over spec panel
├── savings/
│   ├── SavingsSlider.tsx     # 20-year timeline component
│   ├── TimelineControl.tsx   # Slider input
│   └── CostChart.tsx         # Visual comparison chart
├── lead/
│   ├── LeadForm.tsx          # Contact form
│   ├── FormField.tsx         # Reusable input component
│   └── PrivacyNotice.tsx     # Privacy microcopy
├── footer/
│   ├── Footer.tsx            # Footer container
│   ├── TrustSignals.tsx      # Local badges & licensing
│   └── ContactInfo.tsx       # Contact details
└── ui/
    ├── Button.tsx            # Reusable button
    ├── Card.tsx              # Frosted glass card
    ├── Input.tsx             # Form input
    └── FrostedContainer.tsx  # Glass effect wrapper
```

### Component Interfaces

```typescript
// Hero Section
interface HeroSectionProps {
  companyName: string;
  tagline: string;
  trustBadges: TrustBadge[];
}

// Trust Badges
interface TrustBadgesProps {
  badges: TrustBadge[];
}

// Roof Estimator
interface RoofEstimatorProps {
  onEstimateComplete?: (estimate: RoofEstimate) => void;
}

interface RoofEstimatorState {
  data: RoofEstimatorData;
  estimate: RoofEstimate | null;
  errors: {
    roofArea?: string;
    monthlyBill?: string;
    roofOrientation?: string;
  };
}

// Energy Visualizer
interface EnergyVisualizerProps {
  initialMode?: 'day' | 'night';
  autoAnimate?: boolean;
}

interface EnergyVisualizerState {
  mode: 'day' | 'night';
  isAnimating: boolean;
  flowState: EnergyFlowState;
}

// Hardware Grid
interface HardwareGridProps {
  equipment: EquipmentSpec[];
}

interface HardwareGridState {
  selectedEquipment: EquipmentSpec | null;
  isDrawerOpen: boolean;
}

// Spec Drawer
interface SpecDrawerProps {
  equipment: EquipmentSpec | null;
  isOpen: boolean;
  onClose: () => void;
}

// Savings Slider
interface SavingsSliderProps {
  parameters: SavingsParameters;
  initialYear?: number;
}

interface SavingsSliderState {
  currentYear: number;
  savingsData: SavingsData[];
}

// Lead Form
interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => Promise<void>;
}

// Footer
interface FooterProps {
  trustBadges: TrustBadge[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  licensing: {
    licenseNumber: string;
    issuingAuthority: string;
  };
  certifications: string[];
}

// UI Components
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

interface CardProps {
  variant: 'frosted' | 'solid';
  children: React.ReactNode;
  className?: string;
}

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'tel' | 'number';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}
```

## Layout & Interaction Design

### 1. Hero Section

**Layout:**
- Full viewport height on desktop, auto on mobile
- Centered content with max-width container
- Trust badges horizontally aligned below headline
- Roof estimator card positioned below badges with frosted glass effect

**Structure:**
```
<section className="bg-slate-base min-h-screen flex items-center">
  <div className="container">
    <h1 className="text-slate-surface hero-h1">JTech Solar-Pro</h1>
    <p className="text-slate-surface/80 hero-body">Tagline</p>
    <TrustBadges /> {/* Horizontal pills */}
    <RoofEstimator /> {/* Frosted glass card */}
  </div>
</section>
```

**Roof Estimator Flow:**
1. Step 1: Input roof area (numeric, 100-10000 sq ft)
2. Step 2: Input monthly bill (numeric, $1-9999)
3. Step 3: Select roof orientation (dropdown/buttons)
4. Display estimate: annual kWh generation + annual savings

**Validation:**
- Real-time validation on blur
- Error messages below fields
- Disable "Next" button until valid

### 2. Energy Flow Visualizer

**Layout:**
- Center schematic with 3 main nodes: Solar Panel (top), Battery (left), Home (right)
- Animated pathways connecting nodes
- Day/Night toggle in top-right corner
- Metrics displayed below schematic

**Interaction:**
- Toggle switches mode with 500ms transition
- Animated "particles" flow along active pathways (1-3s cycle)
- Emerald glow on active pathways
- Gray/inactive on non-flowing pathways

**Day Mode:**
- Panel → Home (active)
- Panel → Battery (active)
- Battery → Home (inactive)

**Night Mode:**
- Panel → Home (inactive)
- Panel → Battery (inactive)
- Battery → Home (active)

### 3. Hardware Grid

**Layout:**
- Responsive grid: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Cards with off-white background, slate border
- Product image, name, key spec preview
- "View Details" CTA

**Spec Drawer:**
- Slides from right (desktop) or bottom (mobile)
- Full-height overlay with backdrop
- Close button (X) in top-right
- Tabbed sections: Specifications, Features, Performance
- Escape key or click outside closes

### 4. Savings Slider

**Layout:**
- Timeline slider at top (0-20 years)
- Dual-line chart showing utility cost vs solar cost
- Current year metrics displayed in card below chart
- Color-coded: emerald for solar, red/orange for utility

**Interaction:**
- Drag slider to update year
- Chart animates to new position (300ms)
- Metrics update with smooth transition
- Show crossover point where solar becomes cheaper

**Calculations:**
- Utility cost: `initialRate * (1 + inflation)^year * monthlyUsage * 12`
- Solar cost: fixed monthly payment * months
- Net savings: cumulative utility - cumulative solar

### 5. Lead Form

**Layout:**
- Two-column on desktop, stacked on mobile
- Off-white container with slate border
- Privacy notice in small text below form
- Submit button with loading state

**Fields:**
- Name (text)
- Email (email validation)
- Phone (phone validation)
- Street Address (text)
- City (text)
- State (text/dropdown)
- Postal Code (text)

**Validation:**
- Email: must contain @ and . with characters before/after
- Phone: digits, spaces, hyphens, parens, + allowed, min 10 digits
- Required fields marked with asterisk
- Show errors on blur and submit attempt

**States:**
- Idle: form ready
- Submitting: button disabled, loading spinner
- Success: show confirmation message
- Error: show error message, allow retry

### 6. Footer

**Layout:**
- Three sections: Trust Signals, Contact Info, Legal
- Desktop: 3 columns
- Mobile: stacked sections
- Dark slate background with off-white text

**Content:**
- Trust badges with icons
- License number and authority
- Certifications list
- Phone, email, address
- Copyright notice

## Animation Specifications

### Energy Flow Animation

```typescript
const flowAnimation = {
  duration: 2000,              // 2s cycle
  easing: 'linear',
  particleCount: 3,            // particles per path
  particleSize: 8,             // px diameter
  glowRadius: 20,              // px
  glowOpacity: 0.3,
}

// Path definition
interface FlowPath {
  from: { x: number; y: number };
  to: { x: number; y: number };
  active: boolean;
  color: string;              // emerald for active
}
```

### Transitions

```typescript
const transitions = {
  modeSwitch: 'all 500ms ease-out',
  drawerSlide: 'transform 300ms ease-out',
  savingsUpdate: 'all 300ms ease-in-out',
  formFeedback: 'opacity 200ms ease-in',
}
```

### Scroll Animations

- Fade in sections on scroll (intersection observer)
- Stagger child elements (50ms delay between)
- Use `opacity` and `translateY` transforms

## State Management

### Client-Side State

Use React hooks for local component state:

```typescript
// Roof Estimator
const [estimatorData, setEstimatorData] = useState<RoofEstimatorData>({
  step: 1,
  roofArea: null,
  monthlyBill: null,
  roofOrientation: null,
});

// Energy Visualizer
const [flowState, setFlowState] = useState<EnergyFlowState>({
  mode: 'day',
  flows: { panelToHome: true, panelToBattery: true, batteryToHome: false },
  metrics: { solarGeneration: 5.2, homeConsumption: 3.8, batteryCharge: 85 },
});

// Hardware Grid
const [selectedEquipment, setSelectedEquipment] = useState<EquipmentSpec | null>(null);

// Savings Slider
const [currentYear, setCurrentYear] = useState<number>(10);

// Lead Form
const [formState, setFormState] = useState<LeadFormState>({
  data: initialFormData,
  validation: initialValidation,
  isSubmitting: false,
  submitStatus: 'idle',
});
```

### Form Validation Utilities

```typescript
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;
  
  const [before, after] = email.split('@');
  if (!before || !after) return false;
  if (!after.includes('.')) return false;
  
  return true;
};

export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  const digitCount = (cleaned.match(/\d/g) || []).length;
  return digitCount >= 10;
};

export const validateRoofArea = (area: number): boolean => {
  return area >= 100 && area <= 10000;
};

export const validateMonthlyBill = (bill: number): boolean => {
  return bill >= 1 && bill <= 9999;
};
```

### Calculation Utilities

```typescript
// utils/calculations.ts
export const calculateRoofEstimate = (
  data: RoofEstimatorData
): RoofEstimate | null => {
  if (!data.roofArea || !data.monthlyBill || !data.roofOrientation) {
    return null;
  }
  
  // Simplified calculation (real implementation would be more complex)
  const orientationMultiplier = getOrientationMultiplier(data.roofOrientation);
  const systemSizeKw = (data.roofArea / 100) * orientationMultiplier;
  const annualGenerationKwh = systemSizeKw * 1400; // approx annual hours
  const annualSavingsDollars = (data.monthlyBill * 12) * 0.8;
  
  return {
    annualGenerationKwh,
    annualSavingsDollars,
    recommendedSystemSize: systemSizeKw,
    estimatedPanelCount: Math.ceil(systemSizeKw / 0.4),
  };
};

export const calculateSavingsTimeline = (
  params: SavingsParameters
): SavingsData[] => {
  const timeline: SavingsData[] = [];
  
  for (let year = 0; year <= 20; year++) {
    const utilityRate = params.initialUtilityRate * Math.pow(1 + params.utilityInflationRate, year);
    const annualUtilityCost = utilityRate * params.monthlyUsage * 12;
    const cumulativeUtility = timeline[year - 1]?.utilityCost || 0 + annualUtilityCost;
    
    const annualSolarPayment = params.solarMonthlyPayment * 12;
    const cumulativeSolar = year <= params.solarLoanTermYears 
      ? (timeline[year - 1]?.solarCost || 0) + annualSolarPayment
      : timeline[year - 1]?.solarCost || 0;
    
    timeline.push({
      year,
      utilityCost: cumulativeUtility,
      solarCost: cumulativeSolar,
      netSavings: cumulativeUtility - cumulativeSolar,
    });
  }
  
  return timeline;
};
```

## Responsive Breakpoints

```typescript
// tailwind.config.ts
const screens = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Responsive Behavior

**Hero Section:**
- Mobile: Stack vertically, reduce text size, full-width estimator
- Tablet: Maintain stack, increase text size
- Desktop: Center content, limit estimator width

**Energy Visualizer:**
- Mobile: Simplified schematic, stack toggle above
- Desktop: Full schematic with labels

**Hardware Grid:**
- Mobile (< 768px): 1 column
- Tablet (768px - 1023px): 2 columns
- Desktop (≥ 1024px): 3 columns

**Savings Slider:**
- Mobile: Stack slider above chart, reduce chart height
- Desktop: Keep slider integrated with chart

**Lead Form:**
- Mobile (< 768px): Single column, full-width fields
- Desktop (≥ 768px): Two columns for name/email, phone/address

## Accessibility

### Keyboard Navigation

- All interactive elements focusable (tab order)
- Visible focus indicators (2px outline, emerald color)
- Escape key closes drawers/modals
- Enter key submits forms

### ARIA Labels

```typescript
// Energy Visualizer Toggle
<button 
  aria-label={`Switch to ${mode === 'day' ? 'night' : 'day'} mode`}
  role="switch"
  aria-checked={mode === 'night'}
/>

// Spec Drawer Close
<button aria-label="Close equipment specifications">
  <X size={24} />
</button>

// Savings Slider
<input
  type="range"
  aria-label="Select year for savings comparison"
  aria-valuemin={0}
  aria-valuemax={20}
  aria-valuenow={currentYear}
  aria-valuetext={`Year ${currentYear}`}
/>
```

### Semantic HTML

```typescript
<header>
  <nav aria-label="Primary navigation">
    {/* Nav items */}
  </nav>
</header>

<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">JTech Solar-Pro</h1>
  </section>
  
  <section aria-labelledby="visualizer-heading">
    <h2 id="visualizer-heading">How Solar Energy Flows</h2>
  </section>
</main>

<footer>
  {/* Footer content */}
</footer>
```

### Image Alt Text

```typescript
// Informative images
<Image 
  src="/equipment/panel.jpg" 
  alt="400W monocrystalline solar panel with black frame"
/>

// Decorative images (part of design, not content)
<Image 
  src="/decorative-glow.png" 
  alt=""
  aria-hidden="true"
/>
```

## Performance Optimization

### Image Optimization

```typescript
// Next.js Image component with lazy loading
import Image from 'next/image';

<Image
  src="/hero-bg.jpg"
  alt="Solar panels on modern home"
  width={1920}
  height={1080}
  priority={true}  // Above fold
/>

<Image
  src="/equipment/battery.jpg"
  alt="Tesla Powerwall battery"
  width={600}
  height={600}
  loading="lazy"  // Below fold
/>
```

### Component Lazy Loading

```typescript
// app/page.tsx
import dynamic from 'next/dynamic';

const EnergyVisualizer = dynamic(() => import('@/components/energy/EnergyVisualizer'), {
  loading: () => <div>Loading visualizer...</div>,
  ssr: false,  // Client-only if needed
});

const HardwareGrid = dynamic(() => import('@/components/hardware/HardwareGrid'));
const SavingsSlider = dynamic(() => import('@/components/savings/SavingsSlider'));
```

### Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          base: '#020617',
          surface: '#f8fafc',
        },
        emerald: {
          glow: '#10b981',
        },
      },
      backdropBlur: {
        md: '12px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

## Testing Considerations

### Unit Tests

- Validation functions
- Calculation utilities
- Component prop handling

### Integration Tests

- Form submission flow
- Estimator step progression
- Drawer open/close behavior

### E2E Tests

- Complete user journey: view hero → interact with estimator → browse hardware → submit form
- Responsive behavior across breakpoints
- Keyboard navigation

### Performance Tests

- Lighthouse CI in build pipeline
- Target scores: Performance > 90, Accessibility > 95
- Monitor bundle size and lazy loading effectiveness

## API Endpoints (Future)

```typescript
// app/api/estimate/route.ts
export async function POST(req: Request) {
  const data: RoofEstimatorData = await req.json();
  const estimate = calculateRoofEstimate(data);
  return Response.json(estimate);
}

// app/api/leads/route.ts
export async function POST(req: Request) {
  const formData: LeadFormData = await req.json();
  // Save to database
  // Send notification email
  return Response.json({ success: true });
}
```

## Summary

This design provides a complete technical blueprint for the JTech Solar-Pro website with:

- 40+ TypeScript interfaces for type safety
- Component hierarchy with clear responsibilities
- Responsive layouts for mobile, tablet, desktop
- Interactive features with defined state management
- Animations with specific timing and easing
- Accessibility compliance with ARIA labels and semantic HTML
- Performance optimization strategies
- Tailwind configuration with design tokens

The architecture supports incremental development, starting with static layouts and progressively adding interactivity.
