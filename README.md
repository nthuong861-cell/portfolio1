# My Portfolio Website

A clean, modern static portfolio site built with **HTML5**, **CSS3**, and **vanilla JavaScript** — no frameworks, no icon libraries, images and text only.

## Project Structure

```
project/
├── index.html        ← Main page
├── styles.css        ← All styles (dark theme, CSS variables)
├── script.js         ← Interactions (navbar, filters, form, scroll-reveal)
├── images/           ← Place your images here (see list below)
└── .github/
    └── copilot-instructions.md
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen background image with animated intro text |
| **About** | Profile photo + bio + stats |
| **Services** | 3-column cards with images |
| **Portfolio** | Filterable image grid (All / Design / Dev / Brand) |
| **Testimonials** | 3 client quote cards with avatars |
| **Contact** | Details + form with validation |
| **Footer** | Copyright line |

## Image Placeholders

Replace these files in the `images/` folder with your own photos:

| File | Used in |
|---|---|
| `hero-bg.jpg` | Hero full-screen background |
| `profile.jpg` | About section photo |
| `service-ui.jpg` | UI/UX service card |
| `service-dev.jpg` | Development service card |
| `service-brand.jpg` | Branding service card |
| `project-1.jpg` to `project-6.jpg` | Portfolio gallery items |
| `client-1.jpg` to `client-3.jpg` | Testimonial avatars |

> **Recommended sizes:**  
> Hero bg → 1920×1080 px · Profile → 600×750 px · Project cards → 800×600 px · Avatars → 100×100 px

## How to Run

Simply open `index.html` in any browser. No build step needed.

For live-reloading during development, use the **Live Server** extension in VS Code:
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

## Customisation

- Edit your **name**, **role**, and **bio** directly in `index.html`
- Change the **accent colour** (gold `#c8a96e`) in the `:root` block of `styles.css`
- Update contact details in the `<!-- CONTACT -->` section of `index.html`
- Add/remove portfolio items by duplicating/removing `.portfolio-item` blocks
