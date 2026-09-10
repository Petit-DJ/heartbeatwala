// src/data/site.ts

export const site = {
  name: "HeartBeat Musicals & Classes",
  // shortName: "",
  tagline: "Where music becomes a journey.",
  // PLACEHOLDER contact details
  phone: "+91 80061 28530",
  email: "hello@example.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/heartbeatwala/" },
    { label: "YouTube", href: "https://www.youtube.com/@souravkashyap4555" },
    { label: "Linktree", href: "https://linktr.ee/heart_beat_wala" },
  ],
};

export const navLinks = [
  { label: "Classes", to: "/classes" as const },
  { label: "Journey", to: "/" as const, hash: "journey" },
  { label: "Resources", to: "/resources" as const },
  { label: "About", to: "/about" as const },
];

export const stats = [
  { value: "10+", label: "Years of Music" },
  { value: "500+", label: "Students" },
  { value: "20+", label: "Performances" },
];

export const instrumentsLine =
  "Guitar · Piano · Keyboard · Drums · Flute · More";

export type Course = {
  id: string;
  name: string;
  blurb: string;
  levels: string[];
};

export const popularCourses: Course[] = [
  {
    id: "guitar",
    name: "Guitar",
    blurb:
      "Acoustic and electric. Chords, rhythm, fingerstyle and playing along with songs you love.",
    levels: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "piano",
    name: "Piano / Keyboard",
    blurb:
      "Reading, harmony and touch from first scales to accompanying a full song.",
    levels: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "drums",
    name: "Drums",
    blurb:
      "Groove, timing and coordination, learnt on the kit from the very first session.",
    levels: ["Beginner", "Intermediate"],
  },
  {
    id: "flute",
    name: "Flute",
    blurb: "Breath, tone and melody, taught patiently and at your own pace.",
    levels: ["Beginner", "Intermediate"],
  },
];

export const courseLevels = [
  {
    name: "Beginner",
    text: "For anyone picking up an instrument for the first time. No background needed.",
  },
  {
    name: "Intermediate",
    text: "For learners who can already play a little and want structure, technique and repertoire.",
  },
  {
    name: "Advanced",
    text: "For experienced players refining technique, theory and performance.",
  },
];

export const levelsNote =
  "Availability of levels can vary by instrument and by branch. Contact us to confirm what's currently running for the instrument you'd like to learn.";

export type Branch = {
  id: string;
  name: string;
  address: string;
  description: string;
  mapUrl: string;
};

export const branches: Branch[] = [
  {
    id: "karkunj",
    name: "KarKunj Chaurah",
    address: "KarKunj Chaurah",
    description: "Our main teaching space, with rooms for guitar, keys and drums.",
    mapUrl: "https://maps.app.goo.gl/gFxBWnkBg2d9oLZc9", // PLACEHOLDER
  },
  { // kamla nagar not khandari
    id: "Kamla Nagar",
    name: "Kamla Nagar",
    address: "Kamla Nagar",
    description: "A quieter branch, well suited to one-to-one and beginner classes.",
    mapUrl: "https://maps.app.goo.gl/tND3XhiHxc8q6dpo7", // PLACEHOLDER
  },
  {
    id: "shastripuram",
    name: "Shastripuram",
    address: "Shastripuram",
    description: "Neighbourhood classes close to home, with regular group sessions.",
    mapUrl: "https://maps.app.goo.gl/VQbz9mf8f3AVT4vUA",
  },
];

/**
 * Schedule model: instrument -> class types -> day/time slots.
 * Add instruments, class types, days or slots freely; the UI adapts.
 */
export type ScheduleSlot = { days: string[]; times: string[] };
export type ClassType = { type: string; slots: ScheduleSlot[] };
export type InstrumentSchedule = {
  instrument: string;
  note?: string;
  classTypes: ClassType[];
};

