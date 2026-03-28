// export type PricingType = 'standard' | 'sweet' | 'custom';

// export interface PriceOption {
//   label: string;
//   price: number;
// }

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   category: 'hot-items' | 'sweets';
//   prices: PriceOption[];
//   image: string;
// }

// const hotItemPrice: PriceOption[] = [
//   { label: '250g', price: 80 },
//   { label: '500g', price: 160 },
//   { label: '1Kg', price: 320 },
// ];

// const hotItemNames = [
//   'Mixture', 'Boondi', 'Kaaram Chekkalu (Small)', 'Pachi Mirchi Chekkalu (Big)',
//   'Sanna Karapusa', 'Sanna Murukulu', 'Lavu Murukulu', 'Pappu Chakodilu',
//   'Corn Flakes Mixture', 'Janthikalu', 'Masala Palli', 'Kaaram Palli',
//   'Chakodi', 'Kaju Biscuits', 'Ribbon Pakodi', 'Dal Moth', 'Atukula Mixture',
// ];

// const hotItemDescriptions: Record<string, string> = {
//   'Mixture': 'Classic spicy South Indian mixture with crunchy goodness',
//   'Boondi': 'Crispy gram flour pearls seasoned with spices',
//   'Kaaram Chekkalu (Small)': 'Small spicy rice crackers with authentic taste',
//   'Pachi Mirchi Chekkalu (Big)': 'Large green chilli flavored rice crackers',
//   'Sanna Karapusa': 'Thin crispy diamond-shaped savory snack',
//   'Sanna Murukulu': 'Delicate spiral-shaped crunchy treat',
//   'Lavu Murukulu': 'Thick twisted murukku with bold spices',
//   'Pappu Chakodilu': 'Dal-based crispy chakodi with aromatic spices',
//   'Corn Flakes Mixture': 'Crunchy corn flakes tossed with nuts & spices',
//   'Janthikalu': 'Star-shaped crispy snack with cumin flavor',
//   'Masala Palli': 'Spiced peanuts roasted to perfection',
//   'Kaaram Palli': 'Hot & spicy peanuts with red chilli',
//   'Chakodi': 'Traditional crispy ring-shaped savory snack',
//   'Kaju Biscuits': 'Rich cashew-flavored crispy cookies',
//   'Ribbon Pakodi': 'Ribbon-shaped crispy gram flour snack',
//   'Dal Moth': 'Crunchy spiced lentil snack mix',
//   'Atukula Mixture': 'Flattened rice mixture with nuts & spices',
// };

// function makeSweet(name: string, desc: string, p250: number, p500: number, p1kg: number): Product {
//   return {
//     id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
//     name, description: desc, category: 'sweets',
//     prices: [
//       { label: '250g', price: p250 }, 
//       { label: '500g', price: p500 }, 
//       { label: '1Kg', price: p1kg }
//     ],
//     image: '/src/assets/products/sweets.jpg',
//   };
// }

// function makeSweetCustom(name: string, desc: string, prices: PriceOption[]): Product {
//   return {
//     id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
//     name, description: desc, category: 'sweets', prices,
//     image: '/src/assets/products/sweets.jpg',
//   };
// }

