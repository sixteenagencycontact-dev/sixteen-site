export type LabCharacter = {
  name: string;
  role: string;
  campaign: {
    label: string;
    cover: string;
  };
  portraits: Array<{
    src: string;
    alt: string;
  }>;
};

export const labCharacters: LabCharacter[] = [
  {
    name: "Lyla",
    role: "Digital Character",
    campaign: {
      label: "Campaign 001",
      cover: "/lab/lyla/campaign-001.jpg",
    },
    portraits: [
      { src: "/lab/lyla/portrait-01.jpg", alt: "Lyla, digital character portrait" },
      { src: "/lab/lyla/portrait-02.jpg", alt: "Lyla, editorial portrait" },
    ],
  },
  {
    name: "Leon",
    role: "Digital Character",
    campaign: {
      label: "Campaign 001",
      cover: "/lab/leon/campaign-001.jpg",
    },
    portraits: [
      { src: "/lab/leon/portrait-01.jpg", alt: "Leon, digital character portrait" },
      { src: "/lab/leon/portrait-02.jpg", alt: "Leon, editorial portrait" },
    ],
  },
];

export const oluaLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/lab/icons/instagram.svg" },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: "/lab/icons/tiktok.svg" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "/lab/icons/youtube.svg" },
];

export const podcasts = [
  { number: "001", title: "I vini naturali sono davvero così buoni?" },
  { number: "002", title: "15 anni in Santch e Santch. Tutto quello che c'è da sapere." },
  { number: "003", title: "Gambero Rosso e Vinamor. Due realtà nella stessa cucina." },
];

export const experiments = [
  { title: "Campaign 002", status: "Coming soon" },
  { title: "Visual Research", status: "Coming soon" },
  { title: "Film", status: "Coming soon" },
];
