import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/container';
import { Grid } from '../ui/container';
import { SERVICES } from '../../lib/constants';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  image?: string;
}

function ServiceCard({ title, description, features, href, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            <Link href={href} className="after:absolute after:inset-0">
              {title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-foreground/80">{description}</p>
          <ul className="mt-4 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-sm text-foreground/70">
                <svg
                  className="mr-2 h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <span className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors">
            En savoir plus
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

const serviceImages = {
  'lavage-auto-interieur': '/images/wash-5144822_1280.jpg',
  'lave-auto-a-la-main': '/images/wash-a-car-1822415_1280.jpg',
  'lavage-auto-a-proximite': '/images/automobile-2875254_1280.jpg',
  'nettoyage-voiture-professionnel': '/images/cleaning-1837331_1280.jpg'
};

interface ServicesGridProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

export function ServicesGrid({
  title = "Nos Services",
  description = "Découvrez notre gamme complète de services de lavage et d'entretien automobile professionnel.",
  showAll = true,
}: ServicesGridProps) {
  const displayedServices = showAll ? SERVICES : SERVICES.slice(0, 3) as typeof SERVICES;

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 w-full h-full bg-gradient-to-b from-background to-white/50" />
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text">
            {title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            {description}
          </p>
        </div>
        <Grid className="mt-12 md:mt-16">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.description}
              features={service.features}
              href={`/${service.id}`}
              image={serviceImages[service.id as keyof typeof serviceImages] || ''}
            />
          ))}
        </Grid>
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              Voir tous nos services <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
