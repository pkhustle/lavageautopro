import { Hero } from '../components/blocks/hero';
import { ServicesGrid } from '../components/blocks/services-grid';
import { Features } from '../components/blocks/features';
import { Testimonials } from '../components/blocks/testimonials';
import { PriceEstimator } from '../components/blocks/price-estimator';
import { Team } from '../components/blocks/team';
import { HowItWorks } from '../components/blocks/how-it-works';
import { Gallery } from '../components/blocks/gallery';
import { FAQ } from '../components/blocks/faq';
import { Container } from '../components/ui/container';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { SITE_CONFIG } from '../lib/constants';

export const metadata = {
  title: SITE_CONFIG.defaultTitle,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const homeFeatures = [
  {
    title: 'Service à domicile',
    description: 'Nous venons à vous pour un service pratique et sans tracas.',
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
  {
    title: 'Équipement professionnel',
    description: 'Utilisation des meilleurs produits et équipements du marché.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Service rapide',
    description: 'Intervention rapide et efficace pour minimiser votre attente.',
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
    title: 'Résultats garantis',
    description: 'Satisfaction garantie ou reprise du service gratuitement.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

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

export default function Home() {
  return (
    <>
      <Hero
        title="Service professionnel de lavage automobile"
        description="Redonnez à votre véhicule son éclat d'origine avec nos services de nettoyage professionnel. Une équipe expérimentée et des résultats garantis."
        cta={{
          text: "Réserver maintenant",
          href: `${SITE_CONFIG.url}/contact`,
        }}
      />

      <section className="bg-gray-50">
        <PriceEstimator />
      </section>

      <section>
        <ServicesGrid showAll={false} />
      </section>

      <section>
        <Features
          title="L'excellence au service de votre véhicule"
          description="Des services professionnels adaptés à vos besoins avec une garantie de satisfaction."
          features={homeFeatures}
          columns={4}
        />
      </section>

      <section>
        <Testimonials />
      </section>

      <section className="bg-gray-50">
        <Team 
          description="Une équipe passionnée et expérimentée à votre service."
          members={teamMembers}
        />
      </section>

      <section>
        <HowItWorks />
      </section>

      <section className="bg-gray-50">
        <Gallery />
      </section>

      <section>
        <FAQ />
      </section>

      <section className="relative overflow-hidden bg-gray-50 py-20">
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt à redonner vie à votre véhicule ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8">
              Contactez-nous dès maintenant pour obtenir un devis personnalisé et profiter de nos services professionnels.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <Button asChild variant="outline-accent">
                <Link href={`${SITE_CONFIG.url}/contact`}>Nous contacter</Link>
              </Button>
              <Button asChild variant="outline-primary" className="bg-white hover:bg-white/90">
                <Link href={`${SITE_CONFIG.url}/services`}>Voir nos services</Link>
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        </div>
      </section>
    </>
  );
}
