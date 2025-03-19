import { Container } from '../ui/container';

interface LocationInfoProps {
  locationName: string;
  serviceType: string;
}

interface LocationData {
  [key: string]: {
    neighborhoods: string[];
    statistics: {
      title: string;
      value: string;
    }[];
    challenges: {
      title: string;
      description: string;
    }[];
  };
}

// This data would ideally come from a CMS or API
// For now, we'll hardcode some example data for a few locations
const LOCATION_DATA: LocationData = {
  'montreal': {
    neighborhoods: [
      'Ville-Marie', 'Le Plateau-Mont-Royal', 'Rosemont', 'Hochelaga', 
      'Notre-Dame-de-Grâce', 'Westmount', 'Outremont', 'Verdun'
    ],
    statistics: [
      { title: 'Véhicules immatriculés', value: '900,000+' },
      { title: 'Précipitations annuelles', value: '1,000 mm' },
      { title: 'Jours de neige par an', value: '60+' }
    ],
    challenges: [
      { 
        title: 'Dommages dus au sel', 
        description: 'Les routes salées en hiver peuvent causer de la corrosion et des taches sur l&apos;extérieur et l&apos;intérieur de votre véhicule.'
      },
      { 
        title: 'Pollution urbaine', 
        description: 'La pollution urbaine peut s&apos;accumuler sur la carrosserie et s&apos;infiltrer dans l&apos;habitacle, nécessitant un nettoyage régulier.'
      }
    ]
  },
  'quebec': {
    neighborhoods: [
      'Vieux-Québec', 'Saint-Roch', 'Limoilou', 'Sainte-Foy', 
      'Sillery', 'Cap-Rouge', 'Lebourgneuf', 'Charlesbourg'
    ],
    statistics: [
      { title: 'Véhicules immatriculés', value: '400,000+' },
      { title: 'Précipitations annuelles', value: '1,190 mm' },
      { title: 'Jours de neige par an', value: '70+' }
    ],
    challenges: [
      { 
        title: 'Conditions hivernales rigoureuses', 
        description: 'Les hivers rigoureux de Québec peuvent laisser des résidus de sel et de calcium qui endommagent l&apos;intérieur et l&apos;extérieur de votre véhicule.'
      },
      { 
        title: 'Pollen et allergènes', 
        description: 'Au printemps et en été, le pollen peut s&apos;accumuler dans votre véhicule, affectant la qualité de l&apos;air intérieur.'
      }
    ]
  },
  'laval': {
    neighborhoods: [
      'Chomedey', 'Vimont', 'Auteuil', 'Duvernay', 
      'Saint-Vincent-de-Paul', 'Pont-Viau', 'Laval-des-Rapides', 'Sainte-Dorothée'
    ],
    statistics: [
      { title: 'Véhicules immatriculés', value: '250,000+' },
      { title: 'Précipitations annuelles', value: '1,000 mm' },
      { title: 'Jours de neige par an', value: '60+' }
    ],
    challenges: [
      { 
        title: 'Proximité des autoroutes', 
        description: 'La proximité des grandes autoroutes expose les véhicules à davantage de poussière et de particules polluantes.'
      },
      { 
        title: 'Zones de construction', 
        description: 'Les nombreux chantiers de construction peuvent générer de la poussière qui s&apos;accumule sur et dans votre véhicule.'
      }
    ]
  },
  // Default data for other locations
  'default': {
    neighborhoods: [
      'Centre-ville', 'Quartier résidentiel', 'Zone commerciale', 'Banlieue'
    ],
    statistics: [
      { title: 'Véhicules immatriculés', value: '100,000+' },
      { title: 'Précipitations annuelles', value: '1,000 mm' },
      { title: 'Jours de neige par an', value: '50+' }
    ],
    challenges: [
      { 
        title: 'Conditions climatiques', 
        description: 'Les variations climatiques du Québec peuvent affecter l&apos;état de votre véhicule, tant à l&apos;intérieur qu&apos;à l&apos;extérieur.'
      },
      { 
        title: 'Entretien régulier', 
        description: 'Un entretien régulier est nécessaire pour maintenir la valeur et la propreté de votre véhicule.'
      }
    ]
  }
};

export function LocationInfo({ locationName, serviceType }: LocationInfoProps) {
  // Convert location name to lowercase and remove accents for matching
  const normalizedLocation = locationName.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
  
  // Try to find location data, fall back to default if not found
  const locationKey = Object.keys(LOCATION_DATA).find(key => 
    normalizedLocation.includes(key)) || 'default';
  
  const data = LOCATION_DATA[locationKey];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {serviceType} à {locationName}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez nos services spécialisés pour votre région
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Areas */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <span className="txt-primary">
                Notre zone de service à {locationName}
              </span>
            </h3>
            <ul className="space-y-2 text-gray-600">
              {data.neighborhoods.map((neighborhood, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {neighborhood}
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Statistiques locales
            </h3>
            <ul className="space-y-4">
              {data.statistics.map((stat, index) => (
                <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Défis locaux pour les véhicules
            </h3>
            <div className="space-y-4">
              {data.challenges.map((challenge, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