// export const products: Product[] = [
//   ...hotItemNames.map(name => ({
//     id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
//     name,
//     description: hotItemDescriptions[name] || 'Traditional savory snack',
//     category: 'hot-items' as const,
//     prices: [...hotItemPrice],
//     image: '/src/assets/products/hot-items.jpg',
//   })),
//   makeSweet('White Kalakand', 'Creamy milk-based fudge with delicate sweetness', 140, 280, 560),
//   makeSweet('Brown Kalakand', 'Caramelized milk fudge with rich flavor', 140, 280, 560),
//   makeSweet('Dry Fruits Kalakand', 'Premium kalakand loaded with dry fruits', 140, 280, 560),
//   makeSweet('Double Color Kalakand', 'Two-layered kalakand with unique presentation', 140, 280, 560),
//   makeSweet('Milk Mysore Pak', 'Silky smooth milk-based Mysore Pak', 140, 280, 560),
//   makeSweet('Dry Fruit Halwa', 'Rich halwa studded with premium dry fruits', 155, 310, 620),
//   makeSweet('Dry Fruits Laddu', 'Nutritious laddu packed with mixed dry fruits', 230, 460, 920),
//   makeSweet('Kaju Katli', 'Diamond-shaped cashew fudge, thin & premium', 255, 510, 1020),
//   makeSweet('Madatha Kaja', 'Flaky layered sweet soaked in sugar syrup', 80, 160, 320),
//   makeSweet('Badhusa', 'Deep-fried doughnut-shaped sweet soaked in syrup', 80, 160, 320),
//   makeSweet('Kobbari Gajjikayalu', 'Coconut-filled crescent-shaped sweet', 90, 180, 360),
//   makeSweet('Kova Puri', 'Soft puri filled with sweetened condensed milk', 80, 160, 320),
//   makeSweet('Kala Jamun', 'Dark, rich milk solid balls in sugar syrup', 115, 230, 460),
//   makeSweet('Gormiti', 'Traditional Andhra sweet with jaggery', 80, 160, 320),
//   makeSweet('Sanna Boondi Laddu', 'Small boondi pearls shaped into sweet laddus', 85, 170, 340),
//   makeSweet('Laavu Boondi Laddu', 'Large boondi laddu with aromatic cardamom', 85, 170, 340),
//   makeSweet('Mysore Pak', 'Classic ghee-rich Mysore Pak with melt-in-mouth texture', 80, 160, 320),
//   makeSweet('Sunnundalu', 'Roasted urad dal laddu with jaggery', 125, 250, 500),
//   makeSweet('Bellam Gavvalu', 'Shell-shaped sweet made with jaggery', 80, 160, 320),
//   makeSweet('Bellam Kommulu', 'Jaggery-based horn-shaped traditional sweet', 80, 160, 320),
//   makeSweet('Nuvvula Laddu', 'Sesame seed laddu with jaggery sweetness', 115, 230, 460),
//   makeSweet('Palkova', 'Thick condensed milk sweet, rich & creamy', 130, 260, 520),
//   makeSweet('Doodh Peda', 'Soft milk peda flavored with cardamom & saffron', 130, 260, 520),
//   makeSweet('Ice Cream Barfi', 'Colorful layered barfi resembling ice cream', 140, 280, 560),
//   makeSweet('Annamayya Laddu', 'Famous temple-style laddu with pure ghee', 140, 280, 560),
//   makeSweet('Motichoor Laddu', 'Fine boondi laddu, soft & melt-in-mouth', 85, 180, 340),
//   makeSweetCustom('Pootharekulu', 'Paper-thin rice starch sheets with sweet filling', [{ label: '5 pcs', price: 120 }, { label: '10 pcs', price: 220 }]),
//   makeSweet('Jangri', 'Spiral-shaped sweet made from urad dal batter', 90, 180, 360),
//   makeSweet('Halwa', 'Soft, aromatic traditional halwa', 90, 180, 360),
//   makeSweet('Plain Ariselu', 'Traditional rice flour sweet with jaggery', 90, 180, 360),
//   makeSweet('Nuvvula Ariselu', 'Sesame-coated jaggery rice sweet', 90, 180, 360),
//   makeSweet('Bellam Chalivedi', 'Jaggery-based crispy sweet snack', 90, 180, 360),
//   makeSweet('Panchadhaara Chalividi', 'Sugar-coated crispy sweet treat', 90, 180, 360),
//   makeSweet('Chilakalu', 'Traditional Andhra sweet squares', 90, 180, 360),
//   makeSweet('Regi Vadiyalu', 'Jujube fruit dried sweet treats', 80, 160, 320),
//   makeSweet('Palli Undalu', 'Peanut balls bound with jaggery', 80, 160, 320),
//   makeSweet('Bellam Boondi Achu', 'Jaggery boondi pressed into molds', 85, 170, 340),
//   makeSweet('Mallarpu Laddu', 'Fragrant puffed rice laddu', 90, 180, 360),
//   makeSweet('Kaju Achu', 'Premium cashew-based molded sweet', 255, 510, 1020),
// ];
















