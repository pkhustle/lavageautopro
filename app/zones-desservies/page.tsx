import Link from 'next/link';
import { Container } from '../../components/ui/container';
import { Button } from '../../components/ui/button';
import { SERVICES, LOCATIONS, SITE_CONFIG, CONTACT_INFO } from '../../lib/constants';
import { generateMetadata as buildMetadata, generateBreadcrumbSchema } from '../../lib/seo';

export const metadata = buildMetadata({
  title: 'Zones desservies | Lavage auto mobile partout au Québec',
  description:
    "Service mobile de lavage auto intérieur et de lave-auto à la main partout au Québec. Découvrez les villes desservies, de Québec à Montréal en passant par Sherbrooke et le Saguenay.",
  path: 'zones-desservies',
});

export default function ZonesDesserviesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumbSchema([
            { name: 'Accueil', url: SITE_CONFIG.url },
            { name: 'Zones desservies', url: `${SITE_CONFIG.url}/zones-desservies` },
          ]),
        }}
      />

      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0"></div>
        <div
          className="absolute inset-0 opacity-30 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/washing-car-1397382_1280.jpg')` }}
        ></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Un service de lavage auto <span className="text-primary">mobile</span>, partout au Québec
            </h1>
            <p className="text-xl mb-8">
              Notre équipe se déplace avec l&apos;équipement nécessaire pour le lavage auto intérieur
              et le lave-auto à la main. Basés à Québec, nous desservons les villes ci-dessous et
              pouvons nous déplacer ailleurs sur demande.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Villes desservies</h2>
            <p className="text-lg text-gray-600 mt-4">
              Choisissez votre ville pour voir les services offerts dans votre région
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {LOCATIONS.map((location) => (
              <div
                key={location.id}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                <ul className="mt-4 space-y-2">
                  {SERVICES.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/${service.id}/${location.id}`}
                        className="text-primary hover:underline"
                      >
                        {service.name} à {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Votre ville n&apos;est pas dans la liste?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nous étudions chaque demande selon la distance depuis notre base au{' '}
              {CONTACT_INFO.address}, {CONTACT_INFO.city}. Contactez-nous et nous vous confirmerons
              rapidement si nous pouvons nous déplacer chez vous.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
