import { Hero } from '../../components/blocks/hero';
import { ServicesGrid } from '../../components/blocks/services-grid';
import { Features } from '../../components/blocks/features';
import { Container } from '../../components/ui/container';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { SITE_CONFIG } from '../../lib/constants';

export const metadata = {
  title: 'Nos Services | ' + SITE_CONFIG.name,
  description: 'Découvrez notre gamme complète de services de lavage et d\'entretien automobile professionnel.',
};

const serviceFeatures = [
  {
    title: 'Expertise professionnelle',
    description: 'Notre équipe est formée aux dernières techniques de nettoyage et d\'entretien automobile.',
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
  {
    title: 'Produits de qualité',
    description: 'Nous utilisons uniquement des produits haut de gamme, respectueux de votre véhicule et de l\'environnement.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Service personnalisé',
    description: 'Chaque véhicule est unique, c\'est pourquoi nous adaptons nos services à vos besoins spécifiques.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
  },
  {
    title: 'Satisfaction garantie',
    description: 'Nous nous engageons à vous offrir un résultat impeccable ou nous reprenons le service gratuitement.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: 'Service rapide',
    description: 'Nous respectons votre temps et nous nous engageons à fournir un service efficace et ponctuel.',
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
    title: 'Service à domicile',
    description: 'Nous venons à vous pour un service pratique et sans tracas, où que vous soyez.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nos Services de Lavage Automobile"
        description="Découvrez notre gamme complète de services professionnels pour l'entretien et le nettoyage de votre véhicule."
        cta={{
          text: "Réserver maintenant",
          href: "/contact",
        }}
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services professionnels de lavage automobile
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Chez {SITE_CONFIG.name}, nous proposons une gamme complète de services de nettoyage et d'entretien pour tous types de véhicules. Que vous ayez besoin d'un lavage intérieur approfondi, d'un nettoyage extérieur minutieux ou d'un service complet de détailing, notre équipe d'experts est là pour redonner à votre véhicule son éclat d'origine.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <ServicesGrid 
          title="Tous nos services"
          description="Explorez notre gamme complète de services professionnels pour l'entretien de votre véhicule."
          showAll={true}
        />
      </section>

      <section>
        <Features
          title="Pourquoi choisir nos services"
          description="Découvrez ce qui fait la différence dans notre approche du lavage et de l'entretien automobile."
          features={serviceFeatures}
        />
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Notre <span className="text-primary">engagement</span> qualité
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Nous nous engageons à fournir un service de la plus haute qualité pour chaque véhicule que nous traitons. Notre équipe de professionnels expérimentés utilise des techniques avancées et des produits premium pour garantir des résultats exceptionnels à chaque fois.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Que vous possédiez une voiture familiale, un véhicule de luxe ou un utilitaire, nous adaptons nos services pour répondre aux besoins spécifiques de votre véhicule et dépasser vos attentes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Prêt à redonner vie à votre véhicule ?
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Contactez-nous dès maintenant pour réserver votre service ou obtenir un devis personnalisé.
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