// 1. IMPORT SECTION
import annamayyaLaddu from '@/assets/AnnamayyaLaddu.webp';
import atukulaMixture from '@/assets/AtukulaMixture.webp';
import badhusa from '@/assets/Badhusa.webp';
import bellamBoondiAchu from '@/assets/BellamBoondiAchu.jpg';
import bellamChalivedi from '@/assets/BellamChalivedi.jpg';
import bellamGavvalu from '@/assets/BellamGavvalu.jpg';
import bellamKommulu from '@/assets/BellamKommulu.jpg';
import boondi from '@/assets/boondi.jpg';
import brownKalakand from '@/assets/BrownKalakand.webp';
import chakodi from '@/assets/Chakodi.jpg';
import chilakalu from '@/assets/Chilakalu.jpg';
import cornflakesMixture from '@/assets/cornflakesmixture.jpg';
import dalMoth from '@/assets/DalMoth.jpg';
import doodhPeda from '@/assets/DoodhPeda.jpg';
import doubleColorKalakand from '@/assets/DoubleColorKalakand.jpg';
import dryFruitHalwa from '@/assets/DryFruitHalwa.webp';
import dryFruitsKalakand from '@/assets/DryFruitsKalakand.jpg';
import dryFruitsLaddu from '@/assets/DryFruitsLaddu.jpg';
import gormiti from '@/assets/Gormiti.jpg';
import halwa from '@/assets/Halwa.webp';
import iceCreamBarfi from '@/assets/IceCreamBarfi.jpg';
import jangri from '@/assets/Jangri.jpg';
import janthikalu from '@/assets/janthikalu.jpg';
import kaaramChekkalu from '@/assets/kaaramchekkalu.jpg';
import kaaramPalli from '@/assets/KaaramPalli.jpg';
import kajuAchu from '@/assets/KajuAchu.jpg';
import kajuBiscuits from '@/assets/KajuBiscuits.jpg';
import kajuKatli from '@/assets/KajuKatli.avif';
import kalaJamun from '@/assets/KalaJamun.avif';
import kobbariGajjikayalu from '@/assets/KobbariGajjikayalu.jpeg';
import kovaPuri from '@/assets/KovaPuri.jpg';
import laavuBoondiLaddu from '@/assets/LaavuBoondiLaddu.jpg';
import lavuMurukulu from '@/assets/lavumurukulu.jpg';
import madathaKaja from '@/assets/MadathaKaja.jpg';
import mallarpuLaddu from '@/assets/MallarpuLaddu.jpg';
import masalaPalli from '@/assets/Masalapalli.jpg';
import milkMysorePak from '@/assets/MilkMysorePak.jpg';
import mixture from '@/assets/mixture.jpg';
import motichoorLaddu from '@/assets/MotichoorLaddu.jpg';
import mysorePak from '@/assets/MysorePak.jpg';
import nuvvulaAriselu from '@/assets/NuvvulaAriselu.jpg';
import nuvvulaLaddu from '@/assets/NuvvulaLaddu.jpg';
import pachiMirchiChekkalu from '@/assets/pachimirchichekkalu.jpg';
import palkova from '@/assets/Palkova.jpg';
import palliUndalu from '@/assets/PalliUndalu.jpg';
import panchadhaaraChalividi from '@/assets/PanchadhaaraChalividi.jpg';
import pappuChakodilu from '@/assets/pappuchakodilu.webp';
import plainAriselu from '@/assets/PlainAriselu.jpg';
import pootharekulu from '@/assets/Pootharekulu.webp';
import regiVadiyalu from '@/assets/RegiVadiyalu.jpg';
import ribbonPakodi from '@/assets/RibbonPakodi.jpg';
import sannaBoondiLaddu from '@/assets/SannaBoondiLaddu.jpg';
import sannaKarapusa from '@/assets/sannakarapusa.webp';
import sannaMurukulu from '@/assets/sannamurukulu.jpg';
import sunnundalu from '@/assets/Sunnundalu.jpeg';
import whiteKalakand from '@/assets/WhiteKalakand.jpg';

