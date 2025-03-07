import { Container } from '../ui/container';
import { Grid } from '../ui/container';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const defaultFeatures: Feature[] = [
  {
    title: 'Service professionnel',
    description: 'Une équipe expérimentée et qualifiée pour prendre soin de votre véhicule.',
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
    title: 'Satisfaction garantie',
    description: 'Nous nous engageons à fournir un service de qualité supérieure à chaque fois.',
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
    title: 'Prix compétitifs',
    description: 'Des tarifs transparents et compétitifs pour tous nos services.',
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
];

export function Features({
  title = "Pourquoi nous choisir",
  description = "Découvrez ce qui fait notre différence et pourquoi nos clients nous font confiance.",
  features = defaultFeatures,
  columns = 3,
}: FeaturesProps) {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
        <Grid className="mt-12 md:mt-16" cols={columns}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
