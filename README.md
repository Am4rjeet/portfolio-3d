# 🌌 3D Interactive Portfolio - Amarjeet Kumar

Welcome to my premium, interactive 3D Portfolio website built with **React**, **Three.js (React Three Fiber & Drei)**, **Framer Motion**, and **Vite**. 

This site is designed with rich aesthetics, glassmorphism layout, fluid hover transitions, light/dark themes, and an interactive 3D particle background scene.

---

## 🚀 Features

- **Interactive 3D Scene**: Real-time rendering of a 3D orbital particle galaxy that dynamically changes behavior based on user interaction and the active theme.
- **Glassmorphism UI**: A high-tech, semi-transparent dashboard style that elevates content presentation.
- **Responsive Layout**: Designed for seamless accessibility across all screen sizes (desktop, tablet, and mobile).
- **Dynamic Theme System**: Sleek toggles between Dark Mode and Light Mode with corresponding color shifts in both HTML styles and the 3D particle canvas.
- **GitHub Stats Integration**: Live stats dynamically loaded from GitHub APIs to showcase current open-source activities.
- **Smooth Micro-Animations**: Built with Framer Motion to create natural transitions, scroll effects, and hover reactions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core & Framework** | React 19, Vite, ES6+ JavaScript |
| **3D Rendering** | Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei` |
| **Animations** | Framer Motion |
| **Styling & Icons** | Vanilla CSS (CSS variables, flexbox/grid), Lucide React |
| **Tooling & Linting** | Oxlint, npm |

---

## 📦 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Am4rjeet/portfolio-3d.git
   cd portfolio-3d
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port specified in terminal) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be built in the `dist` folder.

---

## 📁 Project Structure

```text
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # UI & 3D Components
│   │   ├── About.jsx    # Technical skills breakdown
│   │   ├── Contact.jsx  # Get-in-touch form
│   │   ├── GithubStats.jsx # Stats & contributions
│   │   ├── Hero.jsx     # Welcome & headline section
│   │   ├── Icons.jsx    # Custom SVG Icons
│   │   ├── Navbar.jsx   # Top navigation & theme toggle
│   │   ├── Projects.jsx # Featured portfolio works
│   │   └── Scene3D.jsx  # Three.js 3D canvas and particles
│   ├── App.css          # Core CSS variables, glassmorphism classes, animations
│   ├── App.jsx          # Root component & theme manager
│   ├── index.css        # Reset styles & main layouts
│   └── main.jsx         # App entry point
├── package.json         # Scripts and project dependencies
└── vite.config.js       # Vite bundler configurations
```

---

## 👤 Author

- **Amarjeet Kumar**
- Portfolio: [https://github.com/Am4rjeet](https://github.com/Am4rjeet)
- Institution: Manipal University, Jaipur

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
