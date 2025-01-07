# React Router Website

This project is a simple and responsive React website built with **React Router**. It demonstrates how to create a single-page application (SPA) with multiple sections and a shared layout for smooth navigation.

---

## Features

1. **Routing with React Router**
   - Seamless navigation between pages without refreshing the browser.
   - Pages include Home, Service, Accessories, and About.

2. **Shared Layout**
   - A common layout (`RootLayout`) that contains a navigation bar and a placeholder for page content.

3. **Responsive Navigation Bar**
   - Includes a mobile-friendly menu toggle using `useState`.
   - Styled with Tailwind CSS for a clean and modern design.

4. **Reusable Components**
   - Navigation bar and individual pages are modular, making the project easy to maintain and expand.

5. **Organized Folder Structure**
   - Components, pages, layouts, and assets (like images) are stored in separate folders for better organization.

---

## Folder Structure

```
project/
├── public/
├── src/
│   ├── Components/
│   │   └── Navbar.jsx
│   ├── Layout/
│   │   └── RootLayout.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Service.jsx
│   │   ├── Accessories.jsx
│   │   └── About.jsx
│   ├── data/
│   │   └── data.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── vite.config.js
└── package.json
```

---

## Technologies Used

- **React.js**: For building the website.
- **React Router**: For handling navigation between pages.
- **JavaScript (ES6)**: For logic and functionality.
- **CSS (Tailwind)**: For responsive and modern styling.
- **Lucide-React**: For icons in the navigation bar.
- **Vite**: For project setup and development server.

---

## how to run it
 first intall node modules
 ```
npm install / npm i
```
 Start the development server:
   ```bash
   npm run dev
   ```

 Open the app in your browser:
   ```
   http://localhost:5173
   ```


## How It Works

1. **Starting Point:**
   - The app starts from `main.jsx`, where React Router is initialized.

2. **Routing:**
   - Routes are defined in `App.jsx`, linking paths (e.g., `/service`) to corresponding page components.

3. **Shared Layout:**
   - `RootLayout.jsx` ensures that the navigation bar and page content are consistent across all pages.

4. **Navigation Bar:**
   - `Navbar.jsx` renders navigation links dynamically from an array.
   - Mobile-friendly menu toggle functionality is implemented using `useState`.

5. **Pages:**
   - Each page (e.g., Home, Service) is defined in separate components under the `Pages` folder.



