import images from './images.json';

export const restaurant = {
  name: 'Chefs & Pulao Station',
  short: 'Chefs',
  tagline: 'Platters Specialist • Yakhni Pulao • Fast Food',
  phone: '0347 8520705',
  phoneTel: '+923478520705',
  whatsapp: '923478520705',
  email: 'Chefsb17@gmail.com',
  address: 'Opposite COMSATS University, GT Road, Jamilabad, Taxila / Wah',
  plusCode: 'PQRP+JMP, GT Rd, Jamilabad Nawababad, Taxila, 47080',
  hours: 'Open daily till late (1 AM)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chefs+and+Pulao+Station+Taxila',
  mapsEmbed: 'https://www.google.com/maps?q=Chefs+and+Pulao+Station+Taxila&output=embed',
  instagram: 'https://www.instagram.com/chefspulaostationtaxila/',
  facebook: 'https://www.facebook.com/chefsb17/',
  youtube: 'https://www.youtube.com/@chefs2021',
  tiktok: 'https://www.tiktok.com/@chefstaxilawah',
  googleRating: 4.4,
  googleReviews: 132,
  fbFollowers: '2.4K',
  fbReviews: 17,
  fbRecommend: 86,
  service: ['Dine-in', 'Curbside pickup', 'Delivery via WhatsApp'],
};

export type MenuItem = { name: string; desc?: string; price?: string; sizes?: [string, string][]; tag?: string };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

