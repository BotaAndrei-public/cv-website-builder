# CV Website Builder

A minimal, elegant CV/portfolio website paired with a browser-based builder tool — no backend, no accounts, no installation required.

---

## What's in this repo

This project has **two parts** that work together:

### 1. The CV Website (React + Vite + Tailwind)
A clean, responsive portfolio site that reads its content from a single `public/data.js` file. The site is pre-built — you don't need to touch the source code to use it.

> Source code lives on the `main` branch if you want to customize the design or components.

### 2. The Builder Tool (`builder` branch)
A standalone HTML file (no framework, no install) — open it in any browser and fill in your details. When you're done, click **Download ZIP** and you get a ready-to-deploy package.

> The builder is also live at: **[https://botaandrei-public.github.io/cv-website-builder/](https://botaandrei-public.github.io/cv-website-builder/)**  
> *(Try it directly in your browser — no download needed)*

---

## How to use it

### The fast way — use the online builder
1. Go to **[https://botaandrei-public.github.io/cv-website-builder/](https://botaandrei-public.github.io/cv-website-builder/)**
2. Fill in your info (name, experience, education, skills, links, upload your photo & CV PDF)
3. Click **Download ZIP**
4. Deploy the ZIP contents (see options below)

### The offline way — run the builder locally
1. Download `cv-builder.html` from the `builder` branch (or from Releases)
2. Open it in your browser — no server needed, just double-click
3. Fill in your details and download the ZIP

### The developer way — clone and customize
1. Clone the repo, checkout `main`
2. Edit `public/data.js` directly with your info
3. Run `npm install` then `npm run build`
4. Deploy the `dist/` folder

---

## Deploying your site

The ZIP you download from the builder contains:
- `data.js` — your personal data
- `Icon.png` — your profile photo (if uploaded)
- `favicon.ico` — your favicon (if uploaded)  
- `cv.pdf` — your CV file for download (if uploaded)
- `README.txt` — quick instructions

These files go into the `dist/` folder of the pre-built site. Here are the two recommended ways to deploy:

---

### Option A — Netlify (easiest, recommended)

**Step 1:** Download the pre-built `dist/` folder from the [Releases](../../releases) page.

**Step 2:** Copy the files from the ZIP you downloaded from the builder into the `dist/` folder. Replace `data.js` and add your images/PDF.

**Step 3:** Go to [netlify.com](https://netlify.com), sign up for free, and open **Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop)

**Step 4:** Drag and drop your `dist/` folder onto the page.

That's it — your site is live in seconds with a free URL like `https://your-name.netlify.app`.

> You can set a custom domain later from your Netlify dashboard for free, or buy one through Netlify.

---

### Option B — GitHub Pages (free, permanent)

**Step 1:** Create a free account at [github.com](https://github.com) if you don't have one.

**Step 2:** Create a new repository named exactly: `your-username.github.io`  
*(replace `your-username` with your actual GitHub username)*

**Step 3:** Download the pre-built `dist/` folder from the [Releases](../../releases) page. Copy your builder ZIP files into it.

**Step 4:** Upload all the files from `dist/` to the root of your new repository.  
On GitHub, click **Add file → Upload files** and drag everything in.

**Step 5:** Go to your repository **Settings → Pages**. Under "Source", select **Deploy from a branch**, choose `main`, and set the folder to `/ (root)`.

**Step 6:** Wait 1–2 minutes. Your site will be live at `https://your-username.github.io`.

> GitHub Pages is completely free for public repositories and has no bandwidth limits for personal sites.

---

## What the builder lets you edit

| Section | What you can customize |
|---|---|
| **Profile** | Name, job title, location, bio, email, browser tab title |
| **Social Links** | Add/remove any number of links (LinkedIn, GitHub, etc.) |
| **Experience** | Add/remove/reorder positions — role, company, period, description |
| **Education** | Add/remove/reorder entries — degree, school, period, description |
| **Skills** | Add/remove individual skill tags |
| **Files** | Profile photo, favicon, CV PDF for download |
| **Navigation** | Edit menu labels and section anchors |

---

## Branches

| Branch | Contents |
|---|---|
| `main` | Full React source code — for developers who want to customize |
| `builder` | The standalone `cv-builder.html` tool |
| `gh-pages` | Live deployment of the builder tool |

---

## Tech stack

**CV Site:** React 18, Vite, Tailwind CSS  
**Builder:** Vanilla HTML/CSS/JS, [JSZip](https://stuk.github.io/jszip/)  
**Deployment:** Netlify / GitHub Pages

---

## License

MIT — free to use, modify, and share.
