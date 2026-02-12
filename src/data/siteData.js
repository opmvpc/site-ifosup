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
  enrollmentWindow:
    'Inscriptions sur place sans rendez-vous (cours non débutés): du lundi au vendredi, de 10h à 12h et de 17h à 19h.',
};

export const sectionMeta = [
  {
    slug: 'secondaire',
    label: 'Enseignement secondaire',
    short: 'Secondaire',
    color: 'var(--ifosup-cyan)',
    hero:
      'Des sections qualifiantes concrètes pour sécuriser ton avenir professionnel ou relancer ton parcours scolaire.',
    outcomes: [
      'Monter en compétences métier rapidement',
      'Valider des certificats reconnus en promotion sociale',
      'Construire une passerelle vers le supérieur',
    ],
    courses: [
      'Aide ménager-social',
      'Technicien en programmation',
      'Assistant vétérinaire',
      'Connaissances de gestion',
      'Technicien commercial',
      'Technicien électricien / automaticien',
      'Technicien en comptabilité',
      'Complément de CESS',
      'Technicien en informatique',
    ],
  },
  {
    slug: 'superieur',
    label: 'Enseignement supérieur',
    short: 'Supérieur',
    color: 'var(--ifosup-yellow)',
    hero:
      'Bachelier ou BES: des cursus professionnalisants construits pour l’emploi, accessibles en horaire adapté.',
    outcomes: [
      'Obtenir un diplôme à forte valeur sur le marché',
      'Développer des compétences opérationnelles',
      'Concilier études, travail et vie de famille',
    ],
    courses: [
      'BES Webdesigner UI/UX',
      'BES Webdeveloper',
      'Bachelier en Informatique',
      'Bachelier en Comptabilité',
      'Bachelier en Marketing',
    ],
  },
  {
    slug: 'langues',
    label: 'Cours de langues',
    short: 'Langues',
    color: 'var(--ifosup-red)',
    hero:
      'Des cours de langues vivants pour progresser vite à l’oral et à l’écrit, avec un cadre bienveillant.',
    outcomes: [
      'Gagner en aisance dans un contexte professionnel',
      'Ouvrir des opportunités internationales',
      'Valoriser son profil sur le CV',
    ],
    courses: [
      'Anglais',
      'Chinois',
      'Japonais',
      'Néerlandais',
      'Allemand',
      'Espagnol',
      'Italien',
      'Russe',
      'Français langue étrangère',
      'Langue des signes',
      'Néerlandais - Atelier de conversation',
    ],
  },
  {
    slug: 'modules',
    label: 'Les modules divers',
    short: 'Modules',
    color: 'var(--ifosup-indigo)',
    hero:
      'Des modules courts et pratiques pour apprendre vite: numérique, créatif, technique, IA ou culture.',
    outcomes: [
      'Apprendre une compétence utile en quelques semaines',
      'Se réorienter en testant de nouveaux domaines',
      'Booster son autonomie numérique',
    ],
    courses: [
      'Utilisation Ipad/Iphone',
      'Utilisation du MacBook',
      'Bases de l’informatique et messagerie électronique',
      'Windows 10/11',
      'Adobe Indesign',
      'Création de photomontages',
      'Office 2016 - Initiation',
      'Dactylographie',
      'Compléments de bureautique',
      'Oenologie : Initiation',
      'Découverte tablette/smartphone',
      'Maintenance PC',
      'Initiation au dessin assisté et à l’impression 3D',
      'Oenologie : Les vins de France',
      'Bases de l’informatique - Niveau 2',
      'Montage, programmation et pilotage de drones : prêt au décollage ?',
      'La robotique à portée de brique avec Lego',
      'L’intelligence artificielle : Chat GPT et ses amis',
      'Électricité domestique et domotique',
      'Bases de l’informatique - Niveau 1',
      'Vin du monde (hors Europe)',
      'Vins européens (étrangers à la France)',
      'Une IA comme alliée dans les études',
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
  'Accompagnement humain et personnalisé',
  'Approche métier orientée employabilité',
  'Horaires modulaires jour et soir',
  'Ouverture à tous les adultes en reprise d’études',
  'Culture d’évolution continue et outils numériques',
  'Transparence, dialogue, bienveillance',
];

export const seoDefaults = {
  title: 'IFOSUP Wavre | École de promotion sociale',
  description:
    'IFOSUP Wavre propose des formations secondaires, supérieures, langues et modules: un parcours flexible pour adultes en reprise d’études.',
};