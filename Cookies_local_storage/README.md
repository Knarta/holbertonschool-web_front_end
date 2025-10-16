# 🍪 Cookies & Local Storage

> **Master client-side storage technologies for persistent, high-performance web experiences**

A comprehensive exploration of browser storage mechanisms powering modern web applications in 2025. From traditional HTTP cookies to cutting-edge Web Storage APIs, this project delivers hands-on mastery of client-side data persistence.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Launch development server
npm start
```

Server runs on `http://localhost:8080` with hot module replacement enabled.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build with optimization |
| `npm run dev` | Development build |
| `npm run watch` | Auto-recompile on file changes |
| `npm start` | Dev server with live reload |

---

## 🎯 Project Exercises

### **0-index.html** - Webpack Setup & Basic Cookies
Configure modern JavaScript bundling and implement fundamental cookie operations.

**Features:**
- Webpack 5 configuration with `src/index.js` entry point
- `setCookies()` and `showCookies()` functions
- Clean login interface with firstname/email inputs
- JavaScript module bundling

**Key Concepts:** Module bundling, `document.cookie` API, DOM manipulation

---

### **1-index.html** - Cookie Expiration Management
Implement time-based cookie lifecycle control.

**Features:**
- 10-day expiration timestamps
- UTC date formatting
- Controlled persistence duration

**Key Concepts:** `expires` attribute, JavaScript Date API, `toUTCString()`

---

### **2-index.html** - Targeted Cookie Reading
Parse and extract specific cookie values from the cookie string.

**Features:**
- `getCookie(name)` utility function
- Cookie string parsing
- Formatted display: `Email: xxx - Firstname: xxx`

**Key Concepts:** String manipulation, cookie parsing patterns, data extraction

---

### **3-index.html** - Complete Authentication Flow
Full-featured login/logout system with session persistence.

**Features:**
- Personalized welcome message
- Interactive logout functionality
- State management (form ↔ message)
- Automatic session detection on page load
- `deleteCookiesAndShowForm()` implementation

**Key Concepts:** Session management, state toggling, event lifecycle, cookie deletion

---

### **4-index.html** - js-cookie Library Integration
Leverage modern cookie management with industry-standard library.

**Features:**
- js-cookie v3.0.5 via CDN
- Simplified API: `Cookies.set()`, `Cookies.get()`, `Cookies.remove()`
- Cleaner, more maintainable code
- Same UX as exercise 3 with enhanced implementation

**Key Concepts:** Library abstraction, CDN integration, modern cookie API

---

### **5-index.html** - localStorage Shopping Cart
Build a persistent shopping cart with permanent browser storage.

**Features:**
- Product catalog: Shampoo, Soap, Sponge, Water
- Permanent storage via `localStorage`
- Browser support detection
- Saved items counter
- Modern UI with hover effects

**Key Concepts:** `localStorage.setItem()`/`getItem()`, feature detection, cross-session persistence

---

### **6-index.html** - sessionStorage Shopping Cart
Session-scoped cart implementation with temporary data lifecycle.

**Features:**
- `sessionStorage` instead of `localStorage`
- Data cleared on browser/tab close
- Identical interface to exercise 5

**Key Concepts:** `sessionStorage` API, localStorage vs sessionStorage differences, session lifecycle

---

### **7-index.html** - Advanced Cart with Full CRUD
Enterprise-grade shopping cart with complete data management.

**Features:**
- JSON-structured quantity storage
- Incremental item addition (quantity counter)
- Individual item removal: `removeItemfromCart()`
- "Clear my cart" for full reset
- Sophisticated UI with conditional styling
- Display format: `Item x Quantity`

**Key Concepts:** JSON serialization/deserialization, CRUD operations, complex state management, e-commerce UX patterns

---

## 🏗️ Project Architecture

```
Cookies_local_storage/
├── 0-index.html              # Webpack + basic cookies
├── 1-index.html              # Cookie expiration
├── 2-index.html              # Cookie reading
├── 3-index.html              # Login/logout flow
├── 4-index.html              # js-cookie library
├── 5-index.html              # localStorage cart
├── 6-index.html              # sessionStorage cart
├── 7-index.html              # Advanced cart
├── src/
│   └── index.js              # Cookie functions (bundled)
├── dist/
│   └── bundle.js             # Webpack output
├── webpack.config.js         # Webpack configuration
├── package.json              # Dependencies & scripts
└── README.md                 # Documentation
```

---

## 📊 Storage Technology Comparison

| Feature | Cookies | localStorage | sessionStorage |
|---------|---------|--------------|----------------|
| **Capacity** | ~4KB | ~5-10MB | ~5-10MB |
| **Expiration** | Configurable | Permanent | Until tab close |
| **Server Transfer** | ✅ Automatic | ❌ No | ❌ No |
| **Accessibility** | Client & Server | Client only | Client only |
| **Scope** | Domain/path | Domain | Domain + tab |
| **API Complexity** | String manipulation | Simple key-value | Simple key-value |
| **Use Case** | Auth tokens, preferences | User data, settings | Form data, temp state |

---

## 🎨 Design System

All exercises follow a cohesive design language:

### Typography
- **Headings:** Georgia, serif (40-48px, bold)
- **Body:** Arial, sans-serif (18-24px)
- **Color Palette:** Neutral tones with subtle accents

### UI Components
- Buttons with 12px border-radius and box-shadow
- Minimalist inputs with #ccc borders
- Smooth hover transitions (0.3s)
- Immediate visual feedback

---

## 🔒 Security Best Practices

### Cookies
- ⚠️ **Never** store sensitive data (passwords, tokens) without encryption
- ✅ Use `Secure` and `HttpOnly` flags in production
- ✅ Set appropriate `SameSite` attribute (Strict/Lax)
- ✅ Always sanitize user inputs before storage

### Web Storage
- ⚠️ ~5-10MB limit per domain
- ⚠️ Accessible via JavaScript (vulnerable to XSS attacks)
- ✅ Validate and sanitize all stored data
- ✅ Always parse JSON in try-catch blocks
- ✅ Never store authentication tokens or sensitive information

---

## 🧪 Testing & Validation

### Manual Testing Checklist

**Persistence Testing:**
1. Create data
2. Refresh the page
3. Verify data persistence

**Expiration Testing (Exercise 1):**
1. Modify expiration to 10 seconds
2. Wait and verify auto-deletion

**Browser Support:**
1. Open DevTools
2. Disable storage
3. Verify error messages

**Storage Inspection:**
1. DevTools → Application → Storage
2. Check Cookies / Local Storage / Session Storage
3. Verify data structure

---

## 🌐 Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Cookies | ✅ All | ✅ All | ✅ All | ✅ All |
| localStorage | ✅ 4+ | ✅ 3.5+ | ✅ 4+ | ✅ 8+ |
| sessionStorage | ✅ 5+ | ✅ 2+ | ✅ 4+ | ✅ 8+ |

**100% compatible with all modern browsers in 2025.**

---

## 🎓 Learning Objectives

By completing this project, you will be able to:

✅ Manipulate cookies using native JavaScript API  
✅ Manage cookie expiration dates and attributes  
✅ Integrate third-party libraries (js-cookie)  
✅ Implement localStorage for permanent persistence  
✅ Use sessionStorage for temporary data  
✅ Build stateful client-side applications  
✅ Understand storage method trade-offs  
✅ Apply security best practices  
✅ Configure and use Webpack for bundling  
✅ Create interactive user interfaces  

---

## 💡 Technologies Used

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?style=flat&logo=webpack&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

---

<div align="center">


*Holberton School - Web Front End Specialization 2025*

</div>
