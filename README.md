# 3DIMLI Hero Section Recreation

A pixel-perfect recreation of the hero section from https://www.3dimli.com/ built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- **Pixel-perfect design** matching the original 3DIMLI website
- **Responsive design** that works seamlessly across all screen sizes
- **Smooth animations** using Framer Motion and GSAP
- **Typewriter effect** for the main heading
- **Parallax scrolling** effects
- **Accessibility compliant** with proper ARIA labels and keyboard navigation
- **Dark mode support** with automatic theme detection
- **Performance optimized** with proper code splitting and lazy loading

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **GSAP** - Professional-grade animation library
- **React 19** - Latest React with concurrent features

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with hero section
├── components/
│   └── HeroSection.tsx      # Main hero component
└── ...
```

## Key Features Implemented

### 1. Typewriter Animation
- Dynamic text typing effect for the main heading
- Smooth cursor blinking animation
- Automatic text cycling between different phrases

### 2. Background Effects
- Animated blur elements with mix-blend-mode
- Parallax scrolling effects
- Smooth color transitions

### 3. Responsive Design
- Mobile-first approach with custom breakpoints
- Adaptive typography scaling
- Flexible grid layouts for feature cards
- Optimized spacing and sizing for all devices

### 4. Accessibility
- Proper semantic HTML structure
- ARIA labels and roles
- Skip links for keyboard navigation
- Screen reader friendly content
- High contrast support

### 5. Performance Optimizations
- Client-side rendering optimizations
- Efficient animation loops
- Proper cleanup of event listeners
- Optimized bundle size

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## Customization

### Colors
The project uses custom color variables defined in `tailwind.config.ts`:
- Primary colors: `#ef233c` (red) and `#04868b` (teal)
- Responsive breakpoints matching the original design

### Animations
- GSAP animations for complex sequences
- Framer Motion for React-specific animations
- CSS animations for simple effects like cursor blinking

### Responsive Breakpoints
Custom breakpoints defined to match the original design:
- `1.7sm`: 480px
- `2sm`: 640px
- `2md`: 768px
- `3xl`: 1920px
- `4xl`: 2560px
- `5xl`: 3200px
- `6xl`: 3840px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The hero section is optimized for:
- **Fast loading** with efficient code splitting
- **Smooth animations** at 60fps
- **Low memory usage** with proper cleanup
- **Accessibility** with WCAG 2.1 compliance

## License

This project is created for educational purposes and recreates the design from 3DIMLI.com.