# We Want Waste - Skip Hire Platform

A modern, responsive web application for skip hire services built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Interactive skip selection cards with hover animations
- Responsive grid layout (1-3 columns based on viewport)
- Dark mode support
- Real-time pricing display
- Visual indicators for skip restrictions
- Animated UI components

## 🛠️ Technical Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Animations**:
  - Framer Motion
  - Custom canvas-based animations
- **Icons**: React Icons
- **Container**: Docker

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── CardSpotlight  # Interactive card with spotlight effect
│   └── WobbleCard     # Card with wobble animation
├── data/              # Data layer
│   └── data.ts        # Skip configurations
├── types/             # TypeScript type definitions
│   └── dataTypes.ts   # Skip type interfaces
└── lib/               # Utility functions
    └── utils.ts       # Helper functions
```

## 🎨 Design Principles

- **Micro-interactions**: Subtle animations enhance user engagement
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: High contrast ratios and semantic HTML
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode**: System preference respected with dark/light themes

## 💻 Development

### Prerequisites

- Node.js 20+
- npm/yarn

### Local Setup

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Setup

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🔧 Configuration

### TypeScript

Two separate TypeScript configurations:

- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node.js environment settings

### ESLint

Extended configuration with:

- React Hooks plugin
- React Refresh plugin
- TypeScript support

## 🚢 Deployment

The application can be deployed using:

1. Static hosting (after `npm run build`)
2. Docker container (uses `serve` package)

### Build

```bash
# Production build
npm run build

# Preview build
npm run preview
```

## 🧪 Testing

Testing configuration is prepared for:

- Unit tests
- Component tests
- Integration tests

## 📦 Dependencies

### Core

- react: ^19.1.0
- react-dom: ^19.1.0
- @react-three/fiber: ^9.1.2

### Styling

- tailwindcss: ^4.1.6
- clsx: ^2.1.1
- tailwind-merge: ^3.3.0

### Animations

- motion: ^12.11.0
- three: ^0.176.0

## 📄 License

This project is MIT licensed. See the LICENSE file for details.

## 🎨 Design Principles

- **Micro-interactions**: Subtle animations enhance user engagement
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: High contrast ratios and semantic HTML
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode**: System preference respected with dark/light themes

### Design Decisions 🎯

#### Color Psychology

- **Purple Theme**: Chosen deliberately to convey:
  - Luxury and premium service
  - Professional and trustworthy brand image
  - Strong visual hierarchy in UI elements

#### Visual Hierarchy

1. Skip size (Primary focus)
2. Waste type compatibility
3. Pricing information
4. Hire duration
   This sequence ensures users make informed decisions based on their primary needs first.

#### Accessibility Considerations

- Border highlights on hover instead of shadows
  - Provides crisper visual feedback
  - Better visibility for visually impaired users
  - Higher contrast ratio for enhanced readability

#### Image Treatment

- Full-width container images
  - Maximizes visual impact
  - Ensures consistent presentation across different skip types
  - Accommodates high-resolution product photography
  - Maintains aspect ratio while scaling

#### Interactive Elements

- Purple border highlight on hover
  - 4px width for clear visual feedback
  - Maintains brand consistency
  - Provides immediate interaction feedback
  - Meets WCAG accessibility guidelines
