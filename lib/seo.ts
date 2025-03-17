import { SITE_CONFIG, CONTACT_INFO } from './constants';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  noindex = false,
  nofollow = false,
  path = '',
}: MetaProps = {}) {
  const finalTitle = title 
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.defaultTitle;

  const finalDescription = description || SITE_CONFIG.defaultDescription;
  const finalKeywords = keywords || SITE_CONFIG.defaultKeywords;

  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(',');

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    robots,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      type: 'website',
      locale: 'fr_CA',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
    },
    alternates: {
      canonical: path ? `${SITE_CONFIG.url}/${path}` : SITE_CONFIG.url,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
    },
  };
}

export function generateLocationMetadata(service: string, location: string, serviceId: string, locationId: string) {
  const title = `${service} à ${location}`;
  const description = `Service professionnel de ${service.toLowerCase()} à ${location}. Expertise locale, satisfaction garantie. Réservez maintenant!`;
  const keywords = `${service}, ${location}, lavage auto, detailing, nettoyage voiture, service automobile ${location}, lavage voiture ${location}`;

  return generateMetadata({
    title,
    description,
    keywords,
    path: `${serviceId}/${locationId}`,
  });
}

export function generateServiceSchema(service: string, location?: string, serviceId?: string, locationId?: string) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: location ? `${SITE_CONFIG.name} - ${service} à ${location}` : SITE_CONFIG.name,
    description: location 
      ? `Service professionnel de ${service.toLowerCase()} à ${location}. Expertise locale, satisfaction garantie.` 
      : SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.province,
      postalCode: CONTACT_INFO.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.8649',  // Example coordinates for Quebec City
      longitude: '-71.2173',
    },
    url: serviceId && locationId 
      ? `${SITE_CONFIG.url}/${serviceId}/${locationId}` 
      : SITE_CONFIG.url,
    telephone: '',  // Add phone when available
    priceRange: '$$',
    areaServed: location ? location : 'Québec',
    serviceType: service,
    // Add more specific details for location pages
    ...(location && {
      slogan: `Le meilleur service de ${service.toLowerCase()} à ${location}`,
      keywords: `${service}, ${location}, lavage auto, detailing, nettoyage voiture, service automobile ${location}`,
      availableLanguage: ['fr', 'en'],
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      openingHours: [
        'Mo-Fr 08:00-18:00',
        'Sa 09:00-17:00'
      ]
    })
  };

  return JSON.stringify(schema);
}
