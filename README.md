# iRetardgram - Marketing Website

A premium, interactive, and heavily-animated Next.js marketing web experience built for the open-source Instagram alternative client. 

## Stack & Architecture

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (inline themes) / Modules
- **Motion Engine**: GSAP + ScrollTrigger
- **3D Render**: Three.js via React Three Fiber & Drei

## Philosophy & Design Guidelines
The UI intentionally breaks generic grids to communicate control and tension against algorithmic systems. It employs offset sections, stark background contrast `var(--background) #050505` with `cyan / lime` electric overlays, and physical-reactive micro-interactions mimicking magnetic pull and interactive friction.

## Getting Started

First, install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reusable Motion Hooks

All motion implementations have been abstracted directly to `src/hooks/useMotion.ts` to natively support `prefers-reduced-motion` and automatically tie back safe React hook cleanups using `gsap.context`.
- `useRevealStagger`: Generic scroll-based y-axis stagger reveals
- `useGlitchReveal`: Hard clipping reveals suitable for technical callouts. 
- `useScrollParallax`: Passive reverse-parallax. 
- `useScrollPipeline`: Animated timeline drawing.

## Performance
- **Asset Lazy Loading**: Native Three.js models like `HeroScene` are loaded dynamically leveraging `next/dynamic { ssr: false }` to avoid blocking main thread loads.
- **Accessibility Checks Passed**: Full contrast scaling and semantic ARIA labeling built-in.

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use placing the repo into [Vercel Platform](https://vercel.com/new).

To build locally:
```bash
npm run build
```
