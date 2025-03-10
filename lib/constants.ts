export const SERVICES = [
  {
    id: 'lavage-auto-interieur',
    name: 'Lavage auto intérieur',
    description: 'Service professionnel de nettoyage intérieur de votre véhicule',
    metaDescription: 'Service expert de lavage auto intérieur. Nettoyage professionnel et détaillé de l\'habitacle de votre véhicule.',
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
    description: 'Lavage minutieux à la main pour une finition parfaite',
    metaDescription: 'Service premium de lavage auto à la main. Traitement personnalisé et attention particulière aux détails.',
    features: [
      'Lavage extérieur',
      'Polissage',
      'Protection de la peinture',
      'Traitement des jantes',
      'Finition miroir'
    ]
  },
  {
    id: 'lavage-auto-a-proximite',
    name: 'Lavage auto à proximité',
    description: 'Service de lavage auto pratique près de chez vous',
    metaDescription: 'Service de lavage automobile proche de votre localisation. Rapidité et qualité garanties.',
    features: [
      'Service rapide',
      'Proximité',
      'Qualité professionnelle',
      'Sans rendez-vous',
      'Satisfaction garantie'
    ]
  },
  {
    id: 'nettoyage-voiture-professionnel',
    name: 'Nettoyage voiture professionnel',
    description: 'Service complet de nettoyage professionnel',
    metaDescription: 'Nettoyage professionnel complet de votre véhicule. Service premium pour un résultat impeccable.',
    features: [
      'Détailing complet',
      'Traitement céramique',
      'Correction de peinture',
      'Protection longue durée',
      'Restauration complète'
    ]
  }
];

export const LOCATIONS = [
  'Montreal',
  'Ville-de-Quebec',
  'Laval',
  'Gatineau',
  'Longueuil',
  'Sherbrooke',
  'Levis',
  'Saguenay',
  'Trois-Rivieres',
  'Terrebonne',
  'Saint-Jean-sur-Richelieu',
  'Brossard',
  'Repentigny',
  'Saint-Jerome',
  'Drummondville',
  'Granby',
  'Mirabel',
  'Blainville',
  'Saint-Hyacinthe',
  'Mascouche',
  'Chateauguay',
  'Shawinigan',
  'Rimouski',
  'Dollard-Des-Ormeaux',
  'Victoriaville',
  'Saint-Eustache',
  'Salaberry-de-Valleyfield',
  'Vaudreuil-Dorion',
  'Rouyn-Noranda',
  'Boucherville',
  'Sorel-Tracy',
  'Cote-Saint-Luc',
  'Saint-Georges',
  'Pointe-Claire',
  'Val-dOr',
  'Chambly',
  'Alma',
  'Sainte-Julie',
  'Saint-Constant',
  'Magog',
  'Boisbriand',
  'Saint-Bruno-de-Montarville',
  'Sainte-Therese',
  'La-Prairie',
  'Thetford-Mines',
  'Sept-Iles',
  'Beloeil',
  'LAssomption',
  'Saint-Lambert',
  'Varennes'
].map(location => ({
  id: location.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name: location.replace(/-/g, ' ')
}));

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
  url: 'https://lavageautointerieur.ca', // website URL
  defaultTitle: 'Lavage Auto Pro | Services Professionnels de Lavage Automobile',
  defaultDescription: 'Services professionnels de lavage et détailing automobile. Nettoyage intérieur et extérieur, protection et restauration de véhicules.',
  defaultKeywords: 'lavage auto, détailing, nettoyage voiture, lavage intérieur, lave auto à la main, service automobile'
};
