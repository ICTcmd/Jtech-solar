---
inclusion: auto
---

# JTech Solar-Pro Design System

This steering file defines the visual design system for the JTech Solar-Pro website. All components and pages must adhere to these guidelines to maintain visual consistency.

## Design Philosophy

The JTech Solar-Pro aesthetic is **subtle, high-tech, and cool**, inspired by Linear and Vercel. The design emphasizes:
- Clean, spacious layouts with ample whitespace
- Frosted glass effects for depth and layering
- Subtle micro-interactions and ambient glows
- Professional, trustworthy appearance suitable for high-end residential solar

## Color Palette

### Base Colors

```typescript
// Primary background - use for main page background
const slateBase = '#020617';

// Surface/container color - use for cards, forms, modals
const slateSurface = '#f8fafc';

// Border color - use for all borders
const slateBorder = 'border-slate-800'; // Tailwind class or #1e293b

// Accent/active color - use for CTAs, active states, glows
const emeraldGlow = '#10b981';
```

### Usage Guidelines

**Background:**
- Primary page background: `bg-[#020617]` or `bg-slate-950`
- Section backgrounds: `bg-slate-base`

**Containers & Cards:**
- Solid containers: `bg-[#f8fafc]` with `border border-slate-800`
- Frosted glass cards: `backdrop-blur-md bg-slate-900/60 border border-slate-800`

**Text:**
- Primary text on dark: `text-[#f8fafc]` or `text-slate-50`
- Secondary text on dark: `text-slate-300` or `text-slate-400`
- Text on light containers: `text-slate-900`

**Accents:**
- Primary CTAs: `bg-emerald-500` or `bg-[#10b981]`
- Hover states: `hover:bg-emerald-600`
- Active indicators: emerald glow effect
- Links: `text-emerald-500 hover:text-emerald-400`

## Frosted Glass Effects

Use frosted glass styling for interactive overlays, floating cards, and modals:

```tsx
className="backdrop-blur-md bg-slate-900/60 border border-slate-800"
```

**When to use:**
- Roof potential estimator card (floats over hero)
- Slide-over drawers and modals
- Floating navigation elements
- Overlay panels

**When NOT to use:**
- Primary content sections (use solid backgrounds)
- Footer (use solid dark background)
- Form containers (use solid off-white)

## Glow Effects

### Emerald Micro-Glows

Use subtle emerald glows for active states and energy flow indicators:

```tsx
// Box shadow glow
className="shadow-[0_0_20px_rgba(16,185,129,0.3)]"

// Radial gradient glow (for energy pathways)
style={{
  background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)'
}}
```

**Usage:**
- Active energy flow pathways in visualizer
- Hover states on interactive cards
- Focus states on primary CTAs
- Active toggle indicators

**Avoid:**
- Overusing glows (use sparingly for emphasis)
- Glows on static content
- Multiple competing glow colors

## Typography

### Font Family

**Primary Font:** Inter (Google Fonts)

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

Apply to root: `className={inter.variable}` on `<html>` element

### Type Scale

**Hero Section:**
- H1: `text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight`
- Subtitle: `text-lg md:text-xl lg:text-2xl font-normal text-slate-300`

**Section Headings:**
- H2: `text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight`
- H3: `text-2xl md:text-3xl font-medium`

**Body Text:**
- Large: `text-lg md:text-xl leading-relaxed`
- Base: `text-base md:text-lg leading-relaxed`
- Small: `text-sm leading-normal`

**UI Elements:**
- Button text: `text-sm md:text-base font-medium`
- Input labels: `text-sm font-medium`
- Captions: `text-xs text-slate-400`

### Typography Rules

1. Maintain visual hierarchy with consistent scale
2. Use `tracking-tight` for large headings
3. Use `leading-relaxed` for body text readability
4. Limit line length to 65-75 characters for optimal reading
5. Ensure 4.5:1 contrast ratio minimum (WCAG AA)

## Spacing & Layout

### Container Widths

```tsx
// Standard content container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Narrow container (for forms, text content)
className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"

// Wide container (for grids, visualizations)
className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
```

### Section Spacing

- Section padding: `py-16 md:py-24 lg:py-32`
- Between sections: `space-y-16 md:space-y-24 lg:space-y-32`
- Card padding: `p-6 md:p-8`
- Component gaps: `gap-4 md:gap-6 lg:gap-8`

### Grid Layouts

**Hardware Grid:**
- Mobile: `grid-cols-1`
- Tablet: `grid-cols-2`
- Desktop: `grid-cols-3`
- Gap: `gap-6 md:gap-8`

**Form Layouts:**
- Mobile: `grid-cols-1`
- Desktop: `grid-cols-2`
- Gap: `gap-4`

## Borders & Shadows

### Borders

**Standard border:**
```tsx
className="border border-slate-800"
```

**Thick border (for emphasis):**
```tsx
className="border-2 border-slate-700"
```

**No border on dark backgrounds** - let frosted glass stand out naturally

### Shadows

**Card elevation:**
```tsx
// Subtle
className="shadow-lg"

// Medium (for modals, drawers)
className="shadow-2xl"

// Glow effect (for interactive elements)
className="shadow-[0_0_20px_rgba(16,185,129,0.3)]"
```

## Interactive States

