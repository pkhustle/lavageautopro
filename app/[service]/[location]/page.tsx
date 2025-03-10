import { notFound } from 'next/navigation';
import { ServiceHero } from '../../../components/blocks/service-hero';
import { Features } from '../../../components/blocks/features';
import { Testimonials } from '../../../components/blocks/testimonials';
import { PriceEstimator } from '../../../components/blocks/price-estimator';
import { Team } from '../../../components/blocks/team';
import { HowItWorks } from '../../../components/blocks/how-it-works';
import { Gallery } from '../../../components/blocks/gallery';
import { FAQ } from '../../../components/blocks/faq';
import { ServicesGrid } from '../../../components/blocks/services-grid';
import { Container } from '../../../components/ui/container';
import { Button } from '../../../components/ui/button';
import { SERVICES, LOCATIONS, SITE_CONFIG } from '../../../lib/constants';
import { generateLocationMetadata, generateServiceSchema } from '../../../lib/seo';
import Link from 'next/link';

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

  return generateLocationMetadata(service.name, location.name);
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
          __html: generateServiceSchema(service.name, location.name),
        }}
      />

      <ServiceHero
        title={service.name}
        description={service.description}
        location={location.name}
      />

      <PriceEstimator />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="prose prose-lg prose-invert mx-auto px-4">
          <h2 className="text-white"><span className="text-primary">{service.name}</span> à {location.name}</h2>
          <p className="text-white">
            Notre service professionnel de {service.name.toLowerCase()} à {location.name} vous garantit
            un résultat impeccable. Nous utilisons des produits de haute qualité et des techniques
            éprouvées pour vous offrir le meilleur service possible.
          </p>
          <h3  className="text-white">Nos prestations incluent :</h3>
          <ul className="text-gray-300">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <Features
        title={`Service local à ${location.name}`}
        description="Des avantages exclusifs pour notre clientèle locale"
        features={locationFeatures}
      />

      <ServicesGrid 
        title="Nos Services"
        description="Découvrez notre gamme complète de services de lavage et d'entretien automobile professionnel."
      />

      <section className="bg-gray-900 text-white">
        <Testimonials />
      </section>

      <Team 
        description={`Notre équipe locale à ${location.name}, passionnée et expérimentée à votre service.`}
        members={teamMembers}
      />

      <section>
        <HowItWorks />
      </section>

      <section className="bg-gray-900 text-white">
        <Gallery />
      </section>

      <section>
        <FAQ />
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Réservez votre service à <span className="text-primary">{location.name}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Contactez-nous dès maintenant pour bénéficier de nos services professionnels
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={`${SITE_CONFIG.url}/contact?location=${location.id}`}>Réserver maintenant</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