// 2. TYPES
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

// 3. PRODUCT ARRAY (MANUALLY DEFINED TO PREVENT LOOP ERRORS)
export const products: Product[] = [
  // --- HOT ITEMS ---
  { id: 'mixture', name: 'Mixture', description: 'Classic spicy South Indian mixture', category: 'hot-items', prices: [...hotItemPrice], image: mixture },
  { id: 'boondi', name: 'Boondi', description: 'Crispy gram flour pearls', category: 'hot-items', prices: [...hotItemPrice], image: boondi },
  { id: 'kaaram-chekkalu', name: 'Kaaram Chekkalu (Small)', description: 'Small spicy rice crackers', category: 'hot-items', prices: [...hotItemPrice], image: kaaramChekkalu },
  { id: 'pachi-mirchi-chekkalu', name: 'Pachi Mirchi Chekkalu (Big)', description: 'Large green chilli rice crackers', category: 'hot-items', prices: [...hotItemPrice], image: pachiMirchiChekkalu },
  { id: 'sanna-karapusa', name: 'Sanna Karapusa', description: 'Thin crispy savory snack', category: 'hot-items', prices: [...hotItemPrice], image: sannaKarapusa },
  { id: 'sanna-murukulu', name: 'Sanna Murukulu', description: 'Delicate spiral-shaped treat', category: 'hot-items', prices: [...hotItemPrice], image: sannaMurukulu },
  { id: 'lavu-murukulu', name: 'Lavu Murukulu', description: 'Thick twisted murukku', category: 'hot-items', prices: [...hotItemPrice], image: lavuMurukulu },
  { id: 'pappu-chakodilu', name: 'Pappu Chakodilu', description: 'Dal-based crispy chakodi', category: 'hot-items', prices: [...hotItemPrice], image: pappuChakodilu },
  { id: 'corn-flakes-mixture', name: 'Corn Flakes Mixture', description: 'Crunchy corn flakes mix', category: 'hot-items', prices: [...hotItemPrice], image: cornflakesMixture },
  { id: 'janthikalu', name: 'Janthikalu', description: 'Star-shaped crispy snack', category: 'hot-items', prices: [...hotItemPrice], image: janthikalu },
  { id: 'masala-palli', name: 'Masala Palli', description: 'Spiced roasted peanuts', category: 'hot-items', prices: [...hotItemPrice], image: masalaPalli },
  { id: 'kaaram-palli', name: 'Kaaram Palli', description: 'Hot & spicy peanuts', category: 'hot-items', prices: [...hotItemPrice], image: kaaramPalli },
  { id: 'chakodi', name: 'Chakodi', description: 'Traditional ring-shaped snack', category: 'hot-items', prices: [...hotItemPrice], image: chakodi },
  { id: 'kaju-biscuits', name: 'Kaju Biscuits', description: 'Rich cashew crispy cookies', category: 'hot-items', prices: [...hotItemPrice], image: kajuBiscuits },
  { id: 'ribbon-pakodi', name: 'Ribbon Pakodi', description: 'Ribbon-shaped gram flour snack', category: 'hot-items', prices: [...hotItemPrice], image: ribbonPakodi },
  { id: 'dal-moth', name: 'Dal Moth', description: 'Crunchy spiced lentil mix', category: 'hot-items', prices: [...hotItemPrice], image: dalMoth },
  { id: 'atukula-mixture', name: 'Atukula Mixture', description: 'Flattened rice mixture', category: 'hot-items', prices: [...hotItemPrice], image: atukulaMixture },

  // --- SWEETS ---
  { id: 'white-kalakand', name: 'White Kalakand', description: 'Creamy milk-based fudge', category: 'sweets', image: whiteKalakand, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'brown-kalakand', name: 'Brown Kalakand', description: 'Caramelized milk fudge', category: 'sweets', image: brownKalakand, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'dry-fruits-kalakand', name: 'Dry Fruits Kalakand', description: 'Premium kalakand with dry fruits', category: 'sweets', image: dryFruitsKalakand, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'double-color-kalakand', name: 'Double Color Kalakand', description: 'Two-layered kalakand', category: 'sweets', image: doubleColorKalakand, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'milk-mysore-pak', name: 'Milk Mysore Pak', description: 'Silky smooth milk Mysore Pak', category: 'sweets', image: milkMysorePak, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'dry-fruit-halwa', name: 'Dry Fruit Halwa', description: 'Rich halwa with dry fruits', category: 'sweets', image: dryFruitHalwa, prices: [{ label: '250g', price: 155 }, { label: '500g', price: 310 }, { label: '1Kg', price: 620 }] },
  { id: 'dry-fruits-laddu', name: 'Dry Fruits Laddu', description: 'Nutritious mixed dry fruit laddu', category: 'sweets', image: dryFruitsLaddu, prices: [{ label: '250g', price: 230 }, { label: '500g', price: 460 }, { label: '1Kg', price: 920 }] },
  { id: 'kaju-katli', name: 'Kaju Katli', description: 'Premium thin cashew fudge', category: 'sweets', image: kajuKatli, prices: [{ label: '250g', price: 255 }, { label: '500g', price: 510 }, { label: '1Kg', price: 1020 }] },
  { id: 'madatha-kaja', name: 'Madatha Kaja', description: 'Flaky layered sweet', category: 'sweets', image: madathaKaja, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'badhusa', name: 'Badhusa', description: 'Deep-fried sweet doughnut', category: 'sweets', image: badhusa, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'kobbari-gajjikayalu', name: 'Kobbari Gajjikayalu', description: 'Coconut-filled crescent sweet', category: 'sweets', image: kobbariGajjikayalu, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'kova-puri', name: 'Kova Puri', description: 'Soft puri with sweet milk filling', category: 'sweets', image: kovaPuri, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'kala-jamun', name: 'Kala Jamun', description: 'Dark, rich milk solid balls', category: 'sweets', image: kalaJamun, prices: [{ label: '250g', price: 115 }, { label: '500g', price: 230 }, { label: '1Kg', price: 460 }] },
  { id: 'gormiti', name: 'Gormiti', description: 'Traditional Andhra sweet', category: 'sweets', image: gormiti, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'sanna-boondi-laddu', name: 'Sanna Boondi Laddu', description: 'Small boondi pearls laddu', category: 'sweets', image: sannaBoondiLaddu, prices: [{ label: '250g', price: 85 }, { label: '500g', price: 170 }, { label: '1Kg', price: 340 }] },
  { id: 'laavu-boondi-laddu', name: 'Laavu Boondi Laddu', description: 'Large aromatic boondi laddu', category: 'sweets', image: laavuBoondiLaddu, prices: [{ label: '250g', price: 85 }, { label: '500g', price: 170 }, { label: '1Kg', price: 340 }] },
  { id: 'mysore-pak', name: 'Mysore Pak', description: 'Classic ghee-rich Mysore Pak', category: 'sweets', image: mysorePak, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'sunnundalu', name: 'Sunnundalu', description: 'Roasted urad dal laddu', category: 'sweets', image: sunnundalu, prices: [{ label: '250g', price: 125 }, { label: '500g', price: 250 }, { label: '1Kg', price: 500 }] },
  { id: 'bellam-gavvalu', name: 'Bellam Gavvalu', description: 'Shell-shaped jaggery sweet', category: 'sweets', image: bellamGavvalu, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'bellam-kommulu', name: 'Bellam Kommulu', description: 'Horn-shaped jaggery sweet', category: 'sweets', image: bellamKommulu, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'nuvvula-laddu', name: 'Nuvvula Laddu', description: 'Sesame seed jaggery laddu', category: 'sweets', image: nuvvulaLaddu, prices: [{ label: '250g', price: 115 }, { label: '500g', price: 230 }, { label: '1Kg', price: 460 }] },
  { id: 'palkova', name: 'Palkova', description: 'Thick condensed milk sweet', category: 'sweets', image: palkova, prices: [{ label: '250g', price: 130 }, { label: '500g', price: 260 }, { label: '1Kg', price: 520 }] },
  { id: 'doodh-peda', name: 'Doodh Peda', description: 'Soft cardamom milk peda', category: 'sweets', image: doodhPeda, prices: [{ label: '250g', price: 130 }, { label: '500g', price: 260 }, { label: '1Kg', price: 520 }] },
  { id: 'ice-cream-barfi', name: 'Ice Cream Barfi', description: 'Colorful layered milk barfi', category: 'sweets', image: iceCreamBarfi, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'annamayya-laddu', name: 'Annamayya Laddu', description: 'Temple-style ghee laddu', category: 'sweets', image: annamayyaLaddu, prices: [{ label: '250g', price: 140 }, { label: '500g', price: 280 }, { label: '1Kg', price: 560 }] },
  { id: 'motichoor-laddu', name: 'Motichoor Laddu', description: 'Soft melt-in-mouth laddu', category: 'sweets', image: motichoorLaddu, prices: [{ label: '250g', price: 85 }, { label: '500g', price: 180 }, { label: '1Kg', price: 340 }] },
  { id: 'pootharekulu', name: 'Pootharekulu', description: 'Paper-thin rice starch sweet', category: 'sweets', image: pootharekulu, prices: [{ label: '5 pcs', price: 120 }, { label: '10 pcs', price: 220 }] },
  { id: 'jangri', name: 'Jangri', description: 'Spiral urad dal sweet', category: 'sweets', image: jangri, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'halwa', name: 'Halwa', description: 'Soft aromatic traditional halwa', category: 'sweets', image: halwa, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'plain-ariselu', name: 'Plain Ariselu', description: 'Traditional jaggery rice sweet', category: 'sweets', image: plainAriselu, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'nuvvula-ariselu', name: 'Nuvvula Ariselu', description: 'Sesame-coated rice sweet', category: 'sweets', image: nuvvulaAriselu, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'bellam-chalivedi', name: 'Bellam Chalivedi', description: 'Jaggery-based crispy snack', category: 'sweets', image: bellamChalivedi, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'panchadhaara-chalividi', name: 'Panchadhaara Chalividi', description: 'Sugar-coated sweet treat', category: 'sweets', image: panchadhaaraChalividi, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'chilakalu', name: 'Chilakalu', description: 'Traditional Andhra sweet squares', category: 'sweets', image: chilakalu, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'regi-vadiyalu', name: 'Regi Vadiyalu', description: 'Dried jujube fruit treats', category: 'sweets', image: regiVadiyalu, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'palli-undalu', name: 'Palli Undalu', description: 'Jaggery-bound peanut balls', category: 'sweets', image: palliUndalu, prices: [{ label: '250g', price: 80 }, { label: '500g', price: 160 }, { label: '1Kg', price: 320 }] },
  { id: 'bellam-boondi-achu', name: 'Bellam Boondi Achu', description: 'Molded jaggery boondi', category: 'sweets', image: bellamBoondiAchu, prices: [{ label: '250g', price: 85 }, { label: '500g', price: 170 }, { label: '1Kg', price: 340 }] },
  { id: 'mallarpu-laddu', name: 'Mallarpu Laddu', description: 'Fragrant puffed rice laddu', category: 'sweets', image: mallarpuLaddu, prices: [{ label: '250g', price: 90 }, { label: '500g', price: 180 }, { label: '1Kg', price: 360 }] },
  { id: 'kaju-achu', name: 'Kaju Achu', description: 'Premium cashew molded sweet', category: 'sweets', image: kajuAchu, prices: [{ label: '250g', price: 255 }, { label: '500g', price: 510 }, { label: '1Kg', price: 1020 }] },
];