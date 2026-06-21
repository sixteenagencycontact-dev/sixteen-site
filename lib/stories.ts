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
  issueDate: string;
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
  closingQuestion: string;
};

const sharedQuestions = {
  beginning: "Come hai iniziato?",
  difficult: "Qual è stato il momento più difficile?",
  serious: "Quando hai capito che stavi costruendo qualcosa di serio?",
  difference: "Cosa ti differenzia dagli altri?",
  mistake: "Qual è l'errore più grande che vedi nel tuo settore?",
  mark: "Cosa significa per te lasciare il segno?",
};

export const archiveEntries: ArchiveEntry[] = [
  {
    number: "001",
    slug: "archive-001",
    name: "Giuseppe Presta",
    profession: "Chef",
    location: "Roma · Italy",
    date: "20 June 2026",
    issueDate: "June 2026",
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
        question: sharedQuestions.beginning,
        answer:
          "Ho iniziato nel ristorante di mio padre, lavando piatti e guardando come si muoveva la cucina. Con il tempo ho imparato a conoscere gli ingredienti e ho deciso di provare a creare piatti miei, anche sperimentali.",
        image: {
          src: "/archive-001/piatto-pasta.jpg",
          alt: "Piatto di pasta della cucina di Giuseppe Presta",
          orientation: "landscape",
        },
      },
      {
        question: sharedQuestions.difficult,
        answer:
          "Quando ho aperto il mio primo locale da solo. Non avevo esperienza in gestione e spesso mi sentivo sopraffatto da tutto: conti, fornitori e personale. Ci sono stati momenti in cui pensavo di mollare, ma la passione mi ha spinto avanti.",
        image: {
          src: "/archive-001/piatto-carne.jpg",
          alt: "Piatto di carne della cucina di Giuseppe Presta",
          orientation: "portrait",
        },
      },
      {
        question: sharedQuestions.serious,
        answer:
          "Quando le persone tornavano ogni settimana non solo per mangiare, ma per vivere un'esperienza. Ho capito che la mia cucina stava creando una comunità, non solo piatti.",
      },
      {
        question: sharedQuestions.difference,
        answer:
          "Mi concentro sull'equilibrio tra tradizione e innovazione. Non voglio stupire a tutti i costi, voglio che chi assaggia senta una storia in ogni piatto.",
      },
      {
        question: sharedQuestions.mistake,
        answer:
          "Molti chef puntano solo sull'apparenza o sulle mode del momento. La sostanza viene spesso trascurata. La cucina è cultura, non solo estetica.",
        image: {
          src: "/archive-001/locale-vini.jpg",
          alt: "Il locale di Giuseppe Presta con la parete di bottiglie",
          orientation: "portrait",
        },
      },
      {
        question: sharedQuestions.mark,
        answer:
          "Significa che le persone ricordano non solo il cibo, ma la sensazione che provano entrando nel mio locale, interagendo con il mio team e vivendo l'esperienza che ho creato.",
      },
    ],
    closingQuestion: "Se qualcuno dovesse assaggiare un solo tuo piatto per capire chi sei, quale sarebbe?",
  },
  {
    number: "002",
    slug: "archive-002",
    name: "Edoardo Di Lernia",
    profession: "Bartender",
    location: "Roma · Italy",
    date: "04 July 2026",
    issueDate: "July 2026",
    title: "Dietro il bancone con",
    description: "Tecnica, ospitalità e attenzione ai dettagli.",
    introduction: {
      beforeName: "Dietro il bancone, ",
      afterName:
        " lavora per sottrazione. Ogni drink nasce dall'ascolto, dalla precisione e dall'idea che l'ospitalità inizi molto prima del primo sorso.",
    },
    cover: "/archive-002/cover.jpg",
    featureImage: {
      src: "/archive-002/hands.jpg",
      alt: "Mani di un bartender durante la preparazione di un cocktail",
    },
    questions: [
      {
        question: sharedQuestions.beginning,
        answer:
          "Ho iniziato come barback, occupandomi del ghiaccio, dei bicchieri e di tutto quello che nessuno vede. Guardavo i bartender lavorare e provavo a capire non solo le ricette, ma il modo in cui accoglievano le persone. Da lì ho cominciato a studiare tecnica e prodotti.",
        image: {
          src: "/archive-002/cocktail.jpg",
          alt: "Una selezione di cocktail al bancone",
          orientation: "landscape",
        },
      },
      {
        question: sharedQuestions.difficult,
        answer:
          "Imparare a mantenere la qualità nei momenti di maggiore pressione. Quando il locale è pieno, ogni gesto deve essere rapido ma preciso. Ho dovuto costruire un metodo che mi permettesse di non perdere l'attenzione per la persona davanti a me.",
        image: {
          src: "/archive-002/bottles.jpg",
          alt: "Bottiglie e strumenti dietro il bancone",
          orientation: "landscape",
        },
      },
      {
        question: sharedQuestions.serious,
        answer:
          "Quando alcuni clienti hanno iniziato a tornare chiedendomi di scegliere per loro. Quella fiducia mi ha fatto capire che non stavo più soltanto preparando drink: stavo costruendo un rapporto e una riconoscibilità.",
      },
      {
        question: sharedQuestions.difference,
        answer:
          "Parto sempre dalla conversazione. La tecnica serve, ma deve restare al servizio dell'esperienza. Cerco equilibrio, pulizia e un dettaglio capace di rendere il drink personale senza trasformarlo in un esercizio di stile.",
      },
      {
        question: sharedQuestions.mistake,
        answer:
          "Confondere la complessità con la qualità. Un drink può avere molti ingredienti ed essere dimenticabile. Spesso sono la misura, la temperatura e il servizio a fare davvero la differenza.",
        image: {
          src: "/archive-002/detail.jpg",
          alt: "Dettaglio di un cocktail con frutta e ghiaccio",
          orientation: "landscape",
        },
      },
      {
        question: sharedQuestions.mark,
        answer:
          "Vuol dire far sentire qualcuno riconosciuto. Il drink finisce, ma può restare il ricordo di una serata in cui ogni elemento sembrava essere al posto giusto.",
      },
    ],
    closingQuestion: "Se dovessi far bere un ultimo drink a una persona, quale sarebbe?",
  },
  {
    number: "003",
    slug: "archive-003",
    name: "Gabriele Malori",
    profession: "Shoe Designer",
    location: "Roma · Italy",
    date: "18 August 2026",
    issueDate: "August 2026",
    title: "Tra forme e materiali con",
    description: "Ricerca, materiali e cultura della scarpa.",
    introduction: {
      beforeName: "Nel laboratorio di ",
      afterName:
        " il progetto comincia dalle mani. Forma, proporzione e materia si incontrano in oggetti pensati per muoversi, durare e raccontare il tempo che li ha prodotti.",
    },
    cover: "/archive-003/cover.jpg",
    featureImage: {
      src: "/archive-003/worktable.jpg",
      alt: "Lavorazione manuale di una scarpa sul banco",
    },
    questions: [
      {
        question: sharedQuestions.beginning,
        answer:
          "Ho iniziato disegnando scarpe sui quaderni e smontando modelli vecchi per capire come fossero costruiti. L'incontro con un artigiano mi ha fatto scoprire forme, pellami e lavorazioni. Da quel momento il disegno è diventato un mestiere concreto.",
        image: {
          src: "/archive-003/materials.jpg",
          alt: "Materiali naturali e lavorazione artigianale di una calzatura",
          orientation: "portrait",
        },
      },
      {
        question: sharedQuestions.difficult,
        answer:
          "Accettare che un prototipo tecnicamente corretto potesse comunque non avere carattere. Ho dovuto imparare a ricominciare senza difendere un'idea solo perché ci avevo lavorato a lungo.",
        image: {
          src: "/archive-003/detail.jpg",
          alt: "Dettaglio di una scarpa contemporanea",
          orientation: "landscape",
        },
      },
      {
        question: sharedQuestions.serious,
        answer:
          "Quando artigiani e fornitori hanno iniziato a coinvolgermi nelle decisioni, non soltanto a eseguire i miei disegni. Il progetto era diventato un dialogo tra competenze e aveva trovato un metodo riconoscibile.",
      },
      {
        question: sharedQuestions.difference,
        answer:
          "Cerco una forma che nasca dal materiale e dal modo in cui il piede si muove. Non aggiungo dettagli per decorare: ogni linea deve avere una funzione oppure raccontare la costruzione della scarpa.",
      },
      {
        question: sharedQuestions.mistake,
        answer:
          "Inseguire una tendenza prima di conoscere davvero materiali e proporzioni. Una scarpa può essere immediatamente riconoscibile e invecchiare in pochi mesi. Il progetto dovrebbe avere un tempo più lungo.",
        image: {
          src: "/archive-003/lab.jpg",
          alt: "Interno di un laboratorio dedicato alle calzature",
          orientation: "portrait",
        },
      },
      {
        question: sharedQuestions.mark,
        answer:
          "Creare un oggetto che migliori con l'uso e che una persona scelga ancora dopo anni. La traccia più interessante è quella lasciata dal tempo sulla materia.",
      },
    ],
    closingQuestion: "Se dovessi scegliere una sola scarpa per raccontare chi sei, quale sarebbe?",
  },
];

export function getArchiveEntry(slug: string) {
  return archiveEntries.find((entry) => entry.slug === slug);
}
