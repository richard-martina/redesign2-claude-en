# Fiit Advisory — Website

Static website for **Fiit Advisory** (Foundry in Innovative Technologies Advisory), a consulting firm based in Amsterdam specialising in entrepreneurship, data engineering, and AI strategy.

## Tech stack

- Plain HTML5, CSS3, vanilla JavaScript — no build step required
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Icons: [Tabler Icons](https://tabler.io/icons) webfont via jsDelivr CDN

## Project structure

```
fiit-advisory/
├── index.html        # Single-page site
├── css/
│   └── style.css     # All styles + CSS custom properties
├── js/
│   └── main.js       # Mobile nav, scroll effects
└── README.md
```

## Getting started

No dependencies to install. Just open `index.html` in a browser, or serve with any static file server:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Customisation

All brand colours are defined as CSS custom properties in `css/style.css`:

```css
:root {
  --blue:      #32AECE;  /* primary brand blue */
  --blue-dark: #259AB9;  /* hover state        */
  --blue-light:#e4f6fb;  /* icon backgrounds   */
  /* ... */
}
```

To swap the brand colour site-wide, change `--blue` only.

## Content to update

- `index.html` — team LinkedIn URLs (currently placeholder for Dr. Martina)
- `index.html` — add real team photos by replacing the initials avatars with `<img>` tags
- `<meta name="description">` — refine for SEO
- Add a `favicon.ico` or `favicon.svg` using the Fiit logo mark

## License

© 2025 Foundry in Innovative Technology. All rights reserved.
