// src/data/testimonials.ts
export type Testimonial = {
  id: string;
  name: string;
  instrument: string;
  duration: string;
  branch?: string;
  quote: string;
  x: number; // 0-100 across the wide field
  y: number; // 0-100 down the field
  /** 1 = quiet distant star, 2 = medium, 3 = prominent */
  magnitude: 1 | 2 | 3;
};

export const testimonials: Testimonial[] = [
  {
    id: "ananya",
    name: "Ananya",
    instrument: "Guitar",
    duration: "2 years",
    branch: "Branch A",
    quote:
      "I came here to learn guitar. Somewhere along the way, I started performing too.",
    x: 13,
    y: 46,
    magnitude: 3,
  },
  {
    id: "rohit",
    name: "Rohit",
    instrument: "Drums",
    duration: "1 year",
    quote:
      "The first few weeks were mostly me trying to get my hands to disagree with each other politely.",
    x: 21,
    y: 24,
    magnitude: 2,
  },
  {
    id: "meera",
    name: "Meera",
    instrument: "Piano",
    duration: "3 years",
    branch: "Branch B",
    quote:
      "I was nervous about playing in front of anyone. The first time was terrifying. Now I look forward to it.",
    x: 27,
    y: 68,
    magnitude: 2,
  },
  {
    id: "kabir",
    name: "Kabir",
    instrument: "Flute",
    duration: "8 months",
    quote:
      "Nobody rushed me. That's basically the whole reason I'm still here.",
    x: 34,
    y: 38,
    magnitude: 1,
  },
  {
    id: "sara",
    name: "Sara",
    instrument: "Keyboard",
    duration: "1.5 years",
    quote:
      "I joined because I wanted to learn keys. I stayed because I found people to play with.",
    x: 42,
    y: 58,
    magnitude: 3,
  },
  {
    id: "dev",
    name: "Dev",
    instrument: "Guitar",
    duration: "6 months",
    quote:
      "My teacher never once made me feel behind. I practise more because of that.",
    x: 47,
    y: 22,
    magnitude: 1,
  },
  {
    id: "ishita",
    name: "Ishita",
    instrument: "Vocals",
    duration: "2 years",
    branch: "Branch C",
    quote:
      "Some weeks I barely practise. I come anyway, and something still moves forward.",
    x: 55,
    y: 45,
    magnitude: 2,
  },
  {
    id: "arjun",
    name: "Arjun",
    instrument: "Drums",
    duration: "3 years",
    quote:
      "I used to count out loud. Now the counting just happens somewhere behind my eyes.",
    x: 63,
    y: 72,
    magnitude: 2,
  },
  {
    id: "nila",
    name: "Nila",
    instrument: "Piano",
    duration: "10 months",
    quote:
      "The room is quiet in a good way. You can hear yourself make mistakes and it's fine.",
    x: 70,
    y: 30,
    magnitude: 1,
  },
  {
    id: "farhan",
    name: "Farhan",
    instrument: "Guitar",
    duration: "4 years",
    branch: "Branch A",
    quote:
      "I brought a song I loved. We spent a month on it. I still play it almost every day.",
    x: 79,
    y: 52,
    magnitude: 3,
  },
  {
    id: "tara",
    name: "Tara",
    instrument: "Flute",
    duration: "1 year",
    quote:
      "I'd never played anything before. Turns out that was never the problem.",
    x: 87,
    y: 26,
    magnitude: 1,
  },
  {
    id: "vikram",
    name: "Vikram",
    instrument: "Keyboard",
    duration: "2 years",
    quote:
      "My daughter learns here too. Sunday mornings sound very different at home now.",
    x: 92,
    y: 64,
    magnitude: 2,
  },
];

/** Constellation lines — pairs of testimonial ids drawn as thin star lines. */
export const constellationLines: [string, string][] = [
  ["rohit", "ananya"],
  ["ananya", "meera"],
  ["ananya", "kabir"],
  ["kabir", "sara"],
  ["meera", "sara"],
  ["sara", "ishita"],
  ["ishita", "dev"],
  ["ishita", "arjun"],
  ["arjun", "farhan"],
  ["farhan", "nila"],
  ["farhan", "vikram"],
  ["nila", "tara"],
];

/**
 * Reserved slots for future student voices.
 * Rendered as faint hollow stars — not clickable. When a real testimonial
 * arrives, move its x/y into `testimonials` and remove the slot here.
 */
export const openSlots: { x: number; y: number }[] = [
  { x: 8, y: 70 },
  { x: 37, y: 80 },
  { x: 50, y: 75 },
  { x: 66, y: 14 },
  { x: 84, y: 68 },
  { x: 97, y: 30 },
];

/**
 * Faint decorative background stars (not students) that give the field
 * depth. Values are percentages of the field.
 */
export const dustStars: { x: number; y: number; r: number; o: number }[] = [
  { x: 5, y: 14, r: 0.9, o: 0.28 },
  { x: 9, y: 72, r: 0.7, o: 0.2 },
  { x: 16, y: 88, r: 1.1, o: 0.24 },
  { x: 18, y: 55, r: 0.6, o: 0.16 },
  { x: 24, y: 12, r: 0.8, o: 0.3 },
  { x: 31, y: 82, r: 0.7, o: 0.18 },
  { x: 33, y: 17, r: 1, o: 0.22 },
  { x: 38, y: 78, r: 0.6, o: 0.16 },
  { x: 40, y: 9, r: 0.9, o: 0.26 },
  { x: 45, y: 86, r: 0.8, o: 0.2 },
  { x: 51, y: 15, r: 0.7, o: 0.24 },
  { x: 53, y: 63, r: 0.6, o: 0.14 },
  { x: 58, y: 88, r: 1, o: 0.2 },
  { x: 60, y: 12, r: 0.8, o: 0.22 },
  { x: 66, y: 48, r: 0.6, o: 0.16 },
  { x: 68, y: 84, r: 0.9, o: 0.2 },
  { x: 74, y: 16, r: 0.7, o: 0.26 },
  { x: 76, y: 74, r: 0.6, o: 0.15 },
  { x: 83, y: 40, r: 0.9, o: 0.2 },
  { x: 85, y: 84, r: 0.7, o: 0.18 },
  { x: 90, y: 12, r: 1, o: 0.24 },
  { x: 95, y: 40, r: 0.6, o: 0.16 },
  { x: 97, y: 78, r: 0.8, o: 0.2 },
];
