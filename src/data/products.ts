export type PricingType = 'standard' | 'sweet' | 'custom';

export interface PriceOption {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'hot-items' | 'sweets';
  prices: PriceOption[];
  image: string;
}

const hotItemPrice: PriceOption[] = [
  { label: '250g', price: 80 },
  { label: '500g', price: 160 },
  { label: '1Kg', price: 320 },
];

const hotItemNames = [
  'Mixture', 'Boondi', 'Kaaram Chekkalu (Small)', 'Pachi Mirchi Chekkalu (Big)',
  'Sanna Karapusa', 'Sanna Murukulu', 'Lavu Murukulu', 'Pappu Chakodilu',
  'Corn Flakes Mixture', 'Janthikalu', 'Masala Palli', 'Kaaram Palli',
  'Chakodi', 'Kaju Biscuits', 'Ribbon Pakodi', 'Dal Moth', 'Atukula Mixture',
];

const hotItemDescriptions: Record<string, string> = {
  'Mixture': 'Classic spicy South Indian mixture with crunchy goodness',
  'Boondi': 'Crispy gram flour pearls seasoned with spices',
  'Kaaram Chekkalu (Small)': 'Small spicy rice crackers with authentic taste',
  'Pachi Mirchi Chekkalu (Big)': 'Large green chilli flavored rice crackers',
  'Sanna Karapusa': 'Thin crispy diamond-shaped savory snack',
  'Sanna Murukulu': 'Delicate spiral-shaped crunchy treat',
  'Lavu Murukulu': 'Thick twisted murukku with bold spices',
  'Pappu Chakodilu': 'Dal-based crispy chakodi with aromatic spices',
  'Corn Flakes Mixture': 'Crunchy corn flakes tossed with nuts & spices',
  'Janthikalu': 'Star-shaped crispy snack with cumin flavor',
  'Masala Palli': 'Spiced peanuts roasted to perfection',
  'Kaaram Palli': 'Hot & spicy peanuts with red chilli',
  'Chakodi': 'Traditional crispy ring-shaped savory snack',
  'Kaju Biscuits': 'Rich cashew-flavored crispy cookies',
  'Ribbon Pakodi': 'Ribbon-shaped crispy gram flour snack',
  'Dal Moth': 'Crunchy spiced lentil snack mix',
  'Atukula Mixture': 'Flattened rice mixture with nuts & spices',
};

function makeSweet(name: string, desc: string, p250: number, p500: number, p1kg: number): Product {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name, description: desc, category: 'sweets',
    prices: [{ label: '250g', price: p250 }, { label: '500g', price: p500 }, { label: '1Kg', price: p1kg }],
    image: '/src/assets/products/sweets.jpg',
  };
}

function makeSweetCustom(name: string, desc: string, prices: PriceOption[]): Product {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name, description: desc, category: 'sweets', prices,
    image: '/src/assets/products/sweets.jpg',
  };
}