// Prices from the restaurant's official Facebook menu cards (April). Confirm at counter.
export const menu: MenuCategory[] = [
  {
    id: 'deals',
    label: 'Best Deals',
    items: [
      { name: 'Student Deal', desc: '1 Medium Pizza, 2 Zinger Burgers, 1 Ltr Drink', price: 'Rs 1,900', tag: 'Popular' },
      { name: 'Friends Deal', desc: '1 Mexican Burger, 1 Small Pizza, 1 Ltr Drink', price: 'Rs 1,300' },
      { name: 'Family Deal', desc: '2 Small Pizzas, 2 Zinger Burgers, 1 Ltr Drink', price: 'Rs 2,000' },
      { name: 'Mighty Deal', desc: '1 Large Pizza, 4 Zinger Burgers, 1.5 Ltr Drink', price: 'Rs 3,100', tag: 'Best Value' },
      { name: 'Burger Deal 1', desc: '1 Zinger Burger, 1 Fries, 1 Regular Drink', price: 'Rs 800' },
      { name: 'Burger Deal 2', desc: '2 Zinger Burgers, 2 Fries, 2 Regular Drinks', price: 'Rs 1,650' },
      { name: 'Pizza Deal 1', desc: '1 Small Pizza, 1 Fries, 2 Regular Drinks', price: 'Rs 1,050' },
      { name: 'Pizza Deal 2', desc: '1 Medium Pizza, 2 Fries, 2 Regular Drinks', price: 'Rs 1,800' },
      { name: 'Chicken Bucket', desc: 'Crispy chicken broast', sizes: [['Half', '950'], ['Full', '1,850']] },
    ],
  },
  {
    id: 'pulao',
    label: 'Pulao Station',
    items: [
      { name: 'Chicken Pulao Single', desc: 'With kabab · with chicken piece · without kabab', sizes: [['Kabab', '590'], ['Piece', '610'], ['Plain', '490']], tag: 'Signature' },
      { name: 'Chicken Pulao Special', desc: 'With kabab · with chicken piece · without kabab', sizes: [['Kabab', '790'], ['Piece', '830'], ['Plain', '690']] },
      { name: 'Pulao Kabab', desc: 'Yakhni pulao served with shami kabab', price: 'Rs 390' },
      { name: 'Simple Pulao', desc: 'Traditional yakhni pulao', price: 'Rs 290' },
      { name: 'Chicken Steam Roast', desc: 'Juicy steam-roasted chicken', sizes: [['Half', '850'], ['Full', '1,700']] },
      { name: 'Chicken Piece (1/8)', price: 'Rs 200' },
      { name: 'Shami Kabab', desc: 'Per dozen', price: 'Rs 600' },
      { name: 'Extra Raita & Salad', price: 'Rs 60' },
    ],
  },
  {
    id: 'platters',
    label: 'BBQ & Platters',
    items: [
      { name: 'Chicken Platter with Pulao', desc: 'Rice, full crispy chicken roast, 4 pcs steam chicken, 6 shami kabab, raita, salad, ketchup, 1.5 L drink', sizes: [['Half', '2,100'], ['Full', '3,600']], tag: 'Family Favourite' },
      { name: 'BBQ Platter (2–3 persons)', desc: 'Rice, 4 kabab, 4 malai boti, 4 chicken boti, 1 chicken tikka, 1 Ltr drink', price: 'Rs 2,500' },
      { name: 'BBQ Full Platter (5–6 persons)', desc: 'Rice, 8 kabab, 10 malai boti, 8 chicken boti, 2 chicken tikka, 1.5 Ltr drink', price: 'Rs 4,500', tag: 'Party Size' },
      { name: 'Shawarma Platter', desc: 'Special, Arabic & Turkish shawarma (3 pcs) with fries', price: 'Rs 1,150' },
      { name: 'Wrap Platter', desc: 'Mexican, Turkish & Crispy wraps (3 pcs)', price: 'Rs 1,450' },
      { name: 'Burger Platter', desc: '4 Zinger burgers with fries', price: 'Rs 1,700' },
      { name: "Special Chef's Pizza Platter", desc: 'Small + Medium + Large pizza with fries', price: 'Rs 2,800', tag: 'Chef Special' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    items: [
      { name: "Chef's Special", sizes: [['S', '600'], ['M', '1,100'], ['L', '1,450']], tag: 'Signature' },
      { name: 'Calzone', sizes: [['S', '500'], ['M', '1,050'], ['L', '1,300']] },
      { name: 'Deep Dish', sizes: [['M', '1,200'], ['L', '1,450']] },
      { name: 'BBQ', sizes: [['S', '600'], ['M', '1,150'], ['L', '1,350']] },
      { name: 'Chicken Tikka', sizes: [['S', '600'], ['M', '1,100'], ['L', '1,350']] },
      { name: 'Chicken Fajita', sizes: [['S', '600'], ['M', '1,100'], ['L', '1,400']] },
      { name: 'Crown Crust', sizes: [['M', '1,250'], ['L', '1,600']] },
      { name: 'Lebanese Kabab', sizes: [['M', '1,200'], ['L', '1,450']] },
      { name: 'Add-ons', desc: 'Mayo dip 50 · Cheese slice 50 · Chicken topping 150 · Cheese topping 100' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers & Wraps',
    items: [
      { name: "Chef's Special Burger", price: 'Rs 750', tag: 'Chef Special' },
      { name: 'Suicide Burger', price: 'Rs 600' },
      { name: 'Mushroom Burger', price: 'Rs 500' },
      { name: 'Mexican Burger', price: 'Rs 450' },
      { name: 'Zinger Burger', price: 'Rs 450' },
      { name: 'Zinger + Cheese Burger', price: 'Rs 500' },
      { name: 'Cheeto Burger', price: 'Rs 450' },
      { name: 'Wraps', desc: 'Mexican · Turkish · Crispy', sizes: [['Mexican', '500'], ['Turkish', '550'], ['Crispy', '450']] },
      { name: 'Shawarma', desc: 'Special · Arabic · Turkish', sizes: [['Special', '300'], ['Arabic', '300'], ['Turkish', '350']] },
    ],
  },
  {
    id: 'sides',
    label: 'Fries & Wings',
    items: [
      { name: 'Fries', desc: 'Plain · Masala · Garlic Mayo · Cheese · Loaded · Pizza', sizes: [['Plain', '280'], ['Masala', '300'], ['Garlic Mayo', '330'], ['Cheese', '350'], ['Loaded', '450'], ['Pizza', '550']] },
      { name: 'Wings', desc: 'Crispy · BBQ · Hot Buffalo · Honey Chilli', sizes: [['Crispy', '350'], ['BBQ', '400']] },
      { name: 'Chicken Strips with Fries', price: 'Rs 550' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & Shakes',
    items: [
      { name: 'Soft Drinks', sizes: [['300ml', '100'], ['500ml', '120'], ['1 L', '170'], ['1.5 L', '220']] },
      { name: 'Margaritas', desc: 'Mint · Blueberry · Peach', sizes: [['Mint', '200'], ['Blueberry', '300'], ['Peach', '300']] },
      { name: 'Shakes', desc: 'Oreo · Kit Kat · Vanilla · Pina Colada', sizes: [['Oreo', '300'], ['Kit Kat', '350'], ['Vanilla', '300'], ['Pina Colada', '350']] },
    ],
  },
];

const toImg = (i: (typeof images)[number]) => ({
  id: i.id,
  alt: i.alt,
  local: `/images/${i.file}`,
  remote: i.remote,
});
export const menuCards = images.filter((i) => i.kind === 'menu').map(toImg);
export const gallery = images.filter((i) => i.kind === 'food').map(toImg);
