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
import Image from 'next/image';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Directeur",
    description: "Plus de 15 ans d&apos;expérience dans le détailing automobile de luxe.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800"
  },
  {
    name: "Marie Lambert",
    role: "Chef d&apos;équipe",
    description: "Experte en restauration d&apos;intérieur et traitement de cuir.",
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
          __html: generateServiceSchema(service.name, undefined, params.service),
        }}
      />

      {/* Hero banner with image background - different from both home and location pages */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 opacity-50" style={{ 
          backgroundImage: `url('/images/car-7291166_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-xl mb-8">
              {service.description}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Réserver maintenant</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Service features with cards - unique layout */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nos services de <span className="text-primary">{service.name}</span>
            </h2>
            <p className="text-lg text-gray-600">
              {service.metaDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Ce que nous proposons</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900 text-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Pourquoi choisir notre service</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-gray-300 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process section - unique to service pages */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Notre processus de {service.name.toLowerCase()}
            </h2>
            <p className="text-lg text-gray-600">
              Un service professionnel en plusieurs étapes pour des résultats impeccables
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: "Évaluation initiale",
                  description: "Nous examinons votre véhicule pour identifier les zones nécessitant une attention particulière."
                },
                {
                  title: "Préparation",
                  description: "Nous préparons les produits et équipements adaptés à votre type de véhicule."
                },
                {
                  title: "Traitement professionnel",
                  description: "Nous appliquons nos techniques professionnelles pour un nettoyage en profondeur."
                },
                {
                  title: "Finition et contrôle qualité",
                  description: "Nous vérifions chaque détail pour garantir un résultat impeccable."
                }
              ].map((step, index) => (
                <div key={index} className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team section with different layout */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Notre équipe d&apos;experts
            </h2>
            <p className="text-lg text-gray-600">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations grid with different styling */}
      <section className="py-16 bg-gray-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Où nous trouver
            </h2>
            <p className="text-lg text-gray-300">
              Nous offrons notre service de {service.name.toLowerCase()} dans ces villes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={`/${service.id}/${location.id}`}
                className="bg-gray-800 hover:bg-primary/20 border border-gray-700 hover:border-primary rounded-lg p-3 text-center transition-all"
              >
                <span className="block text-sm font-medium">{location.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nos autres services
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme complète de services professionnels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.id !== service.id).map((otherService) => (
              <Link 
                key={otherService.id}
                href={`/${otherService.id}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg p-6 transition-all group-hover:shadow-md">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">{otherService.name}</h3>
                  <p className="text-gray-600 mb-4">{otherService.description}</p>
                  <span className="text-primary font-medium flex items-center">
                    En savoir plus
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section with different design */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Prêt à essayer notre service de {service.name.toLowerCase()} ?
              </h2>
              <p className="text-white/90 text-lg">
                Contactez-nous dès maintenant pour réserver ou obtenir plus d&apos;informations.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">
                  Réserver maintenant
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
