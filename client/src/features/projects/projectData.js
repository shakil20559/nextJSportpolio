import landingCod from "@/assets/codT.png";
import eShopTamplate from '@/assets/eShopT.png';
import projapatiTemplate from '@/assets/projapatiShop.jpg';
import melangongTemplate from '@/assets/melangon1.jpg';
import ummeHabiba from '@/assets/ummeHabiba.png'
import weatherApp from '@/assets/weatherAppT.jpg'

export const projectData = [
  
{
  id: "6",
  featured: true,
  category: "MERN-Stack",
  subCategory: "E-Commerce",
  title: " Modern Fashion & Lifestyle E-Commerce Platform",
  description: "A sleek, responsive e-commerce web application featuring curated fashion collections (Men's & Women's Fashion, Party Gowns, Abaya), inventory stock tracking, category filtering, and seamless cart management.",
  image: projapatiTemplate,
  techStack: ["Next.js", "Express.js", "Node.js", "javaScript", "MongoDB", "Cloudinary", "Tailwind CSS", ],
  liveUrl: "https://projapati-shop.vercel.app/",
},

  {
  id: "5",
  featured: true,
  category: "MERN-Stack",
  subCategory: "E-Commerce",
  title: " Multi-Category E-Commerce Platform",
  description: "A feature-rich, responsive e-commerce web application featuring multi-category product browsing (Fashion, Electronics, Organic Food), stock management, dynamic filtering, and a seamless shopping cart experience.",
  image: melangongTemplate,
  techStack: ["Next.js", "Express.js", "Node.js", "javaScript", "MongoDB", "Cloudinary", "Tailwind CSS", ],
  liveUrl: "https://melangong.vercel.app/",
},

  {
    id: "4",
    featured: true,
    category: "Frontend",
    subCategory: "Weather Application",
    title: "Live Weather App",
    description: "A real-time weather app with live conditions, 7-day forecasts, location tracking, temperature unit conversion, and dynamic backgrounds that change with the weather.",
    image: weatherApp, 
    techStack: ["Next.js", "Tailwind CSS", "Weather API"],
    liveUrl: "https://weather-app-livid-theta-56.vercel.app/",
  },
   {
    id: "1",
    featured: true,
    category: "MERN-Stack",
    subCategory: " E-Commerce",
    title: "Modern Footwear E-Commerce Platform",
    description: "A full-stack MERN e-commerce web application featuring dynamic footwear category filtering, backend API integration, secure cart and order management, and persistent database storage.",
    image: eShopTamplate,
    techStack: ["Next.js", "Express.js", "Node.js", "javaScript", "MongoDB", "Cloudinary", "Tailwind CSS", ],
    liveUrl: "https://eshop-shakil.vercel.app/",
  },



  
  {
    id: "3",
    category: "Frontend",
    subCategory: "Graphic Designer",
    title: "Graphic Designer Portfolio",
    description: "A modern portfolio website designed and developed for a graphic designer. Features project showcases, responsive design, smooth animations, and a professional contact section.",
    image: ummeHabiba, 
    techStack: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://ummehabiba-alpha.vercel.app/",
  },
  {
    id: "2",
    featured: true,
    category: "MERN-Stack",
    subCategory: "E-Commerce",
    title: "Single Product Landing Page ",
    description: "High-converting landing page optimized for cash-on-delivery orders with smooth animations and checkout flow with admin panel",
    image: landingCod, 
    techStack: ["Next.js", "Express.js", "Node.js", "javaScript", "MongoDB", "Cloudinary", "Tailwind CSS", ],
    liveUrl: "https://single-product-cod.vercel.app/",
  },
]