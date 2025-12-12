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

export const menuCategories = {
  tagines: [
    {
      id: 't1',
      title: "Lamb Tagine with Prunes",
      description: "Tender lamb cooked with sweet prunes, almonds, and sesame seeds.",
      image: "/images/lamb-tagine.jpg",
      price: "$26.00"
    },
    {
      id: 't2',
      title: "Chicken Tagine with Preserved Lemon",
      description: "Braised chicken with preserved lemons and green olives.",
      image: "/images/chicken-tagine.jpg",
      price: "$22.00"
    },
    {
      id: 't3',
      title: "Vegetable Tagine",
      description: "A seasonal mix of vegetables slow-cooked with aromatic spices.",
      image: "/images/veg-tagine.jpg",
      price: "$18.00"
    },
    {
      id: 't4',
      title: "Fish Tagine",
      description: "Fresh fish marinated in chermoula and cooked with peppers and tomatoes.",
      image: "/images/fish-tagine.jpg",
      price: "$25.00"
    }
  ],
  couscous: [
    {
      id: 'c1',
      title: "Couscous Royale",
      description: "Our signature couscous with lamb, chicken, merguez, and vegetables.",
      image: "/images/couscous-royale.jpg",
      price: "$28.00"
    },
    {
      id: 'c2',
      title: "Vegetable Couscous",
      description: "Steamed semolina served with seven fresh garden vegetables.",
      image: "/images/veg-couscous.jpg",
      price: "$20.00"
    },
    {
      id: 'c3',
      title: "Tfaya Couscous",
      description: "Couscous topped with caramelized onions, raisins, and chickpeas.",
      image: "/images/tfaya-couscous.jpg",
      price: "$22.00"
    }
  ],
  pastries: [
    {
      id: 'p1',
      title: "Chebakia",
      description: "Sesame cookie fried and coated in honey and rose water.",
      image: "/images/chebakia.jpg",
      price: "$8.00"
    },
    {
      id: 'p2',
      title: "Briouat with Almonds",
      description: "Fried pastry triangles filled with almond paste and honey.",
      image: "/images/briouat.jpg",
      price: "$9.00"
    },
    {
      id: 'p3',
      title: "Ghriba Bahla",
      description: "Traditional Moroccan cracked shortbread cookies.",
      image: "/images/ghriba.jpg",
      price: "$7.00"
    }
  ],
  drinks: [
    {
      id: 'd1',
      title: "Moroccan Mint Tea",
      description: "Fresh mint tea served hot in a traditional teapot.",
      image: "/images/mint-tea.jpg",
      price: "$6.00"
    },
    {
      id: 'd2',
      title: "Avocado Smoothie",
      description: "Creamy avocado smoothie with milk and almonds.",
      image: "/images/avocado-smoothie.jpg",
      price: "$8.00"
    },
    {
      id: 'd3',
      title: "Fresh Orange Juice",
      description: "Freshly squeezed Moroccan oranges.",
      image: "/images/orange-juice.jpg",
      price: "$5.00"
    }
  ]
};

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