export const products: Product[] = [
  ...hotItemNames.map(name => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    description: hotItemDescriptions[name] || 'Traditional savory snack',
    category: 'hot-items' as const,
    prices: [...hotItemPrice],
    image: '/src/assets/products/hot-items.jpg',
  })),
  makeSweet('White Kalakand', 'Creamy milk-based fudge with delicate sweetness', 140, 280, 560),
  makeSweet('Brown Kalakand', 'Caramelized milk fudge with rich flavor', 140, 280, 560),
  makeSweet('Dry Fruits Kalakand', 'Premium kalakand loaded with dry fruits', 140, 280, 560),
  makeSweet('Double Color Kalakand', 'Two-layered kalakand with unique presentation', 140, 280, 560),
  makeSweet('Milk Mysore Pak', 'Silky smooth milk-based Mysore Pak', 140, 280, 560),
  makeSweet('Dry Fruit Halwa', 'Rich halwa studded with premium dry fruits', 155, 310, 620),
  makeSweet('Dry Fruits Laddu', 'Nutritious laddu packed with mixed dry fruits', 230, 460, 920),
  makeSweet('Kaju Katli', 'Diamond-shaped cashew fudge, thin & premium', 255, 510, 1020),
  makeSweet('Madatha Kaja', 'Flaky layered sweet soaked in sugar syrup', 80, 160, 320),
  makeSweet('Badhusa', 'Deep-fried doughnut-shaped sweet soaked in syrup', 80, 160, 320),
  makeSweet('Kobbari Gajjikayalu', 'Coconut-filled crescent-shaped sweet', 90, 180, 360),
  makeSweet('Kova Puri', 'Soft puri filled with sweetened condensed milk', 80, 160, 320),
  makeSweet('Kala Jamun', 'Dark, rich milk solid balls in sugar syrup', 115, 230, 460),
  makeSweet('Gormiti', 'Traditional Andhra sweet with jaggery', 80, 160, 320),
  makeSweet('Sanna Boondi Laddu', 'Small boondi pearls shaped into sweet laddus', 85, 170, 340),
  makeSweet('Laavu Boondi Laddu', 'Large boondi laddu with aromatic cardamom', 85, 170, 340),
  makeSweet('Mysore Pak', 'Classic ghee-rich Mysore Pak with melt-in-mouth texture', 80, 160, 320),
  makeSweet('Sunnundalu', 'Roasted urad dal laddu with jaggery', 125, 250, 500),
  makeSweet('Bellam Gavvalu', 'Shell-shaped sweet made with jaggery', 80, 160, 320),
  makeSweet('Bellam Kommulu', 'Jaggery-based horn-shaped traditional sweet', 80, 160, 320),
  makeSweet('Nuvvula Laddu', 'Sesame seed laddu with jaggery sweetness', 115, 230, 460),
  makeSweet('Palkova', 'Thick condensed milk sweet, rich & creamy', 130, 260, 520),
  makeSweet('Doodh Peda', 'Soft milk peda flavored with cardamom & saffron', 130, 260, 520),
  makeSweet('Ice Cream Barfi', 'Colorful layered barfi resembling ice cream', 140, 280, 560),
  makeSweet('Annamayya Laddu', 'Famous temple-style laddu with pure ghee', 140, 280, 560),
  makeSweet('Motichoor Laddu', 'Fine boondi laddu, soft & melt-in-mouth', 85, 180, 340),
  makeSweetCustom('Pootharekulu', 'Paper-thin rice starch sheets with sweet filling', [{ label: '5 pcs', price: 120 }, { label: '10 pcs', price: 220 }]),
  makeSweet('Jangri', 'Spiral-shaped sweet made from urad dal batter', 90, 180, 360),
  makeSweet('Halwa', 'Soft, aromatic traditional halwa', 90, 180, 360),
  makeSweet('Plain Ariselu', 'Traditional rice flour sweet with jaggery', 90, 180, 360),
  makeSweet('Nuvvula Ariselu', 'Sesame-coated jaggery rice sweet', 90, 180, 360),
  makeSweet('Bellam Chalivedi', 'Jaggery-based crispy sweet snack', 90, 180, 360),
  makeSweet('Panchadhaara Chalividi', 'Sugar-coated crispy sweet treat', 90, 180, 360),
  makeSweet('Chilakalu', 'Traditional Andhra sweet squares', 90, 180, 360),
  makeSweet('Regi Vadiyalu', 'Jujube fruit dried sweet treats', 80, 160, 320),
  makeSweet('Palli Undalu', 'Peanut balls bound with jaggery', 80, 160, 320),
  makeSweet('Bellam Boondi Achu', 'Jaggery boondi pressed into molds', 85, 170, 340),
  makeSweet('Mallarpu Laddu', 'Fragrant puffed rice laddu', 90, 180, 360),
  makeSweet('Kaju Achu', 'Premium cashew-based molded sweet', 255, 510, 1020),
];
