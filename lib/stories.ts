export type ArchiveQuestion = {
  question: string;
  answer: string;
  image?: {
    src: string;
    alt: string;
    orientation?: "landscape" | "portrait";
  };
};

export type ArchiveEntry = {
  number: string;
  slug: string;
  name: string;
  profession: string;
  location: string;
  date: string;
  title: string;
  description: string;
  introduction: {
    beforeName: string;
    afterName: string;
  };
  cover: string;
  featureImage: {
    src: string;
    alt: string;
  };
  questions: ArchiveQuestion[];
  closingPrompt: {
    label: string;
    question: string;
  };
};

export const archiveEntries: ArchiveEntry[] = [
  {
    number: "001",
    slug: "archive-001",
    name: "Giuseppe Presta",
    profession: "Chef",
    location: "Roma · Italy",
    date: "June 2026",
    title: "In cucina con",
    description: "Tradizione e innovazione, costruire qualcosa che lasci il segno.",
    introduction: {
      beforeName: "Nella cucina di ",
      afterName:
        " ogni gesto parte dalla memoria e cerca una forma nuova. A Roma, tra il ritmo del servizio e la precisione dell'impiattamento, lo chef costruisce un linguaggio fatto di materia, tempo e ospitalità.",
    },
    cover: "/archive-001/cover-giuseppe.jpg",
    featureImage: {
      src: "/archive-001/impiattamento.jpg",
      alt: "Giuseppe Presta mentre impiatta in cucina",
    },
    questions: [
      {
        question: "Come hai iniziato?",
        answer:
          "Ho iniziato nel ristorante di mio padre, lavando piatti e guardando come si muoveva la cucina. Con il tempo ho imparato a conoscere gli ingredienti e ho deciso di provare a creare piatti miei, anche sperimentali.",
        image: {
          src: "/archive-001/piatto-pasta.jpg",
          alt: "Piatto di pasta della cucina di Giuseppe Presta",
          orientation: "landscape",
        },
      },
      {
        question: "Qual è stato il momento più difficile?",
        answer:
          "Quando ho aperto il mio primo locale da solo. Non avevo esperienza in gestione e spesso mi sentivo sopraffatto da tutto: conti, fornitori e personale. Ci sono stati momenti in cui pensavo di mollare, ma la passione mi ha spinto avanti.",
        image: {
          src: "/archive-001/piatto-carne.jpg",
          alt: "Piatto di carne della cucina di Giuseppe Presta",
          orientation: "portrait",
        },
      },
      {
        question: "Quando hai capito che stavi costruendo qualcosa di serio?",
        answer:
          "Quando le persone tornavano ogni settimana non solo per mangiare, ma per vivere un'esperienza. Ho capito che la mia cucina stava creando una comunità, non solo piatti.",
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
          src: "/archive-001/locale-vini.jpg",
          alt: "Il locale di Giuseppe Presta con la parete di bottiglie",
          orientation: "portrait",
        },
      },
      {
        question: "Cosa significa per te lasciare il segno?",
        answer:
          "Significa che le persone ricordano non solo il cibo, ma la sensazione che provano entrando nel mio locale, interagendo con il mio team e vivendo l'esperienza che ho creato.",
      },
    ],
    closingPrompt: {
      label: "Una sola scelta",
      question: "Se qualcuno dovesse assaggiare un solo tuo piatto per capire chi sei, quale sarebbe?",
    },
  },
];

export function getArchiveEntry(slug: string) {
  return archiveEntries.find((entry) => entry.slug === slug);
}