### Buttons

**Primary Button:**
```tsx
className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium
           hover:bg-emerald-600 active:bg-emerald-700
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
```

**Secondary Button:**
```tsx
className="bg-slate-800 text-slate-100 px-6 py-3 rounded-lg font-medium
           hover:bg-slate-700 active:bg-slate-600
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
```

**Ghost Button:**
```tsx
className="text-slate-300 px-6 py-3 rounded-lg font-medium
           hover:bg-slate-800/50 active:bg-slate-800
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-slate-500"
```

### Cards

**Hover state:**
```tsx
className="transition-all duration-300 ease-out
           hover:translate-y-[-4px] hover:shadow-xl"
```

### Form Inputs

**Default state:**
```tsx
className="bg-white border border-slate-300 rounded-lg px-4 py-2
           focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
           transition-all duration-200"
```

**Error state:**
```tsx
className="border-red-500 focus:ring-red-500"
```

## Transitions & Animations

### Standard Transitions

```tsx
// General transitions
className="transition-all duration-300 ease-out"

// Color transitions
className="transition-colors duration-200 ease-in-out"

// Transform transitions
className="transition-transform duration-300 ease-out"
```

### Animation Timing

- Quick interactions (hover, focus): **200ms**
- Standard transitions (mode switches): **300ms**
- Slide-in panels: **300ms ease-out**
- Energy flow animations: **1000-3000ms linear loop**

### Easing Functions

- Default: `ease-out`
- Smooth entries: `ease-in-out`
- Constant motion: `linear` (for looping animations)

## Responsive Breakpoints

```typescript
// Tailwind default breakpoints
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px', // Extra large
```

### Mobile-First Approach

Always style for mobile first, then add `md:` and `lg:` modifiers:

```tsx
// Mobile: 1 column, smaller text
// Tablet: 2 columns, medium text
// Desktop: 3 columns, larger text
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           text-base md:text-lg lg:text-xl"
```

## Accessibility

### Focus States

All interactive elements MUST have visible focus indicators:

```tsx
className="focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
```

For dark backgrounds, use offset:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
```

### Color Contrast

- **Text on dark (#020617):** Use `#f8fafc` (21:1 contrast) ✓
- **Text on light (#f8fafc):** Use `#020617` or `#1e293b` ✓
- **Emerald text on dark:** `#10b981` on `#020617` (4.8:1) ✓
- **Borders:** `#1e293b` provides sufficient contrast on both backgrounds

### Touch Targets

Minimum **44x44px** for all interactive elements on mobile:

```tsx
className="min-h-[44px] min-w-[44px]"
```

## Component Patterns

### Frosted Glass Card Pattern

```tsx
<div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-xl p-6 md:p-8">
  {/* Card content */}
</div>
```

### Section Pattern

```tsx
<section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-8">
      Section Heading
    </h2>
    {/* Section content */}
  </div>
</section>
```

### Solid Card Pattern

```tsx
<div className="bg-[#f8fafc] border border-slate-800 rounded-xl p-6 md:p-8">
  {/* Card content with dark text */}
</div>
```

## Icons

**Library:** Lucide React

```tsx
import { Zap, Battery, Home, Sun, Moon } from 'lucide-react';

// Standard size
<Zap size={24} className="text-emerald-500" />

// Small size
<Zap size={16} className="text-slate-400" />

// Large size
<Zap size={32} className="text-emerald-500" />
```

**Icon Guidelines:**
- Use consistent sizing within component groups
- Match icon color to surrounding text
- Use emerald for active/primary icons
- Use slate-400 for secondary/inactive icons

## Do's and Don'ts

### ✅ Do

- Use frosted glass for floating/overlay elements
- Maintain consistent border styling (border-slate-800)
- Use emerald accents sparingly for emphasis
- Follow mobile-first responsive approach
- Ensure all interactive elements have focus states
- Use Inter font throughout the entire site
- Maintain proper contrast ratios (4.5:1 minimum)

### ❌ Don't

- Mix different border colors (always use slate-800)
- Overuse glow effects (subtle is better)
- Use colors outside the defined palette
- Create custom font sizes (use the defined scale)
- Skip focus indicators for keyboard navigation
- Use solid backgrounds where frosted glass is specified
- Ignore responsive breakpoints

## Code Quality

### Tailwind Class Organization

Order classes logically:
1. Layout (display, position, flex/grid)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text-size, color)
5. Background & borders
6. Effects (shadow, opacity, blur)
7. Transitions & transforms
8. State variants (hover, focus, active)
9. Responsive variants (md:, lg:)

Example:
```tsx
className="flex items-center gap-4 px-6 py-3 text-base font-medium 
           bg-emerald-500 border border-emerald-600 rounded-lg 
           shadow-lg transition-all duration-200 
           hover:bg-emerald-600 active:bg-emerald-700
           md:px-8 md:text-lg"
```

### TypeScript Interfaces

Always define props interfaces for components:

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

## Reference

This design system should be consulted for:
- All new component development
- Styling decisions
- Color and typography choices
- Spacing and layout patterns
- Responsive behavior
- Accessibility implementation

When in doubt, refer to Linear (linear.app) or Vercel (vercel.com) for inspiration, adapting their patterns to our solar energy context with emerald accents.
