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
];

// Cities removed from the programmatic set (kept for 301 redirects)
export const REMOVED_LOCATION_IDS = [
  'saint-jerome', 'saint-hyacinthe', 'mascouche', 'chateauguay', 'shawinigan',
  'rimouski', 'dollard-des-ormeaux', 'victoriaville', 'saint-eustache',
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
  description: 'Services professionnels de lavage et détailing automobile au Québec',
  url: 'https://www.lavageautointerieur.ca',
  ogImage: '/images/washing-car-1397382_1280.jpg',
  defaultTitle: 'Lavage Auto Pro | Lavage auto intérieur au Québec',
  defaultDescription: 'Services professionnels de lavage et détailing automobile au Québec. Nettoyage intérieur et extérieur, polissage, protection et restauration de véhicules.',
  defaultKeywords: 'lavage auto, détailing, nettoyage voiture, lavage intérieur, lave auto à la main, service automobile'
};
