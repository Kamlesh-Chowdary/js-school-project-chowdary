# Indian Flag Timeline App

## 🏁 Project Goal

To visually showcase the historical evolution of the Indian national flag from 1906 to 1947 through an interactive and accessible timeline web application. Designed to be modern, responsive, and user-friendly for all audiences.

## Stage 1: Static Skeleton

This is the first stage of the Indian Flag Timeline web application. It includes:

- A **header** containing the logo (Indian flag) and a **theme toggle** button.
- An empty **navigation** section for future filters or placeholders.
- A `<section>` with the ID `timeline` as a placeholder where timeline event markers will be added.
- A `<div>` with ID `modal` for future modal popups.
- A **main content area** using semantic HTML tags like `<section>`, `<figure>`, `<figcaption>`, and `<article>`, containing historical details and flag images from 1906 to 1947.

No JavaScript or interactivity has been added yet. This is the static structure to build upon in upcoming stages.

## Stage 2: CSS Layout & Responsive Styling

### Key Features:
- Responsive layout using **Flexbox** (with future-proofing for grid if needed)
- Base typography and color palette:
  - Clean, readable system fonts
  - Saffron-white-green gradient lines and accent colors
- Timeline design:
  - Horizontal with pill-shaped markers
- Accessibility maintained:
  - Contrast-respecting colors
  - Focus/hover styles

## Stage 3: JavaScript Interactivity

Vanilla JavaScript functionality was added to make the timeline dynamic and interactive.

### Key Functionalities:

- **Data-Driven Timeline**
  - Events are loaded from an external `data/events.json` file.

- **Dynamic Rendering**
  - JS fetches and parses the JSON file.
  - Event markers are dynamically created and injected into `#timeline` (inside `.timeline-track`).

- **Modal Pop-Up**
  - Clicking a marker opens a modal with event details (title, year, image, description).
  - Modal includes close functionality via a button (`×`) and clicking outside the modal content.

- **Theme Toggle**
  - Replaced text-based toggle with emoji icons:
    - 🌙 → enables dark mode.
    - 🌞 → switches back to light mode.

## Stage 4: Migration to TypeScript & Modular Code

This stage introduces TypeScript with static typing and modular code architecture.

### Key Enhancements:

- **TypeScript Setup**
  - Initialized TypeScript with a `tsconfig.json` configured in strict mode for enhanced type safety.
  - Defined interfaces/types for event data to enforce consistent data structures.

- **Modularization**
  - Converted the original monolithic `script.js` into multiple ES modules (`fetcher.ts`, `renderer.ts`, `modal.ts`, etc.) inside a `src/` folder.

- **Build Process**
  - Added build scripts (`tsc`) to compile TypeScript (`.ts`) files into JavaScript (`.js`) files.
  - Output JavaScript files are stored in a separate `dist/` folder to distinguish source and build artifacts.

- **Maintained Functionality**
  - Preserved all interactive features such as timeline rendering, modal popups, and theme toggling while improving type safety using typescript.

## Stage 5: Migration to React + TypeScript

This stage rebuilds the entire application UI using **React with TypeScript**, introducing a modern, component-based architecture while preserving the original functionality and styles.

### 🔧 Key Enhancements:

- **React Setup with Vite**
  - Bootstrapped using Vite's `react-ts` template for fast builds and TypeScript support.

- **Component-Based Architecture**
  - `App`: Root component managing global state (theme, selected event).
  - `<Header>`: Displays logo and a theme toggle button (🌙 / 🌞).
  - `<Timeline>`: Maps over event data and renders `<EventMarker>` components.
  - `<EventMarker>`: Represents a clickable year marker.
  - `<EventModal>`: Shows detailed information about a selected event.

- **State Management with React Hooks**
  - Used `useState` and `useEffect` to manage:
    - Theme toggling
    - Modal open/close state
    - Fetching and displaying event data

- **Modal Behavior**
  - Modal opens only when a timeline marker is clicked.
  - Modal can be closed **only** by clicking the close (`×`) button.

- **Styling**
  - Reused existing `style.css` from previous stages to maintain consistent design.
  - Global CSS applied directly; no CSS Modules or styled-components used in this stage.


This stage modernizes the app's structure and development flow while preserving its design, interactivity, and accessibility.

## Stage 6: Accessibility Enhancements

### Key Improvements:

- Added ARIA roles and attributes for improved screen reader support.
- Modal uses `role="dialog"` with `aria-modal="true"` and traps keyboard focus inside.
- Active timeline marker includes `aria-current="true"` for context.
- Focus management ensures return to triggering marker on modal close.
- Enhanced keyboard navigation:
  - Timeline markers accessible via Tab and selectable with Enter/Space.
  - Modal can be closed using the Escape key.
- Verified text and background color contrast meets WCAG AA standards (≥4.5:1).
- Added descriptive `aria-label`s to interactive elements.
- Visual focus indicators added to all interactive controls.
- Documented all accessibility changes in a dedicated `ACCESSIBILITY.md` file.

This stage significantly improves accessibility, making the app usable for all users and compliant with WCAG guidelines.
