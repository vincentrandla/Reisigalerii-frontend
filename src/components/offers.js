export const countries = [
  { name: "Türgi", slug: "turgi", seed: "turkey1", from: 384 },
  { name: "Kreeka", slug: "kreeka", seed: "greece1", from: 301 },
  { name: "Hispaania", slug: "hispaania", seed: "spain1", from: 512 },
  { name: "Egiptus", slug: "egiptus", seed: "egypt1", from: 495 },
  { name: "Portugal", slug: "portugal", seed: "portugal1", from: 1008 },
  { name: "Horvaatia", slug: "horvaatia", seed: "croatia1", from: 745 },
  { name: "Tuneesia", slug: "tuneesia", seed: "tunisia1", from: 559 },
  { name: "Maroko", slug: "maroko", seed: "morocco1", from: 478 },
  { name: "Tansaania", slug: "tansaania", seed: "tanzania1", from: 1589 },
  { name: "Küpros", slug: "kupros", seed: "cyprus1", from: 662 },
];

export const offers = [
  { countrySlug: "turgi", destination: "Antalya", hotel: "Rixos Downtown", stars: 5, dates: "16.09–23.09", nights: 7, price: 384, board: "All-inclusive" },
  { countrySlug: "turgi", destination: "Bodrum", hotel: "Kefaluka Resort", stars: 5, dates: "05.10–12.10", nights: 7, price: 728, board: "All-inclusive" },
  { countrySlug: "kreeka", destination: "Rhodos", hotel: "Atrium Palace Resort", stars: 5, dates: "18.09–25.09", nights: 7, price: 301, board: "All-inclusive" },
  { countrySlug: "kreeka", destination: "Kreeta", hotel: "Aquila Rithymna Beach", stars: 3, dates: "22.09–29.09", nights: 7, price: 349, board: "Poolpansion" },
  { countrySlug: "hispaania", destination: "Tenerife", hotel: "Bahia Principe Sunlight", stars: 4, dates: "04.10–11.10", nights: 7, price: 575, board: "Poolpansion" },
  { countrySlug: "hispaania", destination: "Mallorca", hotel: "Iberostar Playa de Muro", stars: 4, dates: "08.09–15.09", nights: 7, price: 512, board: "All-inclusive" },
  { countrySlug: "egiptus", destination: "Hurghada", hotel: "Steigenberger Aqua Magic", stars: 5, dates: "27.09–04.10", nights: 7, price: 495, board: "All-inclusive" },
  { countrySlug: "portugal", destination: "Porto", hotel: "Hotel Vera Cruz", stars: 4, dates: "16.11–23.11", nights: 7, price: 1008, board: "Hommikusöök" },
  { countrySlug: "horvaatia", destination: "Split", hotel: "Radisson Blu Resort", stars: 4, dates: "11.10–18.10", nights: 7, price: 745, board: "Hommikusöök" },
  { countrySlug: "tuneesia", destination: "Hammamet", hotel: "Vincci Lella Baya", stars: 4, dates: "18.09–25.09", nights: 7, price: 559, board: "All-inclusive" },
];

export const durations = ["3–5 ööd", "6–8 ööd", "9–14 ööd", "15+ ööd"];

export const durationRanges = {
  "3–5 ööd": [3, 5],
  "6–8 ööd": [6, 8],
  "9–14 ööd": [9, 14],
  "15+ ööd": [15, 999],
};
