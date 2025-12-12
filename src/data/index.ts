export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featuredDishes = [
  {
    id: '1',
    title: "Moroccan Tagine",
    description: "Slow-cooked savory stew with tender lamb, apricots, and almonds.",
    image: "/images/tagine.jpg", 
    price: "$24.00"
  },
  {
    id: '2',
    title: "Couscous Royale",
    description: "Fluffy couscous served with seven vegetables and caramelized onions.",
    image: "/images/couscous.jpg",
    price: "$20.00"
  },
  {
    id: '3',
    title: "Mint Tea",
    description: "Traditional Moroccan green tea with fresh mint and sugar.",
    image: "/images/tea.jpg",
    price: "$5.00"
  },
];

export const contactInfo = {
  address: "123 Spice Market Rd, Marrakesh, Morocco",
  phone: "+212 524 123 456",
  email: "hello@wingy.com",
  hours: [
    { day: "Mon-Fri", hours: "11:00 AM - 10:00 PM" },
    { day: "Sat-Sun", hours: "10:00 AM - 11:00 PM" },
  ],
  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "Twitter", url: "#" },
  ]
};
