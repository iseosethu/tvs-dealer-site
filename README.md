# TVS Brilliant Motors - Dealer Website

This is a responsive multi-page dealership website for **TVS Brilliant Motors** based in Mandaveli, Chennai. Built with **Next.js 14 (App Router)** and **Tailwind CSS v3.4**, it includes booking forms, vehicle gallery, contact info, Firebase integration, and Formspree email handling.

---

## 🚀 Features

- Fully responsive layout with light/dark mode
- Vehicle grid with image gallery
- Test ride/service booking with Firebase + Formspree
- Google Maps embed for branch locations
- Clean UI with Tailwind CSS v3.4
- Deployable to Vercel or other platforms

---

## 📁 Project Structure

```
tvs-dealer-full-site/
├── app/
│   ├── about/page.jsx
│   ├── contact/page.jsx
│   ├── branches/page.jsx
│   ├── vehicles/page.jsx
│   ├── booking/page.jsx
│   └── layout.jsx / page.jsx / globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Carousel.jsx
├── public/images/
│   ├── apache.jpg
│   ├── jupiter.jpg
│   └── ntorq.jpg
├── firebase.js
├── .env.local
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🔧 Setup Instructions

1. **Install Dependencies**:

```bash
npm install
```

2. **Configure Environment**: Create `.env.local` with:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mblkyqgl
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBSBP7eef_DdEE9_59zohg1P51mzqz48KQ
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project1-544de.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project1-544de
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project1-544de.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=679446737257
NEXT_PUBLIC_FIREBASE_APP_ID=1:679446737257:web:f58ad9cc9b04d98a40cdf8
```

3. **Run Dev Server**:

```bash
npm run dev
```

Visit `http://localhost:3000` to view.

---

## 🧾 Pages

- `/` → Home page with banner carousel
- `/about` → Dealership details
- `/contact` → Contact info and address
- `/branches` → Branch list + Google Map
- `/vehicles` → Vehicle gallery (Apache, Jupiter, Ntorq)
- `/booking` → Booking form with Firebase + Formspree

---

## 📦 Deployment

Recommended: [Vercel](https://vercel.com)

```bash
vercel deploy
```

---

## 🤝 Author

Made with ❤️ for [TVS Brilliant Motors](https://dealers.tvsmotor.com/tvs-motors/...)

---

## 📜 License

This project is for demonstration and dealership use only.