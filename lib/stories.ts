export type ArchiveQuestion = {
  question: string;
  answer: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type ArchiveEntry = {
  number: string;
  slug: string;
  name: string;
  profession: string;
  description: string;
  cover: string;
  questions: ArchiveQuestion[];
};

export const archiveEntries: ArchiveEntry[] = [
  {
    number: "001",
    slug: "archive-001",
    name: "Giuseppe Presta",
    profession: "Chef",
    description: "Tradizione e innovazione, costruire qualcosa che lasci il segno.",
    cover: "/stories/archive-001/chef.jpg",
    questions: [
      {
        question: "Come hai iniziato?",
        answer:
          "Ho iniziato nel ristorante di mio padre, lavando piatti e guardando come si muoveva la cucina. Con il tempo ho imparato a conoscere gli ingredienti e ho deciso di provare a creare piatti miei, anche sperimentali.",
        image: {
          src: "/stories/archive-001/dish-01.jpg",
          alt: "Piatto della cucina di Giuseppe Presta",
        },
      },
      {
        question: "Qual è stato il momento più difficile?",
        answer:
          "Quando ho aperto il mio primo locale da solo. Non avevo esperienza in gestione e spesso mi sentivo sopraffatto da tutto: conti, fornitori e personale. Ci sono stati momenti in cui pensavo di mollare, ma la passione mi ha spinto avanti.",
      },
      {
        question: "Quando hai capito che stavi costruendo qualcosa di serio?",
        answer:
          "Quando le persone tornavano ogni settimana non solo per mangiare, ma per vivere un'esperienza. Ho capito che la mia cucina stava creando una comunità, non solo piatti.",
        image: {
          src: "/stories/archive-001/dish-02.jpg",
          alt: "Secondo piatto della cucina di Giuseppe Presta",
        },
      },
      {
        question: "Cosa ti differenzia dagli altri?",
        answer:
          "Mi concentro sull'equilibrio tra tradizione e innovazione. Non voglio stupire a tutti i costi, voglio che chi assaggia senta una storia in ogni piatto.",
      },
      {
        question: "Qual è l'errore più grande che vedi nel tuo settore?",
        answer:
          "Molti chef puntano solo sull'apparenza o sulle mode del momento. La sostanza viene spesso trascurata. La cucina è cultura, non solo estetica.",
        image: {
          src: "/stories/archive-001/dish-03.jpg",
          alt: "Terzo piatto della cucina di Giuseppe Presta",
        },
      },
      {
        question: "Cosa significa per te lasciare il segno?",
        answer:
          "Significa che le persone ricordano non solo il cibo, ma la sensazione che provano entrando nel mio locale, interagendo con il mio team e vivendo l'esperienza che ho creato.",
      },
    ],
  },
];

export const archive001 = archiveEntries[0];
