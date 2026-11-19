# Dejene Bogale — Personal Portfolio Website

A responsive, multi-section portfolio built with HTML5, external CSS, and vanilla JavaScript. Bootstrap and Font Awesome are loaded from CDNs.

## Project structure

```text
dejene_bogale_portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── PHOTO-INSTRUCTIONS.txt
└── README.md
```

## Run the website

1. Extract the ZIP file.
2. Open the `dejene_bogale_portfolio` folder in Visual Studio Code (or another editor).
3. Open `index.html` in a browser. For a convenient development workflow, install the **Live Server** extension in VS Code and select **Go Live**.
4. Keep an internet connection enabled to load Bootstrap, Font Awesome, and Google Fonts from their CDNs.

No Node.js, package manager, backend, or database is required.

## Interactive features

- Responsive collapsible navigation and floating quick-navigation dock
- Light/dark theme toggle
- Filterable skill cards
- Scroll reveal animations and active section indicators
- Contact form that prepares an email in the visitor’s email application
- Downloadable plain-text profile summary

## Add your own photo

Copy your portrait into the `assets` folder and name it `dejene-photo.jpg`. The homepage will display it automatically. See `assets/PHOTO-INSTRUCTIONS.txt` for details. Your actual photo was not included because it has not been uploaded in this chat.

## External packages used

- **Bootstrap 5.3.3** — responsive grid, navbar and mobile menu.
- **Font Awesome 6.7.2** — icons.
- **Google Fonts** — DM Sans and Manrope typography.

These packages are referenced in `index.html`; they do not need to be installed locally.

## Customize before publishing

- Update the biography, dates, qualifications, certificates and project details to match your verified records.
- Replace the initials `DB` hero graphic with a professional photo if desired.
- Add real LinkedIn, GitHub, Google Scholar or other profile links if you want them shown.
- The contact form opens a visitor's default email application; it does not send or store messages on a server.
- The “Download profile” button downloads a plain-text professional summary. Replace it with a link to your final PDF CV if preferred.

## Publish online

You can host this static site on GitHub Pages, Netlify, or another static web host. Upload the entire folder while preserving the `css` and `js` subfolders.
