# Once More Cake Shop

A modern web application for a cake shop, built with React and Vite. This project showcases a beautiful, responsive UI for browsing cakes, products, and shop information.

## Features
- Home, About, Blog, Cakes, Products, Contact, and Gallery pages
- Elegant UI components (cards, buttons, dialogs, etc.)
- Responsive design for desktop and mobile
- Image gallery and product listings
- Modular component structure
- Custom styles with Tailwind CSS and PostCSS

## Project Structure
```
src/
  app/
    components/      # Reusable UI components
    pages/           # Main pages (Home, About, etc.)
    assets/          # Images and static assets
    styles/          # CSS and theme files
    utils/           # Utility functions
main.tsx            # App entry point
vite.config.ts      # Vite configuration
postcss.config.mjs  # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd once-more-Cake-shop
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building for Production
```bash
npm run build
# or
yarn build
```

### Linting & Formatting
```bash
npm run lint
npm run format
```

## Customization
- Add new cakes/products in `src/app/pages/CakesPage.tsx` and `ProductsPage.tsx`
- Update shop info in `AboutPage.tsx` and `ContactPage.tsx`
- Add images to `src/app/assets/images/`
- Modify styles in `src/app/styles/`



---
For guidelines and contribution instructions, see `guidelines/Guidelines.md`.
