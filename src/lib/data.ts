export const business = {
  name: "Taza de Miel",
  tagline: "Coffee with roots.",
  address: "150 Christine Dr",
  city: "San Pablo, CA",
  instagram: "@taza_de_miel",
  instagramUrl: "https://instagram.com/taza_de_miel",
  founded: "2025",
};

export const hours = [
  { day: "Tue–Fri", hours: "7AM–3PM" },
  { day: "Sat–Sun", hours: "9AM–2PM" },
  { day: "Monday", hours: "Closed" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/nuestra-historia", label: "Our Story" },
  { href: "/visitanos", label: "Visit Us" },
];

export type MenuItem = { name: string; image: string };

export const cafecitos: MenuItem[] = [
  { name: "Tres Leches", image: "/images/menu-tres-leches.jpg" },
  { name: "El Mazapán", image: "/images/menu-mazapan.jpg" },
  { name: "Horchata Shaken Espresso", image: "/images/menu-horchata.jpg" },
  { name: "Fresa con Crema", image: "/images/menu-fresa.jpg" },
  { name: "Miel de Oro", image: "/images/menu-miel-de-oro.jpg" },
];

export const matcha: MenuItem[] = [
  { name: "Matcha Clásico", image: "/images/menu-matcha-clasico.jpg" },
  { name: "Matcha con Fresa", image: "/images/menu-matcha-fresa.jpg" },
];

export const temporada: MenuItem[] = [
  { name: "Cajeta Latte", image: "/images/menu-cajeta-latte.jpg" },
  { name: "Pan de Elote", image: "/images/menu-pan-de-elote.jpg" },
];

export const addons = [
  { name: "Oat Milk", price: "$1" },
  { name: "Cold Foam", price: "$1" },
];

export const favoritos: MenuItem[] = [
  { name: "Tres Leches", image: "/images/home-tres-leches.jpg" },
  { name: "El Mazapán", image: "/images/home-mazapan.jpg" },
  { name: "Horchata Shaken Espresso", image: "/images/home-horchata.jpg" },
];

export const valores = [
  { title: "Roots", text: "We honor our traditions." },
  { title: "Community", text: "A coffee for our people." },
  { title: "Made with Love", text: "Every cup, with intention." },
];