const guitarClassTypes: ClassType[] = [
  {
    type: "Normal Classes",
    slots: [
      {
        days: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        times: ["10:00 AM – 12:00 PM", "3:00 PM – 9:00 PM"],
      },
    ],
  },
  {
    type: "Regular Classes",
    slots: [
      {
        days: ["Monday", "Wednesday", "Friday"],
        times: ["10:00 AM – 12:00 PM"],
      },
      {
        days: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        times: ["10:00 AM – 12:00 PM", "3:00 PM – 9:00 PM"],
      },
    ],
  },
];

export const schedules: InstrumentSchedule[] = [
  { instrument: "Guitar", classTypes: guitarClassTypes },
  {
    instrument: "Flute",
    note: "Flute follows the same schedule as Guitar classes.",
    classTypes: guitarClassTypes,
  },
  {
    instrument: "Keyboard",
    classTypes: [
      {
        type: "Classes",
        slots: [
          { days: ["Monday", "Wednesday", "Friday"], times: ["4:00 PM – 8:00 PM"] },
        ],
      },
    ],
  },
  {
    instrument: "Drums",
    classTypes: [
      {
        type: "Classes",
        slots: [
          { days: ["Monday", "Wednesday", "Friday"], times: ["4:00 PM – 8:00 PM"] },
        ],
      },
    ],
  },
  {
    instrument: "Vocals",
    classTypes: [
      {
        type: "Classes",
        slots: [
          { days: ["Tuesday", "Thursday", "Saturday"], times: ["4:00 PM – 8:00 PM"] },
        ],
      },
    ],
  },
];

export const scheduleNote =
  "Timings can vary by branch and by course. Please confirm with us before your first class.";

// fees
export const fees = [
  { plan: "Monthly Group Class", amount: "₹ 1,500 / month", note: "Placeholder value" },
  // { plan: "Monthly — One to One", amount: "₹ 1,500 / month", note: "Placeholder value" },
  { plan: "Registration (one time)", amount: "₹ 1,500", note: "Placeholder value" },
];

export const feesNote =
  "For more details, just give us a ring";

export const resourceGroups = [
  {
    title: "Guitar Tabs",
    text: "Tabs for songs we teach and play together at HeartBeat Musicals & Classes.",
    items: ["Beginner tabs — coming soon", "Song tabs — coming soon"],
  },
  {
    title: "Chords",
    text: "Chord shapes, chord families and the progressions behind familiar songs.",
    items: ["Open chords — coming soon", "Barre chords — coming soon"],
  },
  {
    title: "Practice Material",
    text: "Warm-ups, exercises and routines to keep your practice steady between classes.",
    items: ["Daily warm-ups — coming soon", "Rhythm exercises — coming soon"],
  },
  {
    title: "Songs",
    text: "A growing shelf of songs students learn across instruments.",
    items: ["Song list — coming soon"],
  },
];

export const tools = [
  {
    name: "Chord Transposer",
    text: "Move any song into a key that suits your voice or instrument.",
    status: "Coming Soon",
  },
  {
    name: "Chord Progression Recommender",
    text: "Find progressions that fit the mood you're writing in.",
    status: "Coming Soon",
  },
];

export const faqs = [
  {
    q: "Do I need my own instrument to start?",
    a: "Not for your initial classes instruments are available at the branch. As you continue, having your own instrument to practise on at home makes a big difference.",
  },
  {
    q: "I have never played anything before. Can I join?",
    a: "Yes. Most of our students start as complete beginners, and classes are taught at the pace of the learner.",
  },
  {
    q: "How often are classes held?",
    a: "It depends on the instrument and branch. The class timings section on the Classes page lists the current days and time windows.",
  },
  {
    q: "Can adults join, or is the class only for children?",
    a: "HeartBeat welcomes learners of all ages, from young beginners to adults returning to music.",
  },
  {
    q: "What is the Sunday Masterclass?",
    a: "A shared learning session held every Sunday, open to our students and sometimes to visitors from outside as well.",
  },
];
