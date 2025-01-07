# Elegant Next.js Landing Page with Tailwind CSS

An elegant, high-performance Next.js landing page that includes stunning parallax animations, infinite scrolling effects, and micro-interactions. Designed with Tailwind CSS for stylish, responsive layouts, this page offers smooth transitions and engaging animations that breathe life into every scroll.  
![Landing Page Demo](2025-01-0622-10-37-saas-landing-page.gif)


## Features
* **Jaw-Dropping Parallax Animation:** Experience a seamless 60 FPS parallax effect that adds depth and dynamism to the page.
* **Infinite Scrolling Animations:** Smoothly animated content that fades in and out, creating an immersive experience as users scroll.
* **Micro-Interactions:** Interactive elements that provide subtle feedback, ensuring every user interaction feels responsive and engaging.
* **Fully Responsive:** Mobile-first design that adjusts beautifully to different screen sizes.
* **Customizable:** Easily editable Tailwind CSS configuration and Next.js components.

## Tech Stack
* **Next.js** – A powerful React framework for building server-rendered and statically generated web apps.
* **Tailwind CSS** – Utility-first CSS framework for fast, customizable, and modern UI design.
* **Framer Motion** – A powerful library used for animations that enhances interactivity.

## Installation
To set up the project locally, follow these steps:  

**1. Clone the Repository**
```bash
git clone https://github.com/yourusername/saas-landing-page.git
```
**2. Install Dependencies**  
Navigate into the project folder and install the required dependencies:

```bash
cd saas-landing-page
npm install
```
**3. Run the Development Server**  
To see the project in action on your local machine, run the development server:

```bash
npm run dev
```
Visit http://localhost:3000 in your browser to view the landing page.

## Deployment
The project is set up to be deployed using **GitHub Actions** for continuous deployment to **GitHub Pages.**  
No additional setup is required for deployment—simply push your changes, and the workflow will handle the rest.

**Deploy to GitHub Pages using GitHub Actions**  
1. **Ensure that GitHub Actions is enabled** for your repository by going to the repository settings.
2. A pre-configured **GitHub Actions workflow** has been set up in `.github/workflows/nextjs.yml` to automatically build and deploy your project to **GitHub Pages.**
3. **Configure GitHub Pages:**    
In your repository's settings, under the Pages section, set the source to GitHub Actions.
Every time you push to the main branch, the GitHub Actions workflow will build your project and deploy it automatically to GitHub Pages.

Your landing page will be hosted at:

```arduino
https://yourusername.github.io/saas-landing-page/
````
## Tailwind CSS Configuration
You can configure Tailwind CSS to customize your design:

**Extend Tailwind’s Default Theme**  
Open the tailwind.config.js file and customize your color palette, font sizes, and other UI elements.

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7f50',  // Example custom color
      },
    },
  },
  plugins: [],
}
``` 
**Purging Unused CSS**
Ensure your final build is optimized by purging unused Tailwind CSS classes.

```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['parallax', 'fade-in', 'fade-out'], // Example classes to keep in the purge
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Acknowledgements
**Next.js** – React framework for fast, server-side rendering applications.  
**Tailwind CSS** – Utility-first CSS framework for rapid UI development.  
**Framer Motion** – An animation library for React that powers interactive animations.  

