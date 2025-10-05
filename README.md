# ShowcaseCo – Multi Page Product Showcase Website

A modern, animated multi-page product showcase website built with **React**, **Framer Motion**, and **Lottie Animations**. This project highlights innovative products with smooth transitions and responsive design.

🔗 **Live Demo**: [ShowcaseCo on GitHub Pages](https://your-username.github.io/multi-page-product-showcase-website/)

---

## 🚀 Features

* 🎨 **Modern UI/UX** with smooth animations (Framer Motion).
* 🎥 **Product Showcase Gallery** with autoplaying Cloudinary videos.
* ✨ **Animated Sections** powered by Lottie.
* 📱 **Responsive Design** with custom CSS styling.
* 🔗 **Social Links Integration** (Email, WhatsApp, LinkedIn).
* 🧭 **Navigation Bar** with active route highlighting.
* ⚡ **Fast & lightweight** single-page React app deployed on GitHub Pages.

---

## 📂 Project Structure

```
my-product-site/
│── src/
│   ├── assets/              # Images, Lottie JSON animations, videos
│   ├── components/          # Reusable UI components (Header, Navbar, etc.)
│   ├── pages/               # Page components (Home, About, Products, Gallery, Contact)
│   ├── styles/              # CSS files for styling each page
│   ├── App.jsx              # Main app layout with routes
│   ├── main.jsx             # Entry point with BrowserRouter
│── public/                  # Public assets
│── package.json
│── README.md
```

---

## 🛠️ Tech Stack

* **React 18** – UI library
* **React Router DOM** – Multi-page navigation
* **Framer Motion** – Page & component animations
* **Lottie React** – JSON-based vector animations
* **React Icons** – Social & UI icons
* **Cloudinary** – Product video hosting
* **GitHub Pages** – Deployment

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/multi-page-product-showcase-website.git
cd multi-page-product-showcase-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

App will run at `http://localhost:5173/`

---

## 🚀 Deployment on GitHub Pages

This project is deployed to **GitHub Pages** using the `gh-pages` package.

### Steps:

1. Add homepage field in `package.json`:

   ```json
   "homepage": "https://your-username.github.io/multi-page-product-showcase-website"
   ```

2. Install gh-pages:

   ```bash
   npm install gh-pages --save-dev
   ```

3. Add deploy scripts in `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy with:

   ```bash
   npm run deploy
   ```

5. Your site will be live at:

   ```
   https://your-username.github.io/multi-page-product-showcase-website
   ```

---

## 📸 Preview

### 🏠 Home Page
* Animated landing with intro text + chatbot Lottie animation

### ℹ️ About Page
* Company description with engaging Lottie

### 📦 Products Page
* Animated product list with showcase animation

### 🎥 Gallery Page
* Autoplaying Cloudinary videos with motion effects

### 📞 Contact Page
* Animated contact details + location map Lottie

---

## 👩‍💻 Author
R.K.H.K.Ramanayaka