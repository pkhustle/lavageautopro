import { Hero } from './hero';
import { LOCATIONS, SITE_CONFIG } from '../../lib/constants';

interface ServiceHeroProps {
  title: string;
  description: string;
  location?: string;
}

export function ServiceHero({ title, description, location }: ServiceHeroProps) {
  const heroTitle = location ? `${title} à ${location}` : title;
  const heroDescription = location
    ? `Service professionnel de ${title.toLowerCase()} à ${location}. ${description}`
    : description;

  const nearbyLocations = location
    ? LOCATIONS.slice(0, 5)
        .map((loc) => loc.name)
        .filter((loc) => loc !== location)
    : [];

  return (
    <div className="relative">
      <Hero 
        title={heroTitle} 
        description={heroDescription}
        cta={{
          text: "Réserver maintenant",
          href: `${SITE_CONFIG.url}/contact`,
        }}
      />
      {location && nearbyLocations.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-black py-4">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-gray-300">
              Également disponible à{' '}
              {nearbyLocations.map((loc, index) => (
                <span key={loc}>
                  {index > 0 && index === nearbyLocations.length - 1
                    ? ' et '
                    : index > 0
                    ? ', '
                    : ''}
                  {loc}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
