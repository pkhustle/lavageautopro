import { notFound } from 'next/navigation';
import { ServiceHero } from '../../../components/blocks/service-hero';
import { Features } from '../../../components/blocks/features';
import { PriceEstimator } from '../../../components/blocks/price-estimator';
import { Team } from '../../../components/blocks/team';
import { LocationInfo } from '../../../components/blocks/location-info';
import { LocationTestimonials } from '../../../components/blocks/location-testimonials';
import { LocationMap } from '../../../components/blocks/location-map';
import { LocationFAQ } from '../../../components/blocks/location-faq';
import { LocationFAQSchema } from '../../../components/blocks/location-faq-schema';
import { ServicesGrid } from '../../../components/blocks/services-grid';
import { Container } from '../../../components/ui/container';
import { Button } from '../../../components/ui/button';
import { SERVICES, LOCATIONS, SITE_CONFIG } from '../../../lib/constants';
import { generateLocationMetadata, generateServiceSchema } from '../../../lib/seo';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Directeur",
    description: "Plus de 15 ans d'expérience dans le détailing automobile de luxe.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800"
  },
  {
    name: "Marie Lambert",
    role: "Chef d'équipe",
    description: "Experte en restauration d'intérieur et traitement de cuir.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800"
  },
  {
    name: "Pierre Martin",
    role: "Spécialiste Technique",
    description: "Certifié en correction de peinture et protection céramique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800"
  }
];

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

export default function LocationServicePage({ params }: LocationServicePageProps) {
  const service = SERVICES.find((s) => s.id === params.service);
  const location = LOCATIONS.find((l) => l.id === params.location);
  
  if (!service || !location) return notFound();

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

      {/* Two-column hero section - completely different from home page */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <Container>
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
              <LocationMap 
                locationName={location.name}
                serviceType={service.name}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Location info with statistics - unique to location pages */}
      <LocationInfo 
        locationName={location.name}
        serviceType={service.name}
      />

      {/* Testimonials with dark background - different styling from home */}
      <LocationTestimonials locationName={location.name} />

      {/* Price estimator with location-specific ID for anchor */}
      <section id="tarifs" className="bg-white py-16">
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

      {/* Features with different styling */}
      <section className="bg-gray-50 py-16">
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

      {/* FAQ section */}
      <LocationFAQ 
        locationName={location.name}
        serviceType={service.name}
      />

      {/* Team section with location-specific description */}
      <section className="bg-gray-900 text-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Notre équipe à {location.name}</h2>
            <p className="text-lg text-gray-300 mt-4">
              Des professionnels expérimentés à votre service dans la région de {location.name}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-gray-400 mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services section - styled differently */}
      <section className="bg-white py-16">
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

      {/* CTA section with different design */}
      <section className="relative py-20 overflow-hidden">
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
                <a href="tel:+1234567890">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
