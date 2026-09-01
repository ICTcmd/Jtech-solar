# JTech Solar-Pro Website

High-end residential solar company website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Design System

### Color Palette
- Dark slate base: `#020617`
- Off-white surface: `#f8fafc`
- Slate borders: `border-slate-800`
- Emerald accents: `#10b981`

### Key Features
- Frosted glass effects (`backdrop-blur-md bg-slate-900/60`)
- Emerald micro-glows for active states
- Linear/Vercel-inspired aesthetic
- Mobile-first responsive design

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── hero/               # Hero section components
│   ├── energy/             # Energy visualizer
│   ├── hardware/           # Hardware grid & drawer
│   ├── savings/            # Savings slider
│   ├── lead/               # Lead capture form
│   ├── footer/             # Footer
│   └── ui/                 # Reusable UI components
├── .kiro/
│   ├── specs/              # Project specifications
│   └── steering/           # Design guidelines
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Development Guidelines

See `.kiro/steering/design-system.md` for comprehensive design guidelines including:
- Color usage
- Typography scale
- Spacing patterns
- Component patterns
- Accessibility requirements

## Specifications

Detailed project specifications are available in `.kiro/specs/jtech-solar-pro-website/`:
- `requirements.md` - Feature requirements with EARS acceptance criteria
- `design.md` - Technical architecture and TypeScript interfaces
- `tasks.md` - Implementation tasks with acceptance criteria

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## License

Private - JTech Solar-Pro
