# Requirements Document

## Introduction

JTech Solar-Pro is a high-end residential solar company website built with Next.js (App Router), Tailwind CSS, TypeScript, and Lucide React icons. The website aims to educate potential customers about solar energy solutions, showcase hardware specifications, demonstrate long-term savings, and capture qualified leads. The aesthetic follows a subtle, high-tech, Linear/Vercel-inspired design with a dark slate base, frosted glass cards, and ambient emerald accents.

## Glossary

- **Website**: The JTech Solar-Pro Next.js web application
- **Hero_Section**: The primary above-the-fold landing area with headline, trust badges, and roof estimator
- **Roof_Estimator**: The interactive 3-step inline card that estimates solar potential
- **Energy_Visualizer**: The interactive component showing energy flow between panels, battery, and home
- **Hardware_Grid**: The Apple-style product showcase for solar equipment
- **Spec_Drawer**: The slide-over panel revealing detailed equipment specifications
- **Savings_Slider**: The interactive 20-year timeline comparing solar vs utility costs
- **Lead_Form**: The contact/inquiry form for capturing customer information
- **User**: A potential customer visiting the website
- **Day_Mode**: Energy visualization state showing daytime solar generation
- **Night_Mode**: Energy visualization state showing nighttime battery usage
- **Trust_Badge**: Visual indicator of certifications, warranties, or credentials
- **Equipment_Card**: Individual product card in the hardware grid
- **Timeline_Slider**: Interactive control for the savings comparison visualization

## Requirements

### Requirement 1: Hero Section with Brand Identity

**User Story:** As a user, I want to see a compelling hero section with clear messaging, so that I understand JTech Solar-Pro's value proposition immediately.

#### Acceptance Criteria

