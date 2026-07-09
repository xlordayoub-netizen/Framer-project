/* ORION Automobiles — données véhicules. Source unique de vérité.
   Les chemins d'images pointent vers assets/img/ ; tant que les fichiers
   n'existent pas, main.js bascule sur le placeholder ci-dessous. */

const IMG_PLACEHOLDER = "https://placehold.co/1600x1200/1A1A1D/8A8F98?text=ORION";

const CARS = [
  {
    id: "audi-rs6-2022",
    name: "RS6 Avant",
    brand: "Audi",
    year: 2022,
    price: 1150000,
    km: 34000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "600 ch",
    status: "disponible",
    images: [
      "assets/img/audi-rs6-2022-01.webp",
      "assets/img/audi-rs6-2022-02.webp",
      "assets/img/audi-rs6-2022-03.webp",
      "assets/img/audi-rs6-2022-04.webp"
    ],
    specs: { couleur: "Gris Nardo", sellerie: "Cuir Valcona noir", origine: "Importée neuve" },
    description:
      "Break hautes performances au V8 biturbo de 600 ch, entretenu exclusivement en concession. Pack Dynamique Plus, toit panoramique et freins céramique. Historique complet disponible, expertise mécanique réalisée avant mise en vente."
  },
  {
    id: "bmw-m4-2021",
    name: "M4 Competition",
    brand: "BMW",
    year: 2021,
    price: 980000,
    km: 41000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "510 ch",
    status: "disponible",
    images: [
      "assets/img/bmw-m4-2021-01.webp",
      "assets/img/bmw-m4-2021-02.webp",
      "assets/img/bmw-m4-2021-03.webp",
      "assets/img/bmw-m4-2021-04.webp"
    ],
    specs: { couleur: "Vert Isle of Man", sellerie: "Cuir Merino", origine: "Première main" },
    description:
      "Coupé M4 Competition en configuration soignée, sièges baquets M Carbon et échappement M Sport. Suivi d'entretien BMW complet, pneus récents. Un essai sur route est proposé sur rendez-vous."
  },
  {
    id: "mercedes-s500-2021",
    name: "Classe S 500 4MATIC",
    brand: "Mercedes-Benz",
    year: 2021,
    price: 1250000,
    km: 52000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "435 ch",
    status: "disponible",
    images: [
      "assets/img/mercedes-s500-2021-01.webp",
      "assets/img/mercedes-s500-2021-02.webp",
      "assets/img/mercedes-s500-2021-03.webp",
      "assets/img/mercedes-s500-2021-04.webp"
    ],
    specs: { couleur: "Noir Obsidienne", sellerie: "Cuir Nappa beige", origine: "Première main" },
    description:
      "Limousine de représentation dans sa version six cylindres hybride légère. Sièges arrière Executive, quatre roues directrices, affichage tête haute. Véhicule non fumeur, carnet numérique Mercedes-Benz à jour."
  },
  {
    id: "porsche-911-2020",
    name: "911 Carrera 4S",
    brand: "Porsche",
    year: 2020,
    price: 1650000,
    km: 28000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "450 ch",
    status: "disponible",
    images: [
      "assets/img/porsche-911-2020-01.webp",
      "assets/img/porsche-911-2020-02.webp",
      "assets/img/porsche-911-2020-03.webp",
      "assets/img/porsche-911-2020-04.webp"
    ],
    specs: { couleur: "Bleu Gentiane", sellerie: "Cuir noir surpiqué craie", origine: "Importée neuve" },
    description:
      "Type 992 en transmission intégrale, boîte PDK et pack Sport Chrono. Faible kilométrage certifié, révision majeure effectuée. Le dossier d'expertise détaillé est consultable au showroom."
  },
  {
    id: "aston-vantage-2019",
    name: "Vantage V8",
    brand: "Aston Martin",
    year: 2019,
    price: 1900000,
    km: 19000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "510 ch",
    status: "reserve",
    images: [
      "assets/img/aston-vantage-2019-01.webp",
      "assets/img/aston-vantage-2019-02.webp",
      "assets/img/aston-vantage-2019-03.webp",
      "assets/img/aston-vantage-2019-04.webp"
    ],
    specs: { couleur: "Blanc Stratus", sellerie: "Cuir Obsidian", origine: "Première main" },
    description:
      "Vantage au V8 biturbo d'origine AMG, configuration sobre et intérieur préservé. Entretien exclusivement en réseau agréé. Véhicule actuellement sous option, contactez-nous pour être informé en cas de désistement."
  },
  {
    id: "audi-q8-2021",
    name: "Q8 55 TFSI",
    brand: "Audi",
    year: 2021,
    price: 890000,
    km: 47000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "340 ch",
    status: "disponible",
    images: [
      "assets/img/audi-q8-2021-01.webp",
      "assets/img/audi-q8-2021-02.webp",
      "assets/img/audi-q8-2021-03.webp",
      "assets/img/audi-q8-2021-04.webp"
    ],
    specs: { couleur: "Noir Mythic", sellerie: "Cuir Valcona brun", origine: "Première main" },
    description:
      "SUV coupé en finition S line, suspension pneumatique et jantes 22 pouces. Quatre pneus neufs, distribution vérifiée. Reprise de votre véhicule actuel possible après expertise."
  },
  {
    id: "bmw-x5-2020",
    name: "X5 xDrive40d",
    brand: "BMW",
    year: 2020,
    price: 760000,
    km: 68000,
    fuel: "Diesel",
    transmission: "Automatique",
    power: "340 ch",
    status: "disponible",
    images: [
      "assets/img/bmw-x5-2020-01.webp",
      "assets/img/bmw-x5-2020-02.webp",
      "assets/img/bmw-x5-2020-03.webp",
      "assets/img/bmw-x5-2020-04.webp"
    ],
    specs: { couleur: "Blanc Minéral", sellerie: "Cuir Vernasca cognac", origine: "Première main" },
    description:
      "X5 diesel six cylindres en pack M Sport, attelage escamotable et toit ouvrant. Kilométrage autoroutier, factures d'entretien disponibles. Garantie mécanique de six mois incluse."
  },
  {
    id: "mercedes-gle-2021",
    name: "GLE 400d Coupé",
    brand: "Mercedes-Benz",
    year: 2021,
    price: 950000,
    km: 55000,
    fuel: "Diesel",
    transmission: "Automatique",
    power: "330 ch",
    status: "disponible",
    images: [
      "assets/img/mercedes-gle-2021-01.webp",
      "assets/img/mercedes-gle-2021-02.webp",
      "assets/img/mercedes-gle-2021-03.webp",
      "assets/img/mercedes-gle-2021-04.webp"
    ],
    specs: { couleur: "Gris Sélénite", sellerie: "Cuir noir", origine: "Importée neuve" },
    description:
      "SUV coupé diesel en pack AMG Line, suspension pneumatique Airmatic et attelage d'origine. Contrôle technique récent, aucun frais à prévoir. Livraison possible partout au Maroc."
  },
  {
    id: "porsche-macan-2020",
    name: "Macan GTS",
    brand: "Porsche",
    year: 2020,
    price: 820000,
    km: 44000,
    fuel: "Essence",
    transmission: "Automatique",
    power: "380 ch",
    status: "vendu",
    images: [
      "assets/img/porsche-macan-2020-01.webp",
      "assets/img/porsche-macan-2020-02.webp",
      "assets/img/porsche-macan-2020-03.webp",
      "assets/img/porsche-macan-2020-04.webp"
    ],
    specs: { couleur: "Rouge Carmin", sellerie: "Alcantara et cuir", origine: "Première main" },
    description:
      "Macan GTS au V6 biturbo, châssis sport et échappement à clapets. Véhicule vendu récemment, conservé sur la page à titre de référence de notre sélection."
  },
  {
    id: "bmw-530d-2019",
    name: "Série 5 530d",
    brand: "BMW",
    year: 2019,
    price: 480000,
    km: 89000,
    fuel: "Diesel",
    transmission: "Automatique",
    power: "265 ch",
    status: "disponible",
    images: [
      "assets/img/bmw-530d-2019-01.webp",
      "assets/img/bmw-530d-2019-02.webp",
      "assets/img/bmw-530d-2019-03.webp",
      "assets/img/bmw-530d-2019-04.webp"
    ],
    specs: { couleur: "Gris Sophisto", sellerie: "Cuir Dakota noir", origine: "Première main" },
    description:
      "Berline routière en finition Luxury Line, affichage tête haute et sièges confort ventilés. Entretien BMW complet, chaîne de distribution vérifiée. Négociable dans une mesure raisonnable."
  },
  {
    id: "mercedes-c220d-2020",
    name: "Classe C 220d",
    brand: "Mercedes-Benz",
    year: 2020,
    price: 395000,
    km: 76000,
    fuel: "Diesel",
    transmission: "Automatique",
    power: "194 ch",
    status: "vendu",
    images: [
      "assets/img/mercedes-c220d-2020-01.webp",
      "assets/img/mercedes-c220d-2020-02.webp",
      "assets/img/mercedes-c220d-2020-03.webp",
      "assets/img/mercedes-c220d-2020-04.webp"
    ],
    specs: { couleur: "Argent Iridium", sellerie: "Similicuir Artico", origine: "Première main" },
    description:
      "Berline compacte en pack AMG Line, caméra de recul et accès sans clé. Véhicule vendu, affiché comme référence des modèles régulièrement disponibles au showroom."
  },
  {
    id: "audi-a5-2020",
    name: "A5 Sportback 40 TDI",
    brand: "Audi",
    year: 2020,
    price: 445000,
    km: 71000,
    fuel: "Diesel",
    transmission: "Automatique",
    power: "204 ch",
    status: "disponible",
    images: [
      "assets/img/audi-a5-2020-01.webp",
      "assets/img/audi-a5-2020-02.webp",
      "assets/img/audi-a5-2020-03.webp",
      "assets/img/audi-a5-2020-04.webp"
    ],
    specs: { couleur: "Bleu Navarre", sellerie: "Cuir et tissu S line", origine: "Première main" },
    description:
      "Sportback diesel en finition S line, cockpit virtuel et feux Matrix LED. Consommation contenue, idéale pour un usage quotidien exigeant. Reprise possible de votre véhicule actuel."
  }
];
