# 🚗 DriveLearn — Driving & Route Learning Website

A web-based platform that helps users practice driving and learn routes interactively through simulations, maps, and guided lessons.

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

**DriveLearn** is an open-source educational website built with plain HTML, CSS, and JavaScript. It helps beginner and intermediate drivers:

- Understand road signs and traffic rules
- Learn and memorize specific driving routes
- Practice navigation through interactive map-based exercises
- Build confidence before real-world driving

No frameworks. No build tools. Just open the browser and go. 🚦

---

## Features

- 🗺️ Interactive route visualization on maps
- 🚦 Road sign recognition lessons
- 🧭 Step-by-step route guidance
- 📱 Responsive design (mobile & desktop)
- 🌙 Light/Dark mode support
- 📊 Progress tracking (stored in localStorage)

---

## Demo

> 🔗 Live demo: [https://your-demo-link.com](https://your-demo-link.com)

![DriveLearn Screenshot](./assets/screenshot.png)

---

## Getting Started

### Prerequisites

All you need is a modern web browser—no installs required for basic use.

For local development:

- A code editor (e.g., [VS Code](https://code.visualstudio.com/))
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (recommended) or any local server

### Installation

2. **Open the project**

Open `index.html` in your browser:

```bash
open index.html
# or on Windows:
start index.html
```

Or use Live Server in VS Code for hot reload during development.

---

## Project Structure

```
drivelearn/
├── index.html          # Main entry point
├── about.html          # About page
├── lessons/            # Individual lesson pages
│   ├── signs.html
│   ├── routes.html
│   └── practice.html
├── css/
│   ├── style.css       # Global styles
│   └── dark-mode.css   # Dark mode overrides
├── js/
│   ├── main.js         # App initialization
│   ├── map.js          # Route & map logic
│   ├── lessons.js      # Lesson flow logic
│   └── progress.js     # Progress tracking
├── assets/
│   ├── icons/          # Road sign icons
│   ├── images/
│   └── screenshot.png
└── README.md
```

---

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create a branch** for your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes** and commit with a clear message:

```bash
git commit -m "feat: add route replay feature."
```

4. **Push** to your fork:

```bash
git push origin feature/your-feature-name
```

5. **Open a Pull Request** on GitHub and describe what you changed and why.

### Contribution Guidelines

- Keep it vanilla — no frameworks or build tools unless discussed first
- Follow the existing code style (2-space indentation, descriptive variable names)
- Test across Chrome, Firefox, and Safari before submitting
- Open an issue before starting large changes to align with maintainers

---

## License

Distributed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute.

---

## Contact

Made with ❤️ by Janvier MBARUSHIMANA (https://github.com/janviertyga)
