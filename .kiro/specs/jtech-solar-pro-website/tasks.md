# Tasks

## Task 1: Project Setup and Configuration

**Description:** Initialize Next.js project with App Router, configure TypeScript, Tailwind CSS, and install required dependencies.

**Status:** completed

**Dependencies:** None

**Acceptance Criteria:**
- [x] Next.js 14+ project created with App Router structure
- [x] TypeScript configured with strict mode enabled
- [x] Tailwind CSS installed and configured with custom theme tokens (slate-base #020617, slate-surface #f8fafc, emerald-glow #10b981)
- [x] Lucide React icons package installed
- [x] Project builds successfully without errors
- [x] tailwind.config.ts extends theme with custom colors, backdrop-blur, and box-shadow values
- [x] Lint and formatting tools configured (ESLint, Prettier)

---

## Task 2: Design System Foundation

**Description:** Create reusable UI components (Button, Card, Input) following the design system with frosted glass effects, slate borders, and consistent styling.

**Status:** completed

**Dependencies:** Task 1

**Acceptance Criteria:**
- [x] Button component created with primary, secondary, and ghost variants
- [x] Button component supports sm, md, lg sizes
- [x] Card component created with frosted and solid variants
- [x] Card component applies backdrop-blur-md and bg-slate-900/60 for frosted variant
- [x] Input component created with label, error state, and validation feedback
- [x] All UI components use TypeScript interfaces for props
- [x] Components follow accessibility guidelines (keyboard navigation, ARIA labels)
- [x] Storybook or component preview available for design system

---

## Task 3: Hero Section with Trust Badges

**Description:** Implement the hero section with company branding, sleek typography, and micro-pill trust badges using the dark slate background and off-white text.

**Status:** completed

**Dependencies:** Task 2

**Acceptance Criteria:**
- [x] HeroSection component displays company name "JTech Solar-Pro"
- [x] Primary headline uses text-6xl md:text-7xl lg:text-8xl font-bold
- [x] Background color uses #020617 (dark slate base)
- [x] Text color uses #f8fafc (off-white)
- [x] TrustBadges component renders micro-pill badges horizontally
- [x] Trust badges display certifications and warranty information
- [x] Section is responsive across mobile (320px), tablet (768px), and desktop (1024px+)
- [x] Typography maintains visual hierarchy with proper scale

---

## Task 4: Roof Potential Estimator Card

**Description:** Build the inline 3-step roof potential estimator with frosted glass styling, input validation, and calculation logic.

**Status:** completed

**Dependencies:** Task 2, Task 3

**Acceptance Criteria:**
- [x] RoofEstimator component displays within Hero section
- [x] Step 1 accepts roof area input (100-10000 sq ft) with validation
- [x] Step 2 accepts monthly electricity bill (1-9999 dollars) with validation
- [x] Step 3 provides roof orientation selection (8 options: N, S, E, W, NE, NW, SE, SW)
- [x] Validation prevents progression with empty or out-of-range values
- [x] Error messages display for invalid inputs
- [x] Calculation displays estimated annual kWh generation and annual savings
- [x] Card uses backdrop-blur-md bg-slate-900/60 (frosted glass)
- [x] Card uses border-slate-800 for 1px borders
- [x] Progress indicator shows current step (1/3, 2/3, 3/3)

---

## Task 5: Interactive Energy Flow Visualizer

**Description:** Create the dynamic home schematic component with Day/Night mode toggles and animated energy flow pathways with emerald glows.

**Status:** completed

**Dependencies:** Task 2

**Acceptance Criteria:**
- [x] EnergyVisualizer component renders home schematic with solar panel, battery, and home nodes
- [x] Day/Night toggle controls switch between modes
- [x] Day mode displays active flows: panel→home and panel→battery
- [x] Night mode displays active flow: battery→home
- [x] Animated "particles" flow along active pathways (1-3 second cycle)
- [x] Active pathways use emerald radial glow (#10b981)
- [x] Inactive pathways appear gray without animation
- [x] Mode transition animation completes within 500ms
- [x] Component is responsive (simplified layout on mobile)
- [x] Toggle has proper ARIA labels for accessibility

---

## Task 6: Hardware Specification Grid

**Description:** Build the Apple-style equipment cards grid displaying solar panels, batteries, and inverters with responsive layout.

**Status:** todo

**Dependencies:** Task 2

**Acceptance Criteria:**
- [ ] HardwareGrid component displays equipment cards in responsive grid
- [ ] Grid shows 1 column on mobile (<768px), 2 columns on tablet (768-1023px), 3 columns on desktop (≥1024px)
- [ ] EquipmentCard component displays product image, name, and key spec preview
- [ ] Cards use off-white background (#f8fafc) with slate-800 borders
- [ ] Each card has "View Details" CTA button
- [ ] Equipment data includes at least 3 items: panels, battery, inverter
- [ ] Cards maintain consistent spacing and alignment
- [ ] Hover states provide visual feedback

---

## Task 7: Slide-Over Specification Drawer

**Description:** Implement the slide-over drawer that displays detailed equipment specifications, dimensions, warranty, and performance metrics.

**Status:** todo

**Dependencies:** Task 6

**Acceptance Criteria:**
- [ ] SpecDrawer component slides from right on desktop, bottom on mobile
- [ ] Drawer opens when equipment card is clicked
- [ ] Drawer displays technical specifications, dimensions, warranty, and performance metrics
- [ ] Close button (X icon) positioned in top-right
- [ ] Clicking outside drawer closes it
- [ ] Pressing Escape key closes drawer
- [ ] Drawer uses backdrop overlay to dim background
- [ ] Slide animation completes within 300ms
- [ ] Drawer is keyboard accessible with focus trap
- [ ] Content is scrollable if it exceeds viewport height

---

## Task 8: 20-Year Savings Comparison Slider

**Description:** Create the interactive timeline slider that compares compounding utility inflation against fixed solar payments over 20 years.

**Status:** todo

**Dependencies:** Task 2

**Acceptance Criteria:**
- [ ] SavingsSlider component displays timeline control (0-20 years)
- [ ] Visual chart shows two data series: utility costs and solar costs
- [ ] Utility costs calculate with compounding inflation rate
- [ ] Solar costs use fixed monthly payment
- [ ] Current year metrics display: year, utility cost, solar cost, net savings
- [ ] Dragging slider updates chart with smooth transition (300ms)
- [ ] Chart visually differentiates utility vs solar using color coding
- [ ] Crossover point (where solar becomes cheaper) is highlighted
- [ ] Component is responsive with adjusted layout for mobile
- [ ] Slider has proper ARIA labels (aria-valuemin, aria-valuemax, aria-valuenow)

---

## Task 9: Lead Capture Form

**Description:** Build the contact form with name, email, phone, address fields, validation, and privacy microcopy.

**Status:** todo

**Dependencies:** Task 2

**Acceptance Criteria:**
- [ ] LeadForm component collects: name (max 100 chars), email (max 254 chars), phone (max 20 chars), street address (max 200 chars), city (max 100 chars), state (max 50 chars), postal code (max 20 chars)
- [ ] Email validation: must contain exactly one @ with characters before/after, and at least one period after @
- [ ] Phone validation: must contain at least 10 digits, allows spaces, hyphens, parentheses, plus sign
- [ ] Required field validation prevents submission when fields are empty
- [ ] Field-specific error messages display for validation failures
- [ ] Privacy microcopy explains data usage ("Your information will be used only for solar consultation quotes")
- [ ] Form uses off-white container (#f8fafc) with slate-800 borders
- [ ] Success message displays after successful submission
- [ ] Error message displays if submission fails, allows retry
- [ ] Form is responsive: 2 columns on desktop (≥768px), 1 column on mobile
- [ ] Submit button shows loading state while processing

---

## Task 10: Footer with Trust Signals

**Description:** Create the footer section with local trust badges, licensing information, certifications, and contact details.

**Status:** todo

**Dependencies:** Task 2

**Acceptance Criteria:**
- [ ] Footer component displays on every page
- [ ] Trust badges section shows Texas-based licensing and certifications
- [ ] Contractor license number and issuing authority displayed
- [ ] At least one certification or industry affiliation displayed
- [ ] Contact information includes phone, email, and physical business address
- [ ] Footer uses dark slate background with off-white text
- [ ] Layout: 3 columns on desktop (≥1024px), stacked sections on mobile
- [ ] Typography and colors match design system
- [ ] Links are keyboard accessible and have proper focus states
- [ ] Copyright notice included

---

## Task 11: Responsive Design Implementation

**Description:** Ensure all components are fully responsive across mobile (320px-767px), tablet (768px-1023px), and desktop (1024px+) viewports.

**Status:** todo

**Dependencies:** Task 3, Task 4, Task 5, Task 6, Task 7, Task 8, Task 9, Task 10

**Acceptance Criteria:**
- [ ] Website renders without horizontal scroll on all viewport widths (320px-2560px)
- [ ] Mobile (<768px): sections stack vertically, typography scales down appropriately
- [ ] Tablet (768px-1023px): tablet-optimized layouts active
- [ ] Desktop (≥1024px): multi-column layouts active
- [ ] Touch targets on mobile are minimum 44x44px
- [ ] Images scale appropriately without distortion or overflow
- [ ] Mobile navigation (if added) is touch-friendly
- [ ] Font sizes and line heights maintain readability across all viewport sizes
- [ ] Interactive elements remain accessible on touch devices

---

## Task 12: Performance Optimization

**Description:** Implement lazy loading, image optimization with Next.js Image component, and achieve Lighthouse performance score above 90.

**Status:** todo

**Dependencies:** Task 11

**Acceptance Criteria:**
- [ ] Next.js Image component used for all images with appropriate width/height
- [ ] Above-fold images use priority loading
- [ ] Below-fold images use lazy loading
- [ ] EnergyVisualizer, HardwareGrid, and SavingsSlider components lazy loaded with dynamic imports
- [ ] Fonts optimized using next/font
- [ ] Lighthouse performance score >90 on desktop
- [ ] Lighthouse performance score >85 on mobile (Fast 3G throttling)
- [ ] First Contentful Paint (FCP) <1.8s under Fast 3G
- [ ] No layout shift issues (CLS score <0.1)

---

## Task 13: Accessibility Compliance

**Description:** Ensure WCAG AA compliance with semantic HTML, keyboard navigation, ARIA labels, and color contrast ratios.

**Status:** todo

**Dependencies:** Task 11

**Acceptance Criteria:**
- [ ] Semantic HTML elements used: header, nav, main, section, footer
- [ ] All informative images have descriptive alt text
- [ ] Decorative images have empty alt text (alt="") and aria-hidden="true"
- [ ] All interactive elements keyboard accessible with visible focus indicators (minimum 2px outline)
- [ ] Focus indicators use emerald color for visibility
- [ ] Day/Night toggle has aria-label and role="switch"
- [ ] Spec drawer close button has aria-label
- [ ] Savings slider has aria-valuemin, aria-valuemax, aria-valuenow, aria-valuetext
- [ ] Color contrast ratios: text meets 4.5:1, non-text elements meet 3:1
- [ ] Lighthouse accessibility score >95
- [ ] Keyboard navigation tested: tab order logical, no focus traps (except intentional in modals)

---

## Task 14: Integration and Testing

**Description:** Test complete user flows, fix bugs, and ensure all features work together seamlessly.

**Status:** todo

**Dependencies:** Task 13

**Acceptance Criteria:**
- [ ] Complete user journey tested: hero → estimator → visualizer → hardware → form submission
- [ ] All interactive features work without console errors
- [ ] Form validation tested with valid and invalid inputs
- [ ] Drawer open/close behavior tested (click, escape, outside click)
- [ ] Mode transitions (day/night) tested for smooth animation
- [ ] Responsive behavior verified across breakpoints (320px, 768px, 1024px, 1440px, 2560px)
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge)
- [ ] No accessibility violations in automated tests
- [ ] Build completes without TypeScript errors or warnings
- [ ] All tasks marked complete

---

## Notes

**Task Ordering:** Tasks are ordered to support incremental development. The foundation (Tasks 1-2) must be completed first. Feature tasks (3-10) can be worked on in parallel after Task 2. Polish tasks (11-14) should be completed last.

**Image Assets:** Existing images in workspace (jtec soalr pics1.jpg, jtec solar 2.jpg, jtec solar pics.jpg, jtec solar.jpg, solar jtec reviews.jpg) should be optimized and integrated where appropriate.

**Data Sources:** Equipment specifications, trust badges, and savings calculation parameters should be defined as constants or configuration files for easy updates.

**Testing Strategy:** Focus on unit tests for utilities (validation, calculations), integration tests for component interactions, and E2E tests for critical user journeys.
