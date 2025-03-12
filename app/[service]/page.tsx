import { notFound } from 'next/navigation';
import { ServiceHero } from '../../components/blocks/service-hero';
import { Features } from '../../components/blocks/features';
import { Team } from '../../components/blocks/team';
import { ServicesGrid } from '../../components/blocks/services-grid';
import { Container } from '../../components/ui/container';
import { Button } from '../../components/ui/button';
import { SERVICES, LOCATIONS, SITE_CONFIG } from '../../lib/constants';
import { generateServiceSchema } from '../../lib/seo';
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

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.id === params.service);
  if (!service) return {};

  return {
    title: service.name,
    description: service.metaDescription,
    keywords: `${service.name}, lavage auto, nettoyage voiture, service automobile`,
    openGraph: {
      title: service.name,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.service}`,
    },
  };
}

const serviceFeatures = {
  'lavage-auto-interieur': [
    {
      title: 'Aspiration complète',
      description: 'Nettoyage en profondeur de tous les recoins de votre véhicule.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: 'Traitement des surfaces',
      description: 'Nettoyage et protection de toutes les surfaces intérieures.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: 'Désinfection complète',
      description: 'Élimination des bactéries et des odeurs désagréables.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ],
  'lave-auto-a-la-main': [
    {
      title: 'Lavage personnalisé',
      description: 'Attention particulière à chaque détail de votre véhicule.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
    {
      title: 'Protection durable',
      description: 'Application de produits de protection haut de gamme.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Finition impeccable',
      description: 'Résultat professionnel garanti à chaque lavage.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ],
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.id === params.service);
  if (!service) return notFound();

  const features = serviceFeatures[service.id as keyof typeof serviceFeatures] || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchema(service.name),
        }}
      />

      <ServiceHero
        title={service.name}
        description={service.description}
      />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="prose prose-lg prose-invert mx-auto px-4">
          <h2 className="text-white">Nos services de <span className="text-primary">{service.name}</span></h2>
          <p className="text-white">{service.metaDescription}</p>
          <ul className="text-gray-300">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <Features
        title="Pourquoi choisir notre service"
        description="Des prestations professionnelles adaptées à vos besoins"
        features={features}
      />

      <ServicesGrid 
        title="Nos Services"
        description="Découvrez notre gamme complète de services de lavage et d'entretien automobile professionnel."
      />

      <Team 
        description="Une équipe passionnée et expérimentée à votre service."
        members={teamMembers}
      />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Zones de <span className="text-primary">service</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Nous offrons nos services dans plusieurs villes de la région
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={`${SITE_CONFIG.url}/${service.id}/${location.id}`}
                className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à <span className="text-primary">redonner vie</span> à votre véhicule ?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Contactez-nous dès maintenant pour réserver votre service
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Réserver maintenant</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
