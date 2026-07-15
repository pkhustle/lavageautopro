import { notFound } from 'next/navigation';
import { ServiceHero } from '../../../components/blocks/service-hero';
import { Features } from '../../../components/blocks/features';
import { PriceEstimator } from '../../../components/blocks/price-estimator';
import { LocationInfo } from '../../../components/blocks/location-info';
import { LocationFAQ } from '../../../components/blocks/location-faq';
import { LocationFAQSchema } from '../../../components/blocks/location-faq-schema';
import { ServicesGrid } from '../../../components/blocks/services-grid';
import { Container } from '../../../components/ui/container';
import { Button } from '../../../components/ui/button';
import { Breadcrumbs } from '../../../components/ui/breadcrumbs';
import { SERVICES, LOCATIONS, SITE_CONFIG } from '../../../lib/constants';
import { generateLocationMetadata, generateServiceSchema } from '../../../lib/seo';
import Link from 'next/link';
import { ImageCarousel } from '../../../components/blocks/image-carousel';

interface LocationServicePageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      paths.push({
        service: service.id,
        location: location.id,
      });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: LocationServicePageProps) {
  const service = SERVICES.find((s) => s.id === params.service);
  const location = LOCATIONS.find((l) => l.id === params.location);
  if (!service || !location) return {};

  return generateLocationMetadata(service.name, location.name, params.service, params.location);
}