1. THE Hero_Section SHALL display sleek typography with the company name and primary value proposition
2. THE Hero_Section SHALL render micro-pill Trust_Badges for certifications and warranties
3. THE Hero_Section SHALL use dark slate base color (#020617) as the background
4. THE Hero_Section SHALL use off-white text (#f8fafc) for primary content
5. THE Hero_Section SHALL maintain visual hierarchy with typography scale (headings larger than body text)

### Requirement 2: Inline Roof Potential Estimator

**User Story:** As a user, I want to quickly estimate my roof's solar potential, so that I can gauge whether solar is viable for my home.

#### Acceptance Criteria

1. THE Roof_Estimator SHALL display as an inline card within the Hero_Section
2. THE Roof_Estimator SHALL present exactly 3 steps for user input
3. WHEN a user completes all 3 steps, THE Roof_Estimator SHALL calculate and display an estimated solar potential
4. THE Roof_Estimator SHALL use frosted glass visual style (backdrop-blur-md bg-slate-900/60)
5. THE Roof_Estimator SHALL use 1px slate borders (border-slate-800)
6. FOR ALL user inputs, THE Roof_Estimator SHALL validate that required fields are completed before calculating

### Requirement 3: Interactive Energy Flow Visualization

**User Story:** As a user, I want to see how solar energy flows through a system, so that I understand how panels, batteries, and my home interact.

#### Acceptance Criteria

1. THE Energy_Visualizer SHALL render a dynamic home schematic component
2. THE Energy_Visualizer SHALL provide Day/Night mode toggle controls
3. WHEN Day_Mode is active, THE Energy_Visualizer SHALL display energy flow from panels to home and battery
4. WHEN Night_Mode is active, THE Energy_Visualizer SHALL display energy flow from battery to home
5. THE Energy_Visualizer SHALL animate energy movement between components
6. THE Energy_Visualizer SHALL use emerald radial micro-glows (#10b981) to indicate active energy pathways
7. FOR ALL mode transitions (Day to Night or Night to Day), THE Energy_Visualizer SHALL smoothly animate the state change

### Requirement 4: Apple-Style Hardware Specification Grid

**User Story:** As a user, I want to browse solar equipment specifications, so that I can understand the hardware quality and technical details.

#### Acceptance Criteria

1. THE Hardware_Grid SHALL display Equipment_Cards for solar panels, batteries, and inverters
2. THE Hardware_Grid SHALL use clean off-white containers (#f8fafc) for Equipment_Cards
3. THE Hardware_Grid SHALL use 1px slate borders (border-slate-800) on Equipment_Cards
4. WHEN a user clicks an Equipment_Card, THE Hardware_Grid SHALL open a Spec_Drawer with detailed specifications
5. THE Spec_Drawer SHALL slide over from the right side of the viewport
6. THE Spec_Drawer SHALL display technical specifications, dimensions, warranty information, and performance metrics
7. WHEN a user clicks outside the Spec_Drawer or presses escape, THE Spec_Drawer SHALL close
8. THE Hardware_Grid SHALL maintain responsive grid layout on mobile, tablet, and desktop viewports

### Requirement 5: Interactive 20-Year Savings Comparison

**User Story:** As a user, I want to compare solar costs versus utility inflation over 20 years, so that I understand the long-term financial benefit.

#### Acceptance Criteria

1. THE Savings_Slider SHALL display a Timeline_Slider for navigating years 0 through 20
2. WHEN a user adjusts the Timeline_Slider, THE Savings_Slider SHALL update the cost comparison visualization
3. THE Savings_Slider SHALL display compounding utility inflation costs as one data series
4. THE Savings_Slider SHALL display fixed solar payment costs as a second data series
5. THE Savings_Slider SHALL calculate and display cumulative savings at each year marker
6. THE Savings_Slider SHALL visually differentiate utility costs from solar costs using color and styling
7. FOR ALL timeline positions, THE Savings_Slider SHALL display the current year, utility cost, solar cost, and net savings
8. THE Savings_Slider SHALL use smooth transitions when the timeline position changes

### Requirement 6: Lead Capture Form

**User Story:** As a user, I want to submit my contact information for a solar consultation, so that I can receive a personalized quote.

#### Acceptance Criteria

1. THE Lead_Form SHALL collect user name, email, phone number, and address
2. THE Lead_Form SHALL validate email format before submission
3. THE Lead_Form SHALL validate phone number format before submission
4. WHEN required fields are empty, THE Lead_Form SHALL prevent submission and display field-specific error messages
5. WHEN the Lead_Form is successfully submitted, THE Lead_Form SHALL display a confirmation message
6. THE Lead_Form SHALL include clear privacy microcopy explaining data usage
7. THE Lead_Form SHALL use off-white containers (#f8fafc) with slate borders (border-slate-800)
8. IF form submission fails, THEN THE Lead_Form SHALL display an error message and allow retry

### Requirement 7: Footer with Local Trust Signals

**User Story:** As a user, I want to see local credentials and trust signals in the footer, so that I feel confident about JTech Solar-Pro's legitimacy.

#### Acceptance Criteria

1. THE Website SHALL display a footer section with local Trust_Badges
2. THE Website SHALL display licensing information in the footer
3. THE Website SHALL display certifications and industry affiliations in the footer
4. THE Website SHALL display contact information including phone, email, and address in the footer
5. THE Website SHALL use consistent typography and color scheme matching the overall design system

### Requirement 8: Responsive Design Implementation

**User Story:** As a user on any device, I want the website to adapt to my screen size, so that I have a seamless experience on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL render responsively on viewport widths from 320px to 2560px
2. WHEN viewport width is below 768px, THE Website SHALL stack sections vertically and adjust typography scale
3. WHEN viewport width is between 768px and 1024px, THE Website SHALL use tablet-optimized layouts
4. WHEN viewport width is above 1024px, THE Website SHALL use desktop-optimized multi-column layouts
5. THE Website SHALL maintain touch-friendly interaction targets (minimum 44x44px) on mobile viewports
6. FOR ALL viewport sizes, THE Website SHALL maintain readability with appropriate font sizing and line height

### Requirement 9: Performance and Accessibility

**User Story:** As a user, I want the website to load quickly and be accessible, so that I have a smooth experience regardless of my connection speed or assistive technology needs.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse performance score above 90
2. THE Website SHALL implement lazy loading for images and heavy components
3. THE Website SHALL use Next.js Image component for optimized image delivery
4. THE Website SHALL include semantic HTML elements (header, nav, main, section, footer)
5. THE Website SHALL provide alt text for all decorative and informative images
6. THE Website SHALL maintain keyboard navigation support for all interactive elements
7. THE Website SHALL provide ARIA labels for interactive components that lack visible text labels
8. THE Website SHALL maintain color contrast ratios meeting WCAG AA standards (minimum 4.5:1 for text)

### Requirement 10: Design System Consistency

**User Story:** As a developer maintaining the website, I want consistent design tokens and reusable components, so that the codebase remains maintainable and scalable.

#### Acceptance Criteria

1. THE Website SHALL use Tailwind CSS for styling with custom theme configuration
2. THE Website SHALL define dark slate base (#020617) as the primary background color token
3. THE Website SHALL define off-white (#f8fafc) as the primary surface/container color token
4. THE Website SHALL define slate-800 as the primary border color token
5. THE Website SHALL define emerald (#10b981) as the primary accent color token
6. THE Website SHALL use TypeScript for type safety across all components
7. THE Website SHALL use Lucide React icons exclusively for iconography
8. THE Website SHALL implement reusable component patterns for cards, buttons, and form inputs
9. FOR ALL components using backdrop-blur, THE Website SHALL apply backdrop-blur-md with bg-slate-900/60

---

## Notes

**Parser and Serializer Requirements**: Not applicable for this feature.

**External Dependencies**: The website will use existing image assets (jtec soalr pics1.jpg, jtec solar 2.jpg, jtec solar pics.jpg, jtec solar.jpg, solar jtec reviews.jpg) located in the workspace.

**Technology Stack**: Next.js 14+ (App Router), React 18+, TypeScript 5+, Tailwind CSS 3+, Lucide React icons.
