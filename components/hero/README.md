# Hero Section Components

This directory contains the hero section components for the JTech Solar-Pro website.

## Components

### HeroSection.tsx
Main hero container component that orchestrates the entire hero section layout.

**Features:**
- Two-column responsive layout
- Background effects (radial gradient + dot grid)
- Trust badge integration
- Feature cards with icons
- Roof estimator integration

**Usage:**
```tsx
import { HeroSection } from '@/components/hero';

<HeroSection />
```

### TrustBadge.tsx
Micro-pill badge component displaying brand positioning.

**Features:**
- Emerald glow border effect
- Animated pulse indicator
- Zap icon
- Frosted glass background

**Props:** None (standalone component)

**Usage:**
```tsx
import { TrustBadge } from '@/components/hero';

<TrustBadge />
```

### RoofEstimator.tsx
Interactive 3-step calculator for estimating solar potential and savings.

**Features:**
- Client-side component ('use client')
- Three-step flow with state machine
- ZIP code validation
- Interactive slider for monthly bill
- Roof orientation selector
- Dynamic savings calculation
- Progress indicator

**State:**
```typescript
{
  currentStep: 1 | 2 | 3,
  data: {
    zipCode: string,
    monthlyBill: number,
    roofOrientation: 'south' | 'east-west' | 'complex' | null
  },
  estimate: {
    savings25Year: number,
    systemSizeKw: number
  } | null
}
```

**Usage:**
```tsx
import { RoofEstimator } from '@/components/hero';

<RoofEstimator />
```

## Styling

All components follow the design system defined in `.kiro/steering/design-system.md`:

- **Color palette:** Dark slate base, off-white text, emerald accents
- **Effects:** Frosted glass, emerald glows, smooth transitions
- **Typography:** Inter font, responsive scale
- **Animations:** fadeIn transitions, hover effects

## Responsive Behavior

### Mobile (<768px)
- Single column layout
- Stacked components
- Full-width cards
- Touch-optimized controls

### Tablet (768px-1023px)
- Two-column layout begins
- Moderate sizing
- Grid adaptations

### Desktop (≥1024px)
- Full two-column layout
- Sticky estimator positioning
- Maximum typography scale

## Accessibility

All components include:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Touch target sizing (44x44px minimum)

## Testing

See `TESTING_GUIDE.md` in the project root for comprehensive testing instructions.

## Dependencies

- React 18+
- Next.js 15+
- Lucide React (icons)
- Tailwind CSS
- TypeScript

## Future Enhancements

- [ ] Connect CTA to lead form
- [ ] Add analytics tracking
- [ ] Implement real ZIP service area validation
- [ ] Add loading states
- [ ] Store results in localStorage
- [ ] Email results functionality
- [ ] Add background images from assets