const locationFeatures = [
  {
    title: 'Service local',
    description: 'Une équipe locale qui connaît vos besoins spécifiques.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Disponibilité rapide',
    description: 'Intervention dans les plus brefs délais.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Prix compétitifs',
    description: 'Les meilleurs tarifs de la région garantis.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Garantie locale',
    description: 'Service après-vente et support local.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const GSC_OPPORTUNITY_COPY: Record<string, Record<string, {
  title: string;
  intro: string;
  bullets: string[];
}>> = {
  'lave-auto-a-la-main': {
    repentigny: {
      title: 'Lave-auto à la main, cirage et polissage à Repentigny',
      intro: 'À Repentigny, nous offrons un lavage à la main complet ainsi que le cirage, le polissage et la remise à neuf de véhicule. Un service minutieux, adapté aux véhicules utilisés au quotidien comme aux voitures que vous préparez pour la revente.',
      bullets: [
        'Cirage et protection de peinture pour aider à conserver le lustre du véhicule.',
        'Polissage esthétique pour améliorer l’apparence des micro-rayures légères.',
        'Remise à neuf intérieure et extérieure selon l’état réel du véhicule.',
      ],
    },
    sherbrooke: {
      title: 'Lavage auto et nettoyage intérieur à Sherbrooke',
      intro: 'À Sherbrooke, nous combinons lavage extérieur à la main et nettoyage intérieur en profondeur, avec une prise en charge claire et flexible — y compris le service à domicile lorsque c’est possible.',
      bullets: [
        'Nettoyage intérieur des tapis, sièges, plastiques et surfaces fréquemment touchées.',
        'Lavage à la main pour une finition soignée sans approche industrielle impersonnelle.',
        'Forfaits clairs et devis rapide pour comparer facilement vos options à Sherbrooke.',
      ],
    },
    mirabel: {
      title: 'Lave-auto à la main à Mirabel',
      intro: 'À Mirabel, notre lave-auto à la main mise sur la qualité de la finition: carrosserie, jantes, vitres et habitacle sont traités avec soin, à l’intérieur comme à l’extérieur.',
      bullets: [
        'Lavage à la main avec attention aux détails visibles: carrosserie, jantes et finition.',
        'Options de nettoyage intérieur et extérieur selon le besoin du véhicule.',
        'Prise de rendez-vous simple et service courtois pour les conducteurs de Mirabel.',
      ],
    },
    magog: {
      title: 'Lave-auto à la main à Magog',
      intro: 'À Magog, nous offrons un lavage à la main soigné, du nettoyage intérieur et des finitions protectrices, avec des délais rapides et un processus expliqué clairement avant chaque intervention.',
      bullets: [
        'Lavage à la main complet, adapté à la taille et à l’état de votre véhicule.',
        'Processus expliqué étape par étape avant le début du service.',
        'Devis rapide et sans engagement pour les conducteurs de Magog.',
      ],
    },
    alma: {
      title: 'Lave-auto à la main à Alma',
      intro: 'À Alma, notre équipe offre un lavage à la main minutieux ainsi que des soins de finition et de protection pour garder votre véhicule propre plus longtemps, été comme hiver.',
      bullets: [
        'Lavage à la main soigné pour les conducteurs d’Alma et des environs.',
        'Informations utiles sur le lavage, la finition et la protection du véhicule.',
        'Possibilité de combiner avec un nettoyage intérieur complet lors du même rendez-vous.',
      ],
    },
    'salaberry-de-valleyfield': {
      title: 'Lave-auto à la main à Salaberry-de-Valleyfield',
      intro: 'À Salaberry-de-Valleyfield, nous offrons un lave-auto à la main complet: carrosserie, jantes, vitres et finition protectrice. Notre service mobile se déplace chez vous, à la maison comme au travail, partout dans la région du Suroît.',
      bullets: [
        'Lavage extérieur à la main avec rinçage soigné et séchage sans traces.',
        'Options de cirage et de protection de la peinture contre le calcium et les résidus d’hiver.',
        'Service mobile pratique pour les résidents de Valleyfield et des environs.',
      ],
    },
    rimouski: {
      title: 'Lavage auto et lave-auto à la main à Rimouski',
      intro: 'À Rimouski, nous offrons un lavage auto complet: extérieur à la main, nettoyage intérieur et finition protectrice adaptée au climat du Bas-Saint-Laurent, où le sel de mer et le calcium mettent la carrosserie à rude épreuve.',
      bullets: [
        'Lavage à la main soigné pour éliminer sel, calcium et résidus d’hiver.',
        'Nettoyage intérieur des tapis, sièges et surfaces de l’habitacle.',
        'Prise de rendez-vous simple pour les conducteurs de Rimouski et des environs.',
      ],
    },
    victoriaville: {
      title: 'Lave-auto à la main à Victoriaville',
      intro: 'À Victoriaville, notre lave-auto à la main offre une alternative soignée au lave-auto libre-service: chaque véhicule est lavé, rincé et séché manuellement, avec une attention particulière aux jantes et aux finitions.',
      bullets: [
        'Lavage manuel complet, plus doux pour la peinture qu’un lave-auto automatique.',
        'Options d’esthétique automobile: cirage, polissage et protection.',
        'Service local pour Victoriaville et les Bois-Francs, avec devis rapide.',
      ],
    },
    shawinigan: {
      title: 'Lavage automobile à Shawinigan',
      intro: 'À Shawinigan, nous offrons un service de lavage automobile complet: lavage extérieur à la main, nettoyage intérieur en profondeur et finitions protectrices, pour les conducteurs de Shawinigan et de la Mauricie.',
      bullets: [
        'Lavage à la main minutieux, adapté à l’état réel de votre véhicule.',
        'Nettoyage intérieur complet disponible lors du même rendez-vous.',
        'Équipe locale desservant Shawinigan, Shawinigan-Sud et les environs.',
      ],
    },
    blainville: {
      title: 'Lave-auto à la main à Blainville',
      intro: 'À Blainville, nous offrons un lave-auto à la main complet, intérieur et extérieur: une alternative soignée aux lave-autos automatiques de la Rive-Nord, plus douce pour la peinture et attentive aux détails.',
      bullets: [
        'Lavage à la main de la carrosserie, des jantes et des vitres, avec séchage sans traces.',
        'Forfait intérieur et extérieur combiné disponible lors du même rendez-vous.',
        'Service pratique pour les résidents de Blainville et des Basses-Laurentides.',
      ],
    },
  },
  'lavage-auto-interieur': {
    brossard: {
      title: 'Nettoyage intérieur de voiture à Brossard',
      intro: 'À Brossard, notre service de nettoyage intérieur automobile redonne à votre habitacle sa fraîcheur d’origine: aspiration en profondeur, shampoing des sièges et tapis, traitement des plastiques et désodorisation. Un entretien particulièrement utile pour les véhicules qui circulent quotidiennement sur la Rive-Sud.',
      bullets: [
        'Nettoyage intérieur complet: sièges, tapis, coffre, plastiques et vitres intérieures.',
        'Traitement des taches, des poils d’animaux et des odeurs tenaces.',
        'Option polissage et cirage extérieur combinable au même rendez-vous à Brossard.',
      ],
    },
    sherbrooke: {
      title: 'Lavage intérieur d’auto à Sherbrooke',
      intro: 'À Sherbrooke, nous offrons un lavage intérieur d’auto en profondeur, disponible aussi à domicile: notre équipe nettoie l’habitacle complet chez vous ou au travail, un avantage apprécié des conducteurs de l’Estrie.',
      bullets: [
        'Aspiration complète, shampoing des tissus et nettoyage des surfaces de l’habitacle.',
        'Service à domicile disponible partout à Sherbrooke, sans frais supplémentaires.',
        'Traitement anti-odeurs et désinfection pour un intérieur sain, été comme hiver.',
      ],
    },
    levis: {
      title: 'Nettoyage intérieur de voiture à Lévis',
      intro: 'À Lévis, notre service d’esthétique automobile prend soin de votre habitacle: nettoyage intérieur complet, traitement des cuirs et finitions soignées, avec la possibilité de combiner intérieur et extérieur au même rendez-vous.',
      bullets: [
        'Nettoyage intérieur détaillé, du tableau de bord jusqu’au coffre.',
        'Forfait intérieur et extérieur combiné pour les conducteurs de Lévis.',
        'Proximité de notre équipe de Québec: délais courts des deux côtés du fleuve.',
      ],
    },
  },
  'lavage-auto-a-domicile': {
    sherbrooke: {
      title: 'Lavage auto à domicile à Sherbrooke',
      intro: 'À Sherbrooke, notre équipe mobile se déplace directement chez vous, à la maison ou au travail, pour un lavage auto complet à domicile: nettoyage intérieur en profondeur et lavage extérieur à la main, sans que vous ayez à vous déplacer.',
      bullets: [
        'Déplacement partout à Sherbrooke: Fleurimont, Rock Forest, Jacques-Cartier et les environs.',
        'Nettoyage intérieur et extérieur réalisé sur place avec un équipement autonome.',
        'Réservation simple et créneaux flexibles, y compris en fin de journée.',
      ],
    },
    montreal: {
      title: 'Lavage auto à domicile à Montréal',
      intro: 'À Montréal, évitez les files au lave-auto: notre unité mobile vient à vous, dans votre entrée, votre stationnement ou au bureau, pour un nettoyage intérieur et extérieur complet de votre véhicule.',
      bullets: [
        'Service à domicile dans les arrondissements de Montréal et sur l’île.',
        'Nettoyage intérieur complet: aspiration, sièges, plastiques et vitres.',
        'Lavage extérieur à la main avec produits professionnels apportés sur place.',
      ],
    },
    'ville-de-quebec': {
      title: 'Lavage auto à domicile à Québec',
      intro: 'À Québec, notre service de lavage auto à domicile couvre tous les quartiers, de Sainte-Foy à Charlesbourg en passant par Limoilou et Beauport. Nous nettoyons votre véhicule chez vous, pendant que vous vaquez à vos occupations.',
      bullets: [
        'Équipe locale basée à Québec, intervention rapide dans toute la ville.',
        'Forfaits intérieur, extérieur ou complet, réalisés directement à votre domicile.',
        'Devis gratuit et tarif annoncé avant le rendez-vous, sans surprise.',
      ],
    },
  },
};

function getOpportunityCopy(serviceId: string, locationId: string, serviceName: string, locationName: string) {
  return GSC_OPPORTUNITY_COPY[serviceId]?.[locationId] || {
    title: `${serviceName} à ${locationName}: service local et résultats soignés`,
    intro: `Notre service de ${serviceName.toLowerCase()} à ${locationName} aide les automobilistes à garder un véhicule propre, confortable et agréable à conduire. Nous misons sur des méthodes professionnelles, des produits adaptés et une finition attentive.`,
    bullets: [
      `Service local de ${serviceName.toLowerCase()} pour les conducteurs de ${locationName}.`,
      'Nettoyage adapté à l’état du véhicule et aux besoins réels du client.',
      'Réservation simple avec une approche axée sur la satisfaction.',
    ],
  };
}

export default function LocationServicePage({ params }: LocationServicePageProps) {
  const service = SERVICES.find((s) => s.id === params.service);
  const location = LOCATIONS.find((l) => l.id === params.location);
  
  if (!service || !location) return notFound();

  const opportunityCopy = getOpportunityCopy(service.id, location.id, service.name, location.name);

  // Define all sections as components
  const sections = {
    hero: (
      <section key="hero" className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/washing-car-1397382_1280.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
        </div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary">{service.name}</span> à {location.name}
              </h1>
              <p className="text-xl mb-8">
                Service professionnel de {service.name.toLowerCase()} à {location.name}. 
                Expertise locale, satisfaction garantie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={`${SITE_CONFIG.url}/contact?location=${location.id}`}>
                    Réserver maintenant
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="#tarifs">Voir les tarifs</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="relative" style={{ height: '300px' }}>
                <ImageCarousel className="w-full h-full" imageCount={3} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    ),
    
    locationInfo: (
      <LocationInfo 
        key="locationInfo"
        locationName={location.name}
        serviceType={service.name}
      />
    ),

    localOpportunity: (
      <section key="localOpportunity" className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Service local
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              {opportunityCopy.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {opportunityCopy.intro}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {opportunityCopy.bullets.map((bullet) => (
                <div key={bullet} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <svg className="mb-3 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm leading-6 text-gray-700">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    ),
    
    pricing: (
      <section key="pricing" id="tarifs" className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Tarifs à {location.name}</h2>
            <p className="text-lg text-gray-600 mt-4">
              Des prix compétitifs pour des services de qualité dans votre région
            </p>
          </div>
          <PriceEstimator />
        </Container>
      </section>
    ),
    
    features: (
      <section key="features" className="bg-gray-50 py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Avantages de notre service à {location.name}</h2>
            <p className="text-lg text-gray-600 mt-4">
              Pourquoi choisir notre service de {service.name.toLowerCase()} à {location.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    ),
    
    faq: (
      <LocationFAQ 
        key="faq"
        locationName={location.name}
        serviceType={service.name}
      />
    ),
    
    otherServices: (
      <section key="otherServices" className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Autres services disponibles à {location.name}</h2>
            <p className="text-lg text-gray-600 mt-4">
              Découvrez notre gamme complète de services dans votre région
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== service.id).map((otherService) => (
              <Link 
                key={otherService.id}
                href={`/${otherService.id}/${location.id}`}
                className="group block bg-gray-50 rounded-lg p-6 transition-all hover:bg-primary/5 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold group-hover:text-primary">{otherService.name}</h3>
                <p className="text-gray-600 mt-2">{otherService.description}</p>
                <div className="mt-4 text-primary font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    ),
    
    cta: (
      <section key="cta" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `url('/images/wash-5144822_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à redonner vie à votre véhicule à {location.name}?
            </h2>
            <p className="text-xl mb-8">
              Réservez dès maintenant et profitez de notre service professionnel de {service.name.toLowerCase()} à {location.name}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href={`${SITE_CONFIG.url}/contact?location=${location.id}`}>
                  Réserver maintenant
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <Link href={`${SITE_CONFIG.url}/contact`}>
                  Demander un devis
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  };

  // Render the sections in the determined order
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchema(service.name, location.name, params.service, params.location),
        }}
      />
      
      <LocationFAQSchema
        locationName={location.name}
        serviceType={service.name}
        serviceId={params.service}
        locationId={params.location}
      />

      <Breadcrumbs
        items={[
          { name: 'Accueil', href: '/' },
          { name: service.name, href: `/${service.id}` },
          { name: location.name },
        ]}
      />

      {sections.hero}
      {sections.localOpportunity}
      {sections.locationInfo}
      {sections.features}
      {sections.pricing}
      {sections.faq}
      {sections.otherServices}
      {sections.cta}
    </>
  );
}
