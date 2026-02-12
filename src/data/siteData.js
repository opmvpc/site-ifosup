export const site = {
  name: 'IFOSUP Wavre',
  shortName: 'IFOSUP',
  baseUrl: 'https://ifosup.wavre.be',
  phoneDisplay: '010 22 20 26',
  phoneHref: 'tel:010222026',
  email: 'info@ifosup.wavre.be',
  address: 'Rue de la Limite 6, 1300 Wavre',
  mapUrl:
    'https://www.google.com/maps/place/Ifosup/@50.7174648,4.6056434,17z/data=!3m1!4b1!4m5!3m4!1s0x47c17d741a720cbd:0x96bf566252976fb4!8m2!3d50.7174614!4d4.6078321',
  socials: [
    { label: 'Facebook', url: 'https://www.facebook.com/ifosup' },
    { label: 'Instagram', url: 'https://www.instagram.com/ifosup.wavre/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ifosup-wavre-171281239/' },
  ],
};

export const campusInfo = {
  openingHours: [
    'Lundi: 08:30 - 21:45',
    'Mardi: 08:30 - 21:45',
    'Mercredi: 08:30 - 21:45',
    'Jeudi: 08:30 - 21:45',
    'Vendredi: 08:30 - 21:45',
  ],
  enrollmentWindow: 'Inscriptions sur place sans rendez-vous (cours non debutes): du lundi au vendredi, de 10h a 12h et de 17h a 19h.',
};

export const sectionMeta = [
  {
    slug: 'secondaire',
    label: 'Enseignement secondaire',
    short: 'Secondaire',
    color: 'var(--ifosup-cyan)',
    hero:
      'Des sections qualifiantes concretes pour securiser ton avenir professionnel ou relancer ton parcours scolaire.',
    outcomes: [
      'Monter en competences metier rapidement',
      'Valider des certificats reconnus en promotion sociale',
      'Construire une passerelle vers le superieur',
    ],
    courses: [
      'Aide menager-social',
      'Technicien en programmation',
      'Assistant veterinaire',
      'Connaissances de gestion',
      'Technicien commercial',
      'Technicien electricien / automaticien',
      'Technicien en comptabilite',
      'Complement de CESS',
      'Technicien en informatique',
    ],
  },
  {
    slug: 'superieur',
    label: 'Enseignement superieur',
    short: 'Superieur',
    color: 'var(--ifosup-yellow)',
    hero:
      'Bachelier ou BES: des cursus professionnalisants construits pour l emploi, accessibles en horaire adapte.',
    outcomes: [
      'Obtenir un diplome a forte valeur sur le marche',
      'Developper des competences operationnelles',
      'Concilier etudes, travail et vie de famille',
    ],
    courses: [
      'BES Webdesigner UI/UX',
      'BES Webdeveloper',
      'Bachelier en Informatique',
      'Bachelier en Comptabilite',
      'Bachelier en Marketing',
    ],
  },
  {
    slug: 'langues',
    label: 'Cours de langues',
    short: 'Langues',
    color: 'var(--ifosup-red)',
    hero:
      'Des cours de langues vivants pour progresser vite a l oral et a l ecrit, avec un cadre bienveillant.',
    outcomes: [
      'Gagner en aisance dans un contexte professionnel',
      'Ouvrir des opportunites internationales',
      'Valoriser son profil sur le CV',
    ],
    courses: [
      'Anglais',
      'Chinois',
      'Japonais',
      'Neerlandais',
      'Allemand',
      'Espagnol',
      'Italien',
      'Russe',
      'Francais langue etrangere',
      'Langue des signes',
      'Neerlandais - Atelier de conversation',
    ],
  },
  {
    slug: 'modules',
    label: 'Les modules divers',
    short: 'Modules',
    color: 'var(--ifosup-indigo)',
    hero:
      'Des modules courts et pratiques pour apprendre vite: numerique, creatif, techniques, IA ou culture.',
    outcomes: [
      'Apprendre une competence utile en quelques semaines',
      'Se reorienter en testant de nouveaux domaines',
      'Booster son autonomie numerique',
    ],
    courses: [
      'Utilisation Ipad/Iphone',
      'Utilisation du MacBook',
      'Bases de l informatique et messagerie electronique',
      'Windows 10/11',
      'Adobe Indesign',
      'Creation de photomontages',
      'Office 2016 - Initiation',
      'Dactylographie',
      'Complements de bureautique',
      'Oenologie : Initiation',
      'Decouverte tablette/smartphone',
      'Maintenance PC',
      'Initiation au dessin assiste et a l impression 3D',
      'Oenologie : Les vins de France',
      'Bases de l informatique - Niveau 2',
      'Montage, programmation et pilotage de drones : pret au decollage ?',
      'La robotique a portee de brique avec Lego',
      'L intelligence artificielle : Chat GPT et ses amis',
      'Electricite domestique et domotique',
      'Bases de l informatique - Niveau 1',
      'Vin du monde (hors Europe)',
      'Vins europeens (etrangers a la France)',
      'Une IA comme alliee dans les etudes',
      'Jongler avec les services en ligne',
      'Initiation robotique et codage (Arduino)',
      'Accords mets et vins',
      'Adobe Illustrator',
    ],
  },
];

export const globalStats = [
  { value: '3', label: 'Bacheliers' },
  { value: '2', label: 'BES' },
  { value: '8+', label: 'Sections secondaires' },
  { value: '40+', label: 'Cours et modules actifs' },
];

export const valuePillars = [
  'Accompagnement humain et personnalise',
  'Approche metier orientee employabilite',
  'Horaires modulaires jour et soir',
  'Ouverture a tous les adultes en reprise d etudes',
  'Culture d evolution continue et outils numeriques',
  'Transparence, dialogue, bienveillance',
];

export const seoDefaults = {
  title: 'IFOSUP Wavre | Ecole de promotion sociale',
  description:
    'IFOSUP Wavre propose des formations secondaires, superieures, langues et modules: un parcours flexible pour adultes en reprise d etudes.',
};