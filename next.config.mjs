// Keep in sync with REMOVED_LOCATION_IDS in lib/constants.ts (next.config cannot import TS)
const REMOVED_LOCATIONS = [
  'saint-jerome', 'saint-hyacinthe', 'mascouche', 'chateauguay', 'shawinigan',
  'rimouski', 'dollard-des-ormeaux', 'victoriaville', 'saint-eustache',
  'vaudreuil-dorion', 'rouyn-noranda', 'boucherville', 'sorel-tracy',
  'cote-saint-luc', 'saint-georges', 'pointe-claire', 'val-dor', 'chambly',
  'sainte-julie', 'saint-constant', 'boisbriand', 'saint-bruno-de-montarville',
  'sainte-therese', 'la-prairie', 'thetford-mines', 'sept-iles', 'beloeil',
  'lassomption', 'saint-lambert', 'varennes',
];

const REMOVED_SERVICES = ['lavage-auto-a-proximite', 'nettoyage-voiture-professionnel'];
const KEPT_SERVICES = ['lavage-auto-interieur', 'lave-auto-a-la-main'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      // Removed service + removed city: straight to the surviving hub (no chains)
      ...REMOVED_SERVICES.flatMap((service) =>
        REMOVED_LOCATIONS.map((location) => ({
          source: `/${service}/${location}`,
          destination: '/lave-auto-a-la-main',
          permanent: true,
        }))
      ),
      // Removed service + kept city: same city under the surviving service
      {
        source: '/lavage-auto-a-proximite/:location',
        destination: '/lave-auto-a-la-main/:location',
        permanent: true,
      },
      {
        source: '/nettoyage-voiture-professionnel/:location',
        destination: '/lave-auto-a-la-main/:location',
        permanent: true,
      },
      // Removed service hubs
      {
        source: '/lavage-auto-a-proximite',
        destination: '/zones-desservies',
        permanent: true,
      },
      {
        source: '/nettoyage-voiture-professionnel',
        destination: '/lave-auto-a-la-main',
        permanent: true,
      },
      // Kept service + removed city: up to the service hub
      ...KEPT_SERVICES.flatMap((service) =>
        REMOVED_LOCATIONS.map((location) => ({
          source: `/${service}/${location}`,
          destination: `/${service}`,
          permanent: true,
        }))
      ),
    ];
  },
};

export default nextConfig;
