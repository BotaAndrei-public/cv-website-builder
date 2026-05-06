# CV Site — React + Vite + Tailwind CSS

Site personal tip CV, construit cu React, Vite și Tailwind CSS.

## Pornire rapidă

```bash
# 1. Instalează dependințele
npm install

# 2. Pornește serverul de dezvoltare
npm run dev

# 3. Deschide http://localhost:5173
```

## Structura proiectului

```
cv-site/
├── public/
│   └── cv.pdf              ← pune CV-ul tău aici
├── src/
│   ├── components/
│   │   ├── icons/          ← iconițe SVG
│   │   │   ├── CheckIcon.jsx
│   │   │   ├── ChevronUpIcon.jsx
│   │   │   ├── CopyIcon.jsx
│   │   │   ├── DownloadIcon.jsx
│   │   │   ├── LocationIcon.jsx
│   │   │   ├── MailIcon.jsx
│   │   │   ├── MenuIcon.jsx
│   │   │   └── XIcon.jsx
│   │   ├── Contact.jsx     ← secțiunea de contact
│   │   ├── Education.jsx   ← secțiunea educație
│   │   ├── Experience.jsx  ← secțiunea experiență
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx        ← secțiunea principală (about)
│   │   ├── Navbar.jsx      ← bara de navigare fixă
│   │   ├── ScrollToTop.jsx ← buton scroll înapoi sus
│   │   ├── SectionHeader.jsx
│   │   ├── Skills.jsx      ← secțiunea skills
│   │   └── Timeline.jsx    ← component reutilizabil pentru exp/edu
│   ├── utils/
│   │   └── scroll.js       ← helper pentru smooth scroll
│   ├── data.js             ← ★ EDITEAZĂ AICI datele tale ★
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Cum personalizezi

Deschide **`src/data.js`** și editează:

- `profile` — nume, titlu, locație, bio, email, link-uri sociale
- `experience` — joburile tale
- `education` — studiile tale
- `skills` — competențele tale

Pune fișierul **`cv.pdf`** în folderul `public/`.

## Build pentru producție

```bash
npm run build
# Fișierele finale sunt în folderul /dist
```
