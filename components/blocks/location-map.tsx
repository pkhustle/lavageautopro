import { Container } from '../ui/container';

interface LocationMapProps {
  locationName: string;
  serviceType: string;
}

interface LocationCoordinates {
  [key: string]: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

// This data would ideally come from a CMS or API
// For now, we'll hardcode some example data for a few locations
const LOCATION_COORDINATES: LocationCoordinates = {
  'montreal': {
    lat: 45.5017,
    lng: -73.5673,
    zoom: 11
  },
  'quebec': {
    lat: 46.8139,
    lng: -71.2080,
    zoom: 11
  },
  'laval': {
    lat: 45.5750,
    lng: -73.6923,
    zoom: 11
  },
  'gatineau': {
    lat: 45.4765,
    lng: -75.7013,
    zoom: 11
  },
  'longueuil': {
    lat: 45.5362,
    lng: -73.5102,
    zoom: 11
  },
  // Default coordinates (center of Quebec province)
  'default': {
    lat: 46.8139,
    lng: -71.2080,
    zoom: 7
  }
};

export function LocationMap({ locationName, serviceType }: LocationMapProps) {
  // Convert location name to lowercase and remove accents for matching
  const normalizedLocation = locationName.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
  
  // Try to find location coordinates, fall back to default if not found
  const locationKey = Object.keys(LOCATION_COORDINATES).find(key => 
    normalizedLocation.includes(key)) || 'default';
  
  const coordinates = LOCATION_COORDINATES[locationKey];
  
  // Create Google Maps URL with the coordinates
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(locationName)},Quebec,Canada&zoom=${coordinates.zoom}&center=${coordinates.lat},${coordinates.lng}`;

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre zone de service à {locationName}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous offrons nos services de {serviceType.toLowerCase()} dans toute la région de {locationName} et ses environs
          </p>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, height: '450px' }}
              src={mapUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Carte de ${locationName}`}
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Besoin de nos services à {locationName}? Contactez-nous dès aujourd'hui pour planifier votre rendez-vous.
          </p>
        </div>
      </Container>
    </section>
  );
}
