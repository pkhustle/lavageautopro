export const SERVICES = [
  {
    id: 'lavage-auto-interieur',
    name: 'Lavage auto intérieur',
    description: 'Service professionnel de nettoyage intérieur de votre véhicule',
    metaDescription: "Service expert de lavage auto intérieur. Nettoyage professionnel et détaillé de l'habitacle de votre véhicule.",
    features: [
      'Aspiration complète',
      'Nettoyage des surfaces',
      'Traitement des cuirs',
      'Désinfection complète',
      'Déodorisation'
    ]
  },
  {
    id: 'lave-auto-a-la-main',
    name: 'Lave auto à la main',
    description: 'Lavage minutieux à la main, polissage et cirage pour une finition parfaite',
    metaDescription: 'Service premium de lavage auto à la main: lavage extérieur, polissage, cirage et protection de la peinture.',
    features: [
      'Lavage extérieur à la main',
      'Polissage et cirage',
      'Protection de la peinture',
      'Traitement des jantes',
      'Finition miroir'
    ]
  },
  {
    id: 'lavage-auto-a-domicile',
    name: 'Lavage auto à domicile',
    description: 'Service mobile: nous nous déplaçons chez vous, à la maison ou au travail',
    metaDescription: "Lavage auto à domicile: notre équipe mobile se déplace chez vous pour un nettoyage intérieur et extérieur complet, sans que vous ayez à vous déplacer.",
    features: [
      'Déplacement à domicile ou au travail',
      'Nettoyage intérieur complet sur place',
      'Lavage extérieur à la main',
      'Équipement autonome (eau et électricité)',
      'Prise de rendez-vous flexible'
    ]
  }
];

export const LOCATIONS = [
  { id: 'montreal', name: 'Montréal' },
  { id: 'ville-de-quebec', name: 'Ville de Québec' },
  { id: 'laval', name: 'Laval' },
  { id: 'gatineau', name: 'Gatineau' },
  { id: 'longueuil', name: 'Longueuil' },
  { id: 'sherbrooke', name: 'Sherbrooke' },
  { id: 'levis', name: 'Lévis' },
  { id: 'saguenay', name: 'Saguenay' },
  { id: 'trois-rivieres', name: 'Trois-Rivières' },
  { id: 'terrebonne', name: 'Terrebonne' },
  { id: 'saint-jean-sur-richelieu', name: 'Saint-Jean-sur-Richelieu' },
  { id: 'brossard', name: 'Brossard' },
  { id: 'repentigny', name: 'Repentigny' },
  { id: 'drummondville', name: 'Drummondville' },
  { id: 'granby', name: 'Granby' },
  { id: 'mirabel', name: 'Mirabel' },
  { id: 'blainville', name: 'Blainville' },
  { id: 'salaberry-de-valleyfield', name: 'Salaberry-de-Valleyfield' },
  { id: 'alma', name: 'Alma' },
  { id: 'magog', name: 'Magog' },
  // Restored 2026-07: these small-market pages earned most GSC clicks
  // (Rimouski = 45% of clicks, positions 25-55) before the July prune
  { id: 'rimouski', name: 'Rimouski' },
  { id: 'victoriaville', name: 'Victoriaville' },
  { id: 'shawinigan', name: 'Shawinigan' },
];

// Cities removed from the programmatic set (kept for 301 redirects)
export const REMOVED_LOCATION_IDS = [
  'saint-jerome', 'saint-hyacinthe', 'mascouche', 'chateauguay',
  'dollard-des-ormeaux', 'saint-eustache',
  'vaudreuil-dorion', 'rouyn-noranda', 'boucherville', 'sorel-tracy',
  'cote-saint-luc', 'saint-georges', 'pointe-claire', 'val-dor', 'chambly',
  'sainte-julie', 'saint-constant', 'boisbriand', 'saint-bruno-de-montarville',
  'sainte-therese', 'la-prairie', 'thetford-mines', 'sept-iles', 'beloeil',
  'lassomption', 'saint-lambert', 'varennes',
];

export const CONTACT_INFO = {
  address: '8255 Boul Henri Bourassa, Local 230',
  city: 'Québec',
  province: 'QC',
  postalCode: 'G1G 4C8',
  hours: {
    monday: '8h00 - 18h00',
    tuesday: '8h00 - 18h00',
    wednesday: '8h00 - 18h00',
    thursday: '8h00 - 18h00',
    friday: '8h00 - 18h00',
    saturday: '9h00 - 17h00',
    sunday: 'Fermé'
  }
};

export const SITE_CONFIG = {
  name: 'Lavage Auto Pro',
  description: 'Lavage auto intérieur et extérieur à Québec et ses environs. Service professionnel en atelier ou à domicile.',
  url: 'https://www.lavageautointerieur.ca',
  ogImage: '/images/washing-car-1397382_1280.jpg',
  defaultTitle: 'Lavage auto intérieur et extérieur à Québec | Lavage Auto Pro',
  defaultDescription: 'Lavage auto intérieur et extérieur à Québec: nettoyage de l\'habitacle, lavage à la main, polissage et service à domicile dans la région de Québec. Devis rapide et gratuit.',
  defaultKeywords: 'lavage auto québec, lavage auto intérieur, nettoyage voiture québec, lave auto à la main québec, lavage auto à domicile, détailing québec'
};

// Public by design (it ships in the client bundle); the env var only exists so a
// staging deploy can point at a different Clarity project.
export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'y0qz75pen5';
