import { Container } from '../ui/container';

interface LocationInfoProps {
  locationName: string;
  serviceType: string;
}

interface LocationData {
  [key: string]: {
    neighborhoods: string[];
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
  'brossard': {
    neighborhoods: [
      'Quartier DIX30', 'Secteur B', 'Secteur C', 'Secteur M',
      'Secteur N', 'Secteur O', 'Secteur P', 'Secteurs R et S'
    ],
    challenges: [
      {
        title: 'Circulation dense de la Rive-Sud',
        description: 'Les trajets quotidiens sur les autoroutes 10, 30 et le pont Samuel-De Champlain exposent les véhicules à la poussière de freins et aux résidus de route qui encrassent carrosserie et habitacle.'
      },
      {
        title: 'Véhicules familiaux très sollicités',
        description: 'Sièges d’enfants, poils d’animaux, miettes et taches: les habitacles familiaux demandent un nettoyage en profondeur régulier pour rester sains et agréables.'
      }
    ]
  },
  'sherbrooke': {
    neighborhoods: [
      'Fleurimont', 'Mont-Bellevue', 'Jacques-Cartier', 'Rock Forest',
      'Saint-Élie', 'Deauville', 'Brompton', 'Lennoxville'
    ],
    challenges: [
      {
        title: 'Hivers rigoureux de l’Estrie',
        description: 'Le sel et le calcium des routes de Sherbrooke laissent des traces blanches tenaces sur les tapis et le bas de caisse, qui demandent des produits adaptés pour être éliminés sans abîmer les surfaces.'
      },
      {
        title: 'Relief et gravier',
        description: 'Les côtes et les rues en gravier de certains secteurs projettent poussière et petits débris qui s’accumulent dans les passages de roues et l’habitacle.'
      }
    ]
  },
  'levis': {
    neighborhoods: [
      'Vieux-Lévis', 'Saint-Romuald', 'Charny', 'Saint-Jean-Chrysostome',
      'Saint-Nicolas', 'Pintendre', 'Lauzon', 'Breakeyville'
    ],
    challenges: [
      {
        title: 'Navettage quotidien vers Québec',
        description: 'Les allers-retours par les ponts et l’autoroute 20 exposent les véhicules lévisiens aux abrasifs et aux résidus de route une bonne partie de l’année.'
      },
      {
        title: 'Sel et calcium en hiver',
        description: 'Comme partout dans la région de la Capitale-Nationale, le déglaçage intensif laisse des dépôts corrosifs qu’il faut retirer régulièrement pour protéger la carrosserie et les tapis.'
      }
    ]
  },
  'rimouski': {
    neighborhoods: [
      'Saint-Germain', 'Nazareth', 'Sacré-Cœur', 'Pointe-au-Père',
      'Sainte-Odile', 'Rimouski-Est', 'Le Bic'
    ],
    challenges: [
      {
        title: 'Air salin du fleuve',
        description: 'La proximité du Saint-Laurent expose les véhicules de Rimouski à l’air salin, qui accélère la corrosion. Un lavage régulier avec rinçage du bas de caisse aide à protéger la carrosserie.'
      },
      {
        title: 'Hivers longs du Bas-Saint-Laurent',
        description: 'Le sel de déglaçage utilisé plusieurs mois par année s’incruste dans les tapis et les seuils de portes; un nettoyage en profondeur au printemps est fortement recommandé.'
      }
    ]
  },
  'victoriaville': {
    neighborhoods: [
      'Centre-ville', 'Arthabaska', 'Sainte-Victoire-d’Arthabaska',
      'Secteur du mont Arthabaska', 'Parc industriel'
    ],
    challenges: [
      {
        title: 'Poussière des zones rurales et agricoles',
        description: 'Les rangs et routes de campagne des Bois-Francs génèrent de la poussière qui s’accumule rapidement sur la carrosserie et s’infiltre dans l’habitacle.'
      },
      {
        title: 'Écarts de saison marqués',
        description: 'Entre le calcium de l’hiver et le pollen du printemps, les véhicules de Victoriaville bénéficient d’un grand nettoyage saisonnier, intérieur comme extérieur.'
      }
    ]
  },
  'shawinigan': {
    neighborhoods: [
      'Shawinigan-Sud', 'Grand-Mère', 'Saint-Georges-de-Champlain',
      'Saint-Gérard-des-Laurentides', 'Lac-à-la-Tortue', 'Baie-de-Shawinigan'
    ],
    challenges: [
      {
        title: 'Vie de plein air en Mauricie',
        description: 'Sable, boue, aiguilles de conifères et équipement de plein air: les véhicules qui font la navette vers les chalets et le parc national demandent un nettoyage intérieur en profondeur.'
      },
      {
        title: 'Humidité et odeurs',
        description: 'L’humidité rapportée des activités nautiques et hivernales peut imprégner les tapis et créer des odeurs tenaces; un shampoing des tissus et un traitement anti-odeurs y remédient.'
      }
    ]
  },
  'blainville': {
    neighborhoods: [
      'Fontainebleau', 'Chambéry', 'Plan Bouchard', 'Blainvillier',
      'Secteur de la gare', 'Vieux-Blainville'
    ],
    challenges: [
      {
        title: 'Navettage sur les autoroutes 15 et 640',
        description: 'Les trajets quotidiens vers Montréal et Laval exposent les véhicules de Blainville aux résidus de route et à la poussière de freins qui ternissent la carrosserie.'
      },
      {
        title: 'Secteurs résidentiels en développement',
        description: 'Les chantiers de construction des nouveaux quartiers génèrent de la poussière fine qui s’accumule sur et dans les véhicules des environs.'
      }
    ]
  },
  // Default data for other locations
  'default': {
    neighborhoods: [],
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
  const hasNeighborhoods = data.neighborhoods.length > 0;

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

        <div className={`grid gap-8 ${hasNeighborhoods ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-2xl mx-auto'}`}>
          {/* Service Areas */}
          {hasNeighborhoods && (
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
          )}

          {/* Challenges */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
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
