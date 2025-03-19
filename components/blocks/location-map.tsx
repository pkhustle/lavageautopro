import { Container } from '../ui/container';
import { ImageCarousel } from './image-carousel';

interface LocationMapProps {
  locationName: string;
  serviceType: string;
}

export function LocationMap({ locationName, serviceType }: LocationMapProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre service à {locationName}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous offrons nos services de {serviceType.toLowerCase()} dans toute la région de {locationName} et ses environs
          </p>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
          <div className="relative" style={{ height: '450px' }}>
            <ImageCarousel className="w-full h-full" imageCount={5} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Besoin de nos services à {locationName}? Contactez-nous dès aujourd&apos;hui pour planifier votre rendez-vous.
          </p>
        </div>
      </Container>
    </section>
  );
}
